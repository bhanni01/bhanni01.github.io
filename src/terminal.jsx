// src/Terminal.jsx
import { useState } from 'react';

export default function Terminal({ onRun }) {
  const [lines, setLines] = useState([
    "Welcome to my terminal site! Type commands below."
  ]);
  const [input, setInput] = useState('');

  const handleCommand = (e) => {
    e.preventDefault();
    const command = input.trim();
    if (!command) return;

    if (command === 'clear') {
      setLines([]);
    } else if (command === 'npm start') {
      onRun(); // callback to show main page
    } else {
      setLines([...lines, `> ${command}`, `Hint: type 'npm start' to enter the site`]);
    }
    setInput('');
  };

  return (
    <div style={{
      backgroundColor: 'black',
      color: '#00FF00', 
      fontFamily: 'monospace',
      padding: '20px',
      height: '100vh',
      overflowY: 'auto'
    }}>
      {lines.map((line, index) => <div key={index}>{line}</div>)}
      <form onSubmit={handleCommand}>
        <span>&gt; </span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          style={{
            backgroundColor: 'black',
            color: '#00FF00',      // make input text green
            border: 'none',
            outline: 'none',
            fontFamily: 'monospace',
          }}
        />
      </form>
    </div>
  );
}
