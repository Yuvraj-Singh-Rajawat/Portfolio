import { CommonContext } from "@/Context/Common";
import { useLocation } from "react-router-dom";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import InteractiveHoverButton from "../ui/interactive-hover-button";
import { HeroHighlight } from "../ui/hero-highlight";

const Navbar = () => {
  const location = useLocation();
  const { path } = useContext(CommonContext);

  return (
    <div>
      <div
        className="w-full h-20 py-4 flex items-center gap-[40%]"
        style={{ fontFamily: "Fira Code, monospace" }}
      >
        <Link to="/" className="w-20 hover:scale-125 duration-150">
          <img src="/logo.svg" className="h-12" alt="" />
        </Link>
        <div className="flex items-center justify-center gap-12 w-[70%]">
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? "text-[#4CC8B2]"
                : "hover:text-[#4CC8B2] duration-150"
            }
          >
            <span className="text-[#4CC8B2]">01.</span> About
          </Link>
          <Link
            to="/skills"
            className={
              location.pathname === "/skills"
                ? "text-[#4CC8B2]"
                : "hover:text-[#4CC8B2] duration-150"
            }
          >
            <span className="text-[#4CC8B2]">02.</span> Skills
          </Link>
          <Link
            to="/projects"
            className={
              location.pathname === "/projects"
                ? "text-[#4CC8B2]"
                : "hover:text-[#4CC8B2] duration-150"
            }
          >
            <span className="text-[#4CC8B2]">03.</span> Projects
          </Link>
          <Link
            to="/edu"
            className={
              location.pathname === "/edu"
                ? "text-[#4CC8B2]"
                : "hover:text-[#4CC8B2] duration-150"
            }
          >
            <span className="text-[#4CC8B2]">04.</span> Education
          </Link>
          <Link
            to=import.meta.env.RESUME_LINK
            target="_blank"
          >
            <InteractiveHoverButton text="Resume" />
          </Link>
        </div>
      </div>
      <p className="w-full h-[1px] bg-[#8993b1]"></p>
    </div>
  );
};

export default Navbar;
