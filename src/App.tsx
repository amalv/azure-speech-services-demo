import "./App.css";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Azure Speech Services Demo</h1>
        <p>
          This project is a demo repository showcasing the implementation of
          Text-to-Speech (TTS) and Automatic Speech Recognition (ASR) using
          Microsoft Azure Speech Services.
        </p>
      </header>
      <main className="app-main">
        <h2>Technologies Used:</h2>
        <ul>
          <li>🔊 Microsoft Azure Speech Services</li>
          <li>⚡ Vite</li>
          <li>⚛️ React</li>
          <li>📜 TypeScript</li>
          <li>🧪 Vitest</li>
          <li>🍞 Bun</li>
        </ul>
      </main>
      <footer className="app-footer">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR.
        </p>
      </footer>
    </div>
  );
};

export default App;
