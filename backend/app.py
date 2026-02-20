
# from flask import Flask
# from flask_cors import CORS
# from dotenv import load_dotenv
# import os

# # Load environment variables
# load_dotenv()

# from backend.routes.predict import predict_bp
# from backend.routes.summarization import summarize_bp
# from backend.routes.sentiment import sentiment_bp
# from backend.routes.chatbot import chatbot_bp
# from backend.routes.credibility import credibility_bp
# from backend.routes.explain import explain_bp



# app = Flask(__name__)
# CORS(app)

# app.register_blueprint(predict_bp)
# app.register_blueprint(summarize_bp)
# app.register_blueprint(sentiment_bp)
# app.register_blueprint(chatbot_bp)
# app.register_blueprint(credibility_bp)
# app.register_blueprint(explain_bp)

# @app.route("/")
# def home():
#     return "Backend is running"


# if __name__ == "__main__":
#     app.run(host="127.0.0.1", port=5000, debug=True)


from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Existing Imports
from backend.routes.predict import predict_bp
from backend.routes.summarization import summarize_bp
from backend.routes.sentiment import sentiment_bp
from backend.routes.chatbot import chatbot_bp
from backend.routes.credibility import credibility_bp
from backend.routes.explain import explain_bp

# NEW: Import Document Intelligence Blueprint
from backend.routes.doc import doc_bp

app = Flask(__name__)
# It is often better to specify origins in production, 
# but for dev, this stays as is:
# CORS(app)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}}, supports_credentials=True)

# Register existing Blueprints
app.register_blueprint(predict_bp)
app.register_blueprint(summarize_bp)
app.register_blueprint(sentiment_bp)
app.register_blueprint(chatbot_bp)
app.register_blueprint(credibility_bp)
app.register_blueprint(explain_bp)

# NEW: Register the Doc Intelligence Blueprint
# Using a url_prefix helps keep your API organized: e.g., /api/doc-intel
app.register_blueprint(doc_bp, url_prefix='/api')

@app.route("/")
def home():
    return "TRUTHENGINE Backend is active"

if __name__ == "__main__":
    # Ensure environment variables are loaded for API keys
    app.run(host="127.0.0.1", port=5000, debug=True)