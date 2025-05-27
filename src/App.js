import React, { useState } from "react";
import { quotes } from "./quotes";
import QuoteBox from "./QuoteBox";
import "./styles.css";

const themes = [
  { bg: "#232946", card: "#fffffe", accent: "#eebbc3", text: "#232946" },
  { bg: "#22223b", card: "#f2e9e4", accent: "#c9ada7", text: "#22223b" },
  { bg: "#0f4c5c", card: "#fff", accent: "#ffb400", text: "#0f4c5c" },
  { bg: "#222831", card: "#ececec", accent: "#00adb5", text: "#222831" },
  { bg: "#2d3142", card: "#ffffff", accent: "#ef8354", text: "#2d3142" }
];

function getRandomIndex(arr, exclude) {
  let idx;
  do {
    idx = Math.floor(Math.random() * arr.length);
  } while (idx === exclude);
  return idx;
}

export default function App() {
  const [quoteIdx, setQuoteIdx] = useState(getRandomIndex(quotes));
  const [themeIdx, setThemeIdx] = useState(getRandomIndex(themes));

  const handleNewQuote = () => {
    setQuoteIdx(getRandomIndex(quotes, quoteIdx));
    setThemeIdx(getRandomIndex(themes, themeIdx));
  };

  const theme = themes[themeIdx];

  return (
    <div
      className="app-bg"
      style={{ background: theme.bg, minHeight: "100vh", transition: "background 0.5s" }}
    >
      <QuoteBox
        quote={quotes[quoteIdx]}
        theme={theme}
        onNewQuote={handleNewQuote}
      />
      <footer style={{ color: theme.card, textAlign: "center", marginTop: 20 }}>
        by Xuebawugui
      </footer>
    </div>
  );
} 