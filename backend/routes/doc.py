# from flask import Blueprint, request, jsonify
# import os
# import google.generativeai as genai

# doc_bp = Blueprint("doc_bp", __name__)

# # Re-use your working config
# API_KEY = os.getenv("GEMINI_API_KEY")
# genai.configure(api_key=API_KEY)

# def get_multimodal_model():
#     """Finds a model that supports both text and files (like 1.5-flash)"""
#     for m in genai.list_models():
#         # We look for models that support 'generateContent' 
#         # Usually, 'gemini-1.5-flash' or 'gemini-1.5-pro' are the targets
#         if "generateContent" in m.supported_generation_methods:
#             print(f"DocIntel using model: {m.name}")
#     return None

# # Initialize the same way your chatbot does
# doc_model = get_multimodal_model()

# @doc_bp.route("/doc-intel", methods=["POST"])
# def document_intelligence():
#     if not doc_model:
#         return jsonify({"error": "No multimodal model found"}), 500

#     if 'file' not in request.files:
#         return jsonify({"error": "No file part"}), 400

#     file = request.files['file']
    
#     try:
#         # Read the file bytes
#         file_data = file.read()
        
#         # Multimodal request: [Prompt, File Data]
#         response = doc_model.generate_content([
#             "Extract all text from this document and analyze if it contains misinformation. Provide a verdict.",
#             {"mime_type": file.content_type, "data": file_data}
#         ])

#         return jsonify({
#             "extracted_text": response.text,
#             "prediction": "Fake" if "fake" in response.text.lower() else "Real",
#             "confidence": 0.95
#         })
        
#     except Exception as e:
#         print(f"DocIntel Error: {str(e)}")
#         return jsonify({"error": str(e)}), 500 




from flask import Blueprint, request, jsonify
import os
import google.generativeai as genai
# Import the helper from your predict file
from backend.routes.predict import get_prediction_logic
doc_bp = Blueprint("doc_bp", __name__)

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

def get_multimodal_model():
    for m in genai.list_models():
        if "generateContent" in m.supported_generation_methods:
            return genai.GenerativeModel(m.name)
    return None

model = get_multimodal_model()

@doc_bp.route("/doc-intel", methods=["POST"])
def document_intelligence():
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files['file']
    
    try:
        # STEP 1: Gemini OCR
        file_data = file.read()
        response = model.generate_content([
            "Extract all text exactly as it appears in this document. Do not add comments.",
            {"mime_type": file.content_type, "data": file_data}
        ])
        
        extracted_text = response.text

        # STEP 2: Use the prediction brain from predict.py
        analysis = get_prediction_logic(extracted_text)
        
        # STEP 3: Return real data to the UI
        return jsonify({
            "extracted_text": extracted_text,
            "prediction": analysis["prediction"],
            "confidence": analysis["confidence"],
            "top_keywords": analysis["top_keywords"],
            "method": "multimodal_neural_analysis"
        })
        
    except Exception as e:
        print(f"DOC-INTEL ERROR: {e}")
        return jsonify({"error": str(e)}), 500






# from flask import Blueprint, request, jsonify
# import os
# import google.generativeai as genai
# # Import the helper from your predict file
# from backend.routes.predict import get_prediction_logic

# doc_bp = Blueprint("doc_bp", __name__)

# genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# def get_multimodal_model():
#     # Explicitly try to get the 1.5-flash model as it's best for documents
#     try:
#         return genai.GenerativeModel('gemini-1.5-flash')
#     except:
#         for m in genai.list_models():
#             if "generateContent" in m.supported_generation_methods:
#                 return genai.GenerativeModel(m.name)
#     return None

# model = get_multimodal_model()

# # Added OPTIONS to methods to resolve CORS preflight issues
# @doc_bp.route("/doc-intel", methods=["POST", "OPTIONS"])
# def document_intelligence():
#     # Handle the Preflight request from the browser
#     if request.method == "OPTIONS":
#         return jsonify({"status": "ok"}), 200

#     if 'file' not in request.files:
#         return jsonify({"error": "No file uploaded"}), 400

#     file = request.files['file']
    
#     try:
#         # STEP 1: Gemini OCR
#         file_data = file.read()
#         response = model.generate_content([
#             "Extract all text exactly as it appears in this document. Do not add comments.",
#             {"mime_type": file.content_type, "data": file_data}
#         ])
        
#         extracted_text = response.text if response.text else ""

#         # STEP 2: Use the prediction brain from predict.py
#         analysis = get_prediction_logic(extracted_text)
        
#         # STEP 3: Return data formatted specifically for predict.py's PDF logic
#         # Note: We include 'keywords' and 'external_verification' so generate_report doesn't crash
#         return jsonify({
#             "extracted_text": extracted_text,
#             "text": extracted_text,                 # Added for PDF logic mapping
#             "prediction": analysis["prediction"],
#             "confidence": analysis["confidence"],
#             "top_keywords": analysis["top_keywords"],
#             "keywords": analysis["top_keywords"],     # Added to match 'keywords' in predict.py
#             "external_verification": {               # Added to prevent 'NoneType' error in PDF
#                 "verdict": "Document Integrity Scan"
#             },
#             "method": "multimodal_neural_analysis"
#         })
        
#     except Exception as e:
#         print(f"DOC-INTEL ERROR: {e}")
#         return jsonify({"error": str(e)}), 500