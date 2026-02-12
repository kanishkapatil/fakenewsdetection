from flask import Blueprint, request, jsonify
import pickle
import os
import numpy as np

explain_bp = Blueprint("explain", __name__)

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODEL_PATH = os.path.join(BASE_DIR, "ml_dl", "fake_news_model.pkl")
VECTORIZER_PATH = os.path.join(BASE_DIR, "ml_dl", "tfidf_vectorizer.pkl")

with open(MODEL_PATH, "rb") as f:
    model = pickle.load(f)

with open(VECTORIZER_PATH, "rb") as f:
    vectorizer = pickle.load(f)

@explain_bp.route("/explain", methods=["POST"])
def explain():
    data = request.get_json()
    text = data.get("text", "")

    if not text:
        return jsonify({"error": "No text provided"}), 400

    X = vectorizer.transform([text])
    feature_names = vectorizer.get_feature_names_out()
    coef = model.coef_[0]

    contributions = X.toarray()[0] * coef
    top_idx = np.argsort(np.abs(contributions))[-5:][::-1]

    explanation = [
        {
            "keyword": feature_names[i],
            "impact": round(float(contributions[i]), 4)
        }
        for i in top_idx if X.toarray()[0][i] > 0
    ]

    return jsonify({"explanation": explanation})
