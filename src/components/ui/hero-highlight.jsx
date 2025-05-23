"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React, { useState } from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName
}) => {
  const [isHovered, setIsHovered] = useState(false);
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn("relative h-full bg-slate-900 justify-center w-full", containerClassName)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-dot-thick-neutral-800 pointer-events-none" />
      <motion.div
        className={cn(
          "pointer-events-none bg-dot-thick-indigo-500 absolute inset-0 transition duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({ children, className }) => {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 100%" }}
      animate={{ backgroundSize: "100% 100%" }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        "relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500",
        className
      )}
    >
      {children}
    </motion.span>
  );
};
