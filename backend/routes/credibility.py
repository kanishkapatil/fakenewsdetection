



# from flask import Blueprint, request, jsonify
# import requests
# import os

# credibility_bp = Blueprint("credibility", __name__)

# # ---------- CONFIG ----------
# NEWS_API_KEY = "96b5f15da9c3497a8d49649fc5b7fe1e"   # replace later
# TRUSTED_SOURCES = [
#     "bbc-news",
#     "the-times-of-india",
#     "the-hindu",
#     "reuters",
#     "associated-press",
#     "ndtv"
# ]

# # ---------- ROUTE ----------
# @credibility_bp.route("/credibility", methods=["POST"])
# def check_credibility():
#     data = request.get_json()

#     if not data or "keywords" not in data:
#         return jsonify({"error": "Keywords required"}), 400

#     keywords = " ".join(data["keywords"])

#     url = "https://newsapi.org/v2/everything"
#     params = {
#         "q": keywords,
#         "language": "en",
#         "apiKey": NEWS_API_KEY,
#         "pageSize": 10
#     }

#     response = requests.get(url, params=params)
#     results = response.json()

#     if results.get("status") != "ok":
#         return jsonify({"error": "API error"}), 500

#     articles = results.get("articles", [])

#     matched_sources = []
#     for article in articles:
#         source = article["source"]["name"].lower()
#         matched_sources.append(source)

#     trusted_hits = [
#         s for s in matched_sources
#         if any(t in s for t in TRUSTED_SOURCES)
#     ]

#     credibility_score = min(100, len(trusted_hits) * 20)

#     return jsonify({
#         "total_articles_found": len(articles),
#         "trusted_sources_found": list(set(trusted_hits)),
#         "credibility_score": credibility_score,
#         "verdict": "Likely Real" if credibility_score >= 40 else "Unverified / Possibly Fake"
#     })





from flask import Blueprint, request, jsonify
import requests
import os

credibility_bp = Blueprint("credibility", __name__)

# 🔑 Your NewsAPI key (make sure this is correct)
NEWS_API_KEY = os.getenv("NEWS_API_KEY") or "96b5f15da9c3497a8d49649fc5b7fe1e"

# Trusted media keywords (REAL WORLD NAMES)
TRUSTED_KEYWORDS = [
    "bbc",
    "reuters",
    "times of india",
    "the hindu",
    "ndtv",
    "associated press",
    "hindustan times",
    "india today"
]

@credibility_bp.route("/credibility", methods=["POST"])
def check_credibility():
    data = request.get_json()

    if not data or "keywords" not in data:
        return jsonify({"error": "Keywords not provided"}), 400

    keywords = data["keywords"]
    query = " ".join(keywords)

    url = "https://newsapi.org/v2/everything"
    params = {
        "q": query,
        "language": "en",
        # "pageSize": 20,
        "pageSize": 50,
"sortBy": "relevancy",

        "apiKey": NEWS_API_KEY
    }

    response = requests.get(url, params=params)

    if response.status_code != 200:
        return jsonify({"error": "Failed to fetch articles"}), 500

    articles = response.json().get("articles", [])

    matched_sources = []
    trusted_sources = []

    for article in articles:
        source_name = article["source"]["name"].lower()
        matched_sources.append(source_name)

        if any(t in source_name for t in TRUSTED_KEYWORDS):
            trusted_sources.append(source_name)

    total_articles = len(articles)
    trusted_count = len(set(trusted_sources))

    credibility_score = int((trusted_count / total_articles) * 100) if total_articles > 0 else 0

    if credibility_score >= 60:
        verdict = "Likely Real"
    elif credibility_score >= 30:
        verdict = "Unverified"
    else:
        verdict = "Possibly Fake"

    return jsonify({
        "total_articles_found": total_articles,
        "trusted_sources_found": list(set(trusted_sources)),
        "credibility_score": credibility_score,
        "verdict": verdict
    })
