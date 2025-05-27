import React from "react";

export default function QuoteBox({ quote, theme, onNewQuote }) {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote.text}" - ${quote.author}`
  )}`;

  return (
    <div
      id="quote-box"
      style={{
        background: theme.card,
        color: theme.text,
        borderRadius: 24,
        boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
        maxWidth: 600,
        margin: "80px auto 0",
        padding: 36,
        transition: "background 0.5s, color 0.5s"
      }}
    >
      <div id="text" style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>
        <span style={{ fontSize: 40, color: theme.accent, verticalAlign: "middle" }}>“</span>
        {quote.text}
      </div>
      <div id="author" style={{ textAlign: "right", fontStyle: "italic", marginBottom: 24 }}>
        — {quote.author}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <a
          id="tweet-quote"
          href={tweetUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: theme.accent,
            color: theme.bg,
            borderRadius: 8,
            padding: "8px 16px",
            textDecoration: "none",
            fontWeight: 600,
            transition: "background 0.3s"
          }}
        >
          Tweet
        </a>
        <button
          id="new-quote"
          onClick={onNewQuote}
          style={{
            background: `linear-gradient(90deg, ${theme.accent}, ${theme.text})`,
            color: theme.card,
            border: "none",
            borderRadius: 8,
            padding: "8px 24px",
            fontWeight: 700,
            cursor: "pointer",
            transition: "background 0.3s"
          }}
        >
          New quote
        </button>
      </div>
    </div>
  );
} 