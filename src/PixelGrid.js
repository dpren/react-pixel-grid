import React, { useEffect, useRef } from "react";
import pixelGrid from "pixel-grid";

export default ({ data = [], options = {}, ...props }) => {
  const grid = useRef({});
  const container = useRef();
  const queue = useRef([]);

  useEffect(() => {
    grid.current = pixelGrid(data, {
      ...options,
      root: container.current,
    });

    return () => {
      queue.current = [];
      grid.current.canvas && grid.current.canvas.remove();
    };
  }, [...Object.values(options).flat(), data.length]);

  useEffect(() => {
    setTimeout(() => {
      grid.current.frame && grid.current.frame(() => {
        const shifted = queue.current.shift();
        shifted && grid.current.update(shifted);
      });
    }, 0);
  }, []);

  useEffect(() => {
    if (queue.current.length > 30) {
      console.warn("PixelGrid update queue > 30; flushing");
      queue.current = [];
    }
    queue.current.push(data);
  });

  return <div ref={container} {...props} />;
};