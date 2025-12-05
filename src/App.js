import { useState } from 'react';
import './App.css';
import myPhoto from './assets/me.jpg';
import Terminal from './terminal.jsx';

function App() {
  const [showSite, setShowSite] = useState(false);

  const handleRun = () => setShowSite(true);

  if (!showSite) {
    return <Terminal onRun={handleRun} />;
  }

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Main content */}
      <div
        style={{
          textAlign: 'center',
          paddingTop: '50px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <img
          src={myPhoto}
          alt="Me"
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid #00FF00',
          }}
        />
        <h1>Hi, I’m Nischal!</h1>
        <p>Welcome to personal website.</p>
        <p>
          Check out my projects on{' '}
          <a href="https://github.com/bhanni01" style={{ color: '#00FF00' }}>
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default App;
