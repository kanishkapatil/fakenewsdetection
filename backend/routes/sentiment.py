# from flask import Blueprint, request, jsonify
# from backend.utils.nlp_utils import sentiment_analysis

# sentiment_bp = Blueprint("sentiment_bp", __name__)

# @sentiment_bp.route("/", methods=["POST"])
# def sentiment():
#     data = request.get_json()
#     text = data.get("text", "")
#     if not text:
#         return jsonify({"error": "No text provided"}), 400

#     sentiment = sentiment_analysis(text)
#     return jsonify({"sentiment": sentiment})





# from flask import Blueprint, request, jsonify
# from transformers import pipeline

# sentiment_bp = Blueprint("sentiment", __name__)

# # Load sentiment model
# sentiment_analyzer = pipeline(
#     "sentiment-analysis",
#     model="distilbert-base-uncased-finetuned-sst-2-english"
# )

# @sentiment_bp.route("/sentiment", methods=["POST"])
# def sentiment():
#     data = request.get_json()

#     if not data or "text" not in data:
#         return jsonify({"error": "No text provided"}), 400

#     text = data["text"]

#     result = sentiment_analyzer(text)[0]

#     return jsonify({
#         "label": result["label"],
#         "confidence": round(float(result["score"]), 2)
#     })





# from flask import Blueprint, request, jsonify
# from transformers import pipeline

# sentiment_bp = Blueprint("sentiment", __name__)

# # Load sentiment model (lightweight & accurate)
# sentiment_analyzer = pipeline(
#     "sentiment-analysis",
#     model="distilbert-base-uncased-finetuned-sst-2-english"
# )

# @sentiment_bp.route("/sentiment", methods=["POST"])
# def analyze_sentiment():
#     data = request.get_json()

#     if not data or "text" not in data:
#         return jsonify({"error": "No text provided"}), 400

#     text = data["text"]

#     result = sentiment_analyzer(text[:512])[0]

#     return jsonify({
#         "sentiment": result["label"],
#         "confidence": round(float(result["score"]), 2)
#     })





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
