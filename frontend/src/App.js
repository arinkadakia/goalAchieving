import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) {
      setOutput("Please type something.");
      return;
    }

    setOutput(`You entered: ${input}`);
  };

  return (
    <div className="App">
      <header className="App-header" style={{ padding: "40px" }}>
        <h1>Career Growth AI</h1>
        <p>Enter a prompt below:</p>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
          className="input-box"
          style={{
            width: "300px",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />

        <button
          onClick={handleSubmit}
          className="submit-button"
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            background: "#4a6cf7",
            color: "white",
            cursor: "pointer"
          }}
        >
          Submit
        </button>

        <div
          className="output-box"
          style={{
            marginTop: "20px",
            background: "#eef1ff",
            padding: "15px",
            width: "300px",
            borderRadius: "5px",
            minHeight: "40px",
            color: "#333"
          }}
        >
          {output}
        </div>
      </header>
    </div>
  );
}

export default App;