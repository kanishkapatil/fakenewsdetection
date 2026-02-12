from flask import Blueprint, request, jsonify
from langdetect import detect
from backend.routes.predict import predict_bp

multilingual_bp = Blueprint("multilingual_bp", __name__)

@multilingual_bp.route("/", methods=["POST"])
def multilingual_predict():
    data = request.get_json()
    text = data.get("text", "")
    if not text:
        return jsonify({"error": "No text provided"}), 400

    lang = detect(text)  # 'en', 'hi', 'mr', etc.
    return jsonify({"language": lang})
