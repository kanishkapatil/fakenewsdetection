
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

