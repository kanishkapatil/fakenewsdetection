
from flask import Blueprint, request, jsonify
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer

# Download once
nltk.download("vader_lexicon")

sentiment_bp = Blueprint("sentiment", __name__)

analyzer = SentimentIntensityAnalyzer()

@sentiment_bp.route("/sentiment", methods=["POST"])
def sentiment():
    data = request.get_json()

    if not data or "text" not in data:
        return jsonify({"error": "No text provided"}), 400

    text = data["text"]
    scores = analyzer.polarity_scores(text)

    compound = scores["compound"]

    if compound >= 0.05:
        sentiment_label = "POSITIVE"
    elif compound <= -0.05:
        sentiment_label = "NEGATIVE"
    else:
        sentiment_label = "NEUTRAL"

    confidence = abs(compound)

    return jsonify({
        "sentiment": sentiment_label,
        "confidence": round(confidence, 2)
    })
