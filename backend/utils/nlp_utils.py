from sklearn.feature_extraction.text import CountVectorizer
from textblob import TextBlob
from gensim.summarization import summarize

def summarize_text(text):
    try:
        summary = summarize(text)
        if not summary:
            return text[:200] + "..."
        return summary
    except:
        return text[:200] + "..."

def sentiment_analysis(text):
    blob = TextBlob(text)
    polarity = blob.sentiment.polarity
    if polarity > 0:
        return "Positive"
    elif polarity < 0:
        return "Negative"
    return "Neutral"

def extract_keywords(text, top_n=5):
    vectorizer = CountVectorizer(max_features=top_n, stop_words="english")
    X = vectorizer.fit_transform([text])
    return vectorizer.get_feature_names_out().tolist()
