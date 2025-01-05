import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const GradientFollowMouse = ({ baseColor = "#1e293b" }) => {
  const circleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPercent = (clientX / window.innerWidth) * 100;
      const yPercent = (clientY / window.innerHeight) * 100;

      // Animate the circle without changing the full background
      gsap.to(circleRef.current, {
        x: clientX - 100, // Center the gradient around the mouse
        y: clientY - 100,
        background: `radial-gradient(circle, #475569 0%, #1e293b 60%)`, // Smooth gradient
        width: 200,
        height: 200,
        opacity: 1,
        duration: 0.3
      });
      
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [baseColor]);

  return (
    <>
      <div
        ref={circleRef}
        style={{
          position: "absolute",
          pointerEvents: "none",
          borderRadius: "50%",
          zIndex: 9999,
          width: 0,
          height: 0,
          opacity: 0,
          transition: "width 0.3s, height 0.3s, opacity 0.3s",
        }}
      />
    </>
  );
};

export default GradientFollowMouse;
