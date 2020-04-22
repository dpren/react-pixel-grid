import React, { useState, useEffect } from "react";
import PixelGrid from "./dist/PixelGrid";


const matrix = base => Array(Math.pow(base, 2)).fill(0);
const defRes = 150;
const matrix100 = matrix(defRes)

function App() {
  const [data, setData] = useState(matrix100);
  const [size, setSize] = useState(4);
  const [padding, setPadding] = useState(1);
  const [resolution, setResolution] = useState(defRes);
  const [fps, setFps] = useState(60);

  useEffect(() => {
    let id =
      setInterval(
        () => setData(matrix(resolution || 0).fill(0).map(Math.random)),
        1000 / (fps || 0.00001)
      );
    return () => clearInterval(id);
  }, [resolution, fps]);

  return (
    <>
      px size: <input type="number" value={size} min={0} max={20} onChange={ev => setSize(Math.min(20, Number(ev.currentTarget.value)))} />
      padding: <input type="number" value={padding} min={0} max={20} onChange={ev => setPadding(Math.min(20, Number(ev.currentTarget.value)))} />
      resolution: <input type="number" value={resolution} min={1} max={600} onChange={ev => setResolution(Math.min(600, Number(ev.currentTarget.value)))} />
      fps: <input type="number" value={fps} min={1} max={100} onChange={ev => setFps(Math.min(80, Number(ev.currentTarget.value)))} />
      
      <PixelGrid
        data={data}
        options={{
          size,
          padding,
          background: [1, 1, 1],
        }}
      />


      {/* prettier-ignore */}
      <PixelGrid
        data={[
          x, r, x, g, x, b, 
          r, x, g, x, b, x, 
          x, r, x, g, x, b, 
          r, x, g, x, b, x, 
          x, r, x, g, x, b, 
          r, x, g, x, b, x,
        ]}
        options={{ padding: 0 }}
      />
    </>
  );
}

const r = "#f00";
const g = "#0f0";
const b = "#00f";
const x = "#000";

export default App;
