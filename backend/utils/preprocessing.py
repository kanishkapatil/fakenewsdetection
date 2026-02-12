
# import re
# import string
# import nltk
# from nltk.corpus import stopwords

# nltk.download("stopwords")
# nltk.download("punkt")

# stop_words = set(stopwords.words("english"))

# def preprocess_text(text):
#     """
#     Clean and preprocess news text for model prediction.
#     """
#     # Lowercase
#     text = text.lower()
#     # Remove URLs
#     text = re.sub(r"http\S+|www\S+|https\S+", "", text, flags=re.MULTILINE)
#     # Remove punctuation
#     text = text.translate(str.maketrans("", "", string.punctuation))
#     # Remove stopwords
#     tokens = nltk.word_tokenize(text)
#     filtered_tokens = [word for word in tokens if word not in stop_words]
#     return " ".join(filtered_tokens)




import re
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

stop_words = set(stopwords.words("english"))

def preprocess_text(text):
    text = text.lower()
    text = re.sub(r"[^a-zA-Z\s]", "", text)
    tokens = word_tokenize(text)
    tokens = [word for word in tokens if word not in stop_words]
    return " ".join(tokens)
