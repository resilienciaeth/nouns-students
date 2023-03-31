import React, { useEffect, useState } from "react";

const CustomCursor = ({ cursorImage, containerRef }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const showCursor = () => {
      setVisible(true);
    };

    const hideCursor = () => {
      setVisible(false);
    };

    containerRef.current.addEventListener("mousemove", updatePosition);
    containerRef.current.addEventListener("mouseenter", showCursor);
    containerRef.current.addEventListener("mouseleave", hideCursor);

    return () => {
      containerRef.current.removeEventListener("mousemove", updatePosition);
      containerRef.current.removeEventListener("mouseenter", showCursor);
      containerRef.current.removeEventListener("mouseleave", hideCursor);
    };
  }, [containerRef]);

  const cursorStyle = {
    position: "fixed",
    top: position.y + "px",
    left: position.x + "px",
    zIndex: 9999,
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    width: "64px",
    height: "64px",
    backgroundImage: `url(${cursorImage})`,
    backgroundSize: "cover",
    display: visible ? "block" : "none",
  };

  return <div style={cursorStyle}></div>;
};

export default CustomCursor;
