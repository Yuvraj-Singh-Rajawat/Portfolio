import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import GradientFollowMouse from "./components/comp/GradientCircle";
import Navbar from "./components/comp/Navbar";
import { HeroHighlight } from "./components/ui/hero-highlight";

function App() {
  return (
    <div className="px-16 w-full h-full">
      <Navbar/>
      {/* <GradientFollowMouse /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edu" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact_us" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
