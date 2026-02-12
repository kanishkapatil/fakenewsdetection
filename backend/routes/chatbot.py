from flask import Blueprint, request, jsonify
import os
import google.generativeai as genai

chatbot_bp = Blueprint("chatbot", __name__)

# Configure Gemini from .env
API_KEY = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=API_KEY)

def get_working_model():
    for m in genai.list_models():
        if "generateContent" in m.supported_generation_methods:
            return genai.GenerativeModel(m.name)
    return None

model = get_working_model()

@chatbot_bp.route("/chatbot", methods=["POST"])
def chatbot():
    if not model:
        return jsonify({"error": "No supported Gemini model found"}), 500

    data = request.get_json()
    if not data or "message" not in data:
        return jsonify({"error": "No message provided"}), 400

    try:
        response = model.generate_content(data["message"])
        return jsonify({"reply": response.text})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
