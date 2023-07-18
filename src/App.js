import { useState } from "react";
import "./index.css";

function App() {
  const [status, setStatus] = useState(true);

  let heading = {
    fontSize: status ? `300px` : `12px`,
    opacity: status ? 1 : 0,
  };

  let card = {
    transform: status ? `translateY(70vh)` : `translateY(30vh)`,
  };

  return (
    <div className="App" onClick={() => setStatus(!status)}>
      <h1 style={heading}>HELLO</h1>

      <div className="card" style={card}>
        <h2>welcome</h2>
      </div>
    </div>
  );
}

export default App;
