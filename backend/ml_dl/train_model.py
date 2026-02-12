import pandas as pd
import re
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

# Load data
fake_df = pd.read_csv("dataset/Fake.csv")
true_df = pd.read_csv("dataset/True.csv")

fake_df["label"] = 0
true_df["label"] = 1

df = pd.concat([fake_df, true_df])
df = df.sample(frac=1).reset_index(drop=True)

# 🔥 SINGLE SOURCE OF TRUTH PREPROCESSOR
def preprocess_text(text):
    text = text.lower()
    text = re.sub(r"http\S+", "", text)
    text = re.sub(r"[^a-z\s]", "", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()

df["text"] = df["text"].apply(preprocess_text)

# X = df["text"]/
df["text"] = df["title"].fillna("") + " " + df["text"]
X = df["text"]

y = df["label"]

vectorizer = TfidfVectorizer(
    stop_words="english",
    max_df=0.7,
    min_df=5
)

X = vectorizer.fit_transform(X)

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# model = LogisticRegression(max_iter=1000)
model = LogisticRegression(max_iter=2000, class_weight="balanced")

model.fit(X_train, y_train)

y_pred = model.predict(X_test)
print("Accuracy:", accuracy_score(y_test, y_pred))

# ✅ SAVE CLEAN MODEL
with open("backend/ml_dl/fake_news_model.pkl", "wb") as f:
    pickle.dump(model, f)

with open("backend/ml_dl/tfidf_vectorizer.pkl", "wb") as f:
    pickle.dump(vectorizer, f)

print("Model & Vectorizer saved correctly")
