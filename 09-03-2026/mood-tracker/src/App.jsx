import React, { useState } from "react";
import "./App.css";

function App() {
  const [mood, setMood] = useState("");

  const moods = [
    { emoji: "😊", text: "Happy", color: "#d4edda" },
    { emoji: "😐", text: "Neutral", color: "#fff3cd" },
    { emoji: "😢", text: "Sad", color: "#f8d7da" },
    { emoji: "😡", text: "Angry", color: "#f5c6cb" }
  ];

  return (
    <div className="container" style={{ backgroundColor: mood.color }}>
      <h1>Mood Tracker</h1>

      <div className="buttons">
        {moods.map((m, index) => (
          <button key={index} onClick={() => setMood(m)}>
            {m.emoji}
          </button>
        ))}
      </div>

      {mood && (
        <div className="result">
          <h2>You are feeling {mood.text} {mood.emoji}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
