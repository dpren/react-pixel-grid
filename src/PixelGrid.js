import React, { useState, useEffect, useRef } from "react";
import pixelGrid from "pixel-grid";

export default ({ data = [], options = {}, ...props }) => {
  const [grid, setGrid] = useState();
  const container = useRef();

  useEffect(() => {
    const _grid = pixelGrid(data, {
      ...options,
      root: container.current,
    });

    setGrid(_grid);

    return () => {
      _grid.canvas && _grid.canvas.remove();
    };
  }, [...Object.values(options).flat(), data.length]);

  useEffect(() => {
    grid && grid.update(data);
  });

  return <div ref={container} {...props} />;
};
