import React, { useState, useEffect } from "react";

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full">
      {/* Outer Circle (Light Red) */}
      <div
        className="w-8 h-8 bg-red-200 opacity-50 rounded-full absolute transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        }}
      ></div>

      {/* Inner Red Dot (Darker Red) */}
      <div
        className="w-2.5 h-2.5 bg-red-500 rounded-full absolute"
        style={{
          transform: `translate(${position.x - 5}px, ${position.y - 5}px)`,
        }}
      ></div>
    </div>
  );
};

export default CursorEffect;
