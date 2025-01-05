import { CommonContext } from "@/Context/Common";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import InteractiveHoverButton from "../ui/interactive-hover-button";
import { HeroHighlight } from "../ui/hero-highlight";

const Navbar = () => {

  return (
    <div
      className="w-full h-20 py-4 flex items-center gap-[40%]"
      style={{ fontFamily: "Fira Code, monospace" }}
    >
      <Link to="/" className="w-20">
        <img src="/logo.svg" className="h-12" alt="" />
      </Link>
      <div className="flex items-center justify-center gap-12 w-[70%]">
        <Link to="/" className="hover:text-[#4CC8B2] cursor-pointer py-2">
          <span className="text-[#4CC8B2] ">01.</span> About
        </Link>
        <Link to="/skills" className="hover:text-[#4CC8B2] cursor-pointer py-2">
          <span className="text-[#4CC8B2]">02.</span> Skills
        </Link>
        <Link to="/projects" className="hover:text-[#4CC8B2] cursor-pointer py-2">
          <span className="text-[#4CC8B2]">03.</span> Projects
        </Link>
        <Link to="/edu" className="hover:text-[#4CC8B2] cursor-pointer py-2">
          <span className="text-[#4CC8B2]">04.</span> Education
        </Link>
        <InteractiveHoverButton text="Resume" />
        {/* <button
          className={`border px-4 py-2 rounded text-[#4CC8B2] border-[3px] border-[#4CC8B2] hover:bg-[#4CC8B2] hover:text-[#03122b] transition-all duration-300 ease-in-out font-bold`}
        >
          Resume
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
