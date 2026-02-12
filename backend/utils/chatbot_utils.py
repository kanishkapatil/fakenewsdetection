def get_chatbot_response(message):
    # Dummy chatbot response for now
    if "fake news" in message.lower():
        return "I can help you detect Fake/Real news!"
    return "Sorry, I can only answer news-related queries for now."
