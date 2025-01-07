import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import GradientFollowMouse from "./components/comp/GradientCircle";
import Navbar from "./components/comp/Navbar";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";

function App() {
  const [heightClass, setHeightClass] = useState("h-screen");

  useEffect(() => {
    const updateHeightClass = () => {
      // Check if content height is more than the viewport height
      if (document.documentElement.scrollHeight > window.innerHeight) {
        setHeightClass("h-full");
      } else {
        setHeightClass("h-screen");
      }
    };

    updateHeightClass(); // Initial check

    // Listen for window resize to adjust the height class dynamically
    window.addEventListener("resize", updateHeightClass);
    return () => {
      window.removeEventListener("resize", updateHeightClass);
    };
  }, []);

  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className={`px-20 font-bold text-white min-h-screen`}
      >
        {/* <GradientFollowMouse /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edu" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact_us" element={<Contact />} />
        </Routes>
      </motion.h1>
    </HeroHighlight>
  );
}

export default App;
