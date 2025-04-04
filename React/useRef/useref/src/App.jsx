import { useState, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  // const [renderCount, setRenderCount] = useState(0);,
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
  return (
    <>
      <div className="app">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>Benim adim {name}</div>
        <div>{renderCount.current} defa render oldu</div>
      </div>
    </>
  );
}

export default App;
