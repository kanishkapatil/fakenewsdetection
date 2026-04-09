
from flask import Blueprint, request, jsonify
import requests
import os
import re

credibility_bp = Blueprint("credibility", __name__)

NEWS_API_KEY = os.getenv("NEWS_API_KEY") or "96b5f15da9c3497a8d49649fc5b7fe1e"

# Use a SET for faster lookups
TRUSTED_KEYWORDS = {
    "bbc news", "reuters", "the times of india", "the hindu", 
    "ndtv", "associated press", "hindustan times", "india today",
    "bloomberg", "the guardian", "al jazeera english", "abc news"
}

def clean_text(text):
    return re.sub(r'[^\w\s]', '', text.lower())

@credibility_bp.route("/credibility", methods=["POST"])
def check_credibility():
    data = request.get_json()
    if not data or "keywords" not in data:
        return jsonify({"error": "Keywords not provided"}), 400

    keywords = [k.lower() for k in data["keywords"]]
    query = " AND ".join(keywords) # Using 'AND' forces NewsAPI to find matches for all terms

    url = "https://newsapi.org/v2/everything"
    params = {
        "q": query,
        "language": "en",
        "pageSize": 40,
        "sortBy": "relevancy",
        "apiKey": NEWS_API_KEY
    }

    try:
        response = requests.get(url, params=params, timeout=5)
        response.raise_for_status()
    except Exception as e:
        return jsonify({"error": f"API Connection failed: {str(e)}"}), 500

    articles = response.json().get("articles", [])
    
    trusted_hits = set()
    high_relevance_count = 0
    
    for art in articles:
        source_name = art["source"]["name"].lower()
        title = art["title"].lower() if art["title"] else ""
        
        # 1. Check Source Trust
        is_trusted = any(trusted in source_name for trusted in TRUSTED_KEYWORDS)
        
        # 2. Check Title Relevance (Do at least 50% of keywords appear in title?)
        matches = sum(1 for word in keywords if word in title)
        relevance_ratio = matches / len(keywords) if keywords else 0
        
        if is_trusted:
            # We weight trusted sources that also have relevant titles much higher
            if relevance_ratio > 0.3:
                trusted_hits.add(art["source"]["name"])
                high_relevance_count += 1

    # CALCULATING THE SCORE (Better Formula)
    # Diversity of sources is better than 10 articles from 1 source
    source_diversity_score = min(len(trusted_hits) * 20, 60) # Max 60 pts from sources
    relevance_score = min(high_relevance_count * 5, 40)      # Max 40 pts from volume
    
    total_score = source_diversity_score + relevance_score

    # Forensic Verdict Logic
    if total_score >= 70:
        verdict = "High Confidence: Real"
    elif total_score >= 40:
        verdict = "Moderate Confidence: Unverified"
    else:
        verdict = "Low Confidence: Likely Fake/Satire"

    return jsonify({
        "score": total_score,
        "verdict": verdict,
        "trusted_sources": list(trusted_hits),
        "total_results": len(articles),
        "analysis": f"Detected {len(trusted_hits)} independent trusted outlets reporting similar facts."
    })