import React, { useState, useEffect } from "react";

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen width to determine if it's a mobile device
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint if needed
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Don't track cursor on mobile

    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, [isMobile]);

  if (isMobile) return null; // Completely disable cursor effect on mobile

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
