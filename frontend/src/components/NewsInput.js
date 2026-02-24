export default function NewsInput({ text, setText, onAnalyze }) {
  return (
    <div className="card">
      <h2>📰 News Analyzer</h2>
      <textarea
        rows="6"
        placeholder="Paste news here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={onAnalyze}>Analyze News</button>
    </div>
  );
}
