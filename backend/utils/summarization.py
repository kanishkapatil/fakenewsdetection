from transformers import pipeline

# Load once (important)
summarizer = pipeline(
    "summarization",
    model="sshleifer/distilbart-cnn-12-6",
    tokenizer="sshleifer/distilbart-cnn-12-6"
)

def summarize_text(text: str) -> str:
    if len(text.split()) < 50:
        return text  # Too short to summarize meaningfully

    summary = summarizer(
        text,
        max_length=120,
        min_length=40,
        do_sample=False
    )

    return summary[0]["summary_text"]
