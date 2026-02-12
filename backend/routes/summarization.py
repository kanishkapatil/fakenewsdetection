


# from flask import Blueprint, request, jsonify
# import nltk
# import networkx as nx
# from nltk.tokenize import sent_tokenize, word_tokenize
# from nltk.corpus import stopwords
# import string

# nltk.download("punkt")
# nltk.download("stopwords")

# summarize_bp = Blueprint("summarize", __name__)

# def textrank_summary(text, num_sentences=2):
#     sentences = sent_tokenize(text)

#     if len(sentences) <= num_sentences:
#         return text

#     stop_words = set(stopwords.words("english"))
#     punctuation = set(string.punctuation)

#     sentence_vectors = []

#     for sent in sentences:
#         words = word_tokenize(sent.lower())
#         words = [w for w in words if w not in stop_words and w not in punctuation]
#         sentence_vectors.append(words)

#     similarity_matrix = [[0]*len(sentences) for _ in range(len(sentences))]

#     for i in range(len(sentences)):
#         for j in range(len(sentences)):
#             if i != j:
#                 similarity_matrix[i][j] = len(
#                     set(sentence_vectors[i]).intersection(sentence_vectors[j])
#                 )

#     graph = nx.from_numpy_array(nx.np.array(similarity_matrix))
#     scores = nx.pagerank(graph)

#     ranked = sorted(((scores[i], s) for i, s in enumerate(sentences)), reverse=True)
#     summary = " ".join([ranked[i][1] for i in range(num_sentences)])

#     return summary


# @summarize_bp.route("/summarize", methods=["POST"])
# def summarize():
#     data = request.get_json()

#     if not data or "text" not in data:
#         return jsonify({"error": "No text provided"}), 400

#     text = data["text"]

#     summary = textrank_summary(text)

#     return jsonify({
#         "summary": summary
#     })






from flask import Blueprint, request, jsonify
import nltk
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.corpus import stopwords
from collections import Counter
import string

nltk.download("punkt")
nltk.download("stopwords")

summarize_bp = Blueprint("summarize", __name__)



@summarize_bp.route("/summarize", methods=["POST"])
def summarize():
    data = request.get_json()

    if not data or "text" not in data:
        return jsonify({"error": "No text provided"}), 400

    text = data["text"]

    if len(text.split()) < 40:
        return jsonify({
            "summary": text,
            "note": "Text too short to summarize"
        })

    sentences = sent_tokenize(text)
    words = word_tokenize(text.lower())

    stop_words = set(stopwords.words("english"))
    words = [
        w for w in words
        if w not in stop_words and w not in string.punctuation
    ]

    word_freq = Counter(words)

    sentence_scores = {}
    for sentence in sentences:
        for word in word_tokenize(sentence.lower()):
            if word in word_freq:
                sentence_scores[sentence] = sentence_scores.get(sentence, 0) + word_freq[word]

    summary_sentences = sorted(
        sentence_scores,
        key=sentence_scores.get,
        reverse=True
    )[:3]

    summary = " ".join(summary_sentences)

    return jsonify({"summary": summary})