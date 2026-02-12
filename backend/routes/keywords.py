from flask import Blueprint, request, jsonify
from backend.utils.nlp_utils import extract_keywords

keywords_bp = Blueprint("keywords_bp", __name__)

@keywords_bp.route("/", methods=["POST"])
def keywords():
    data = request.get_json()
    text = data.get("text", "")
    if not text:
        return jsonify({"error": "No text provided"}), 400

    keywords = extract_keywords(text)
    return jsonify({"keywords": keywords})
