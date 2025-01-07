import Navbar from "@/components/comp/Navbar";
import { Button } from "@/components/ui/button";
import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <div className={``}>
      <Navbar />
      <div className="w-full h-full">
        <div className="fixed bottom-0 left-16 flex flex-col w-10 items-center justify-center gap-7">
          <div className="hover:text-[#4CC8B2] text-xl cursor-pointer hover:scale-150 duration-200">
            <FaGithub />
          </div>
          <div className="hover:text-[#4CC8B2] text-xl cursor-pointer hover:scale-150 duration-200">
            <FaLinkedinIn />
          </div>
          <div className="hover:text-[#4CC8B2] text-xl cursor-pointer hover:scale-150 duration-200">
            <SiLeetcode />
          </div>
          <div className="hover:text-[#4CC8B2] text-xl cursor-pointer hover:scale-150 duration-200">
            <FaTwitter />
          </div>
          <div className="hover:text-[#4CC8B2] text-xl cursor-pointer hover:scale-150 duration-200">
            <FaInstagram />
          </div>
          <p className="w-[2px] h-28 bg-[#8993b1]"></p>
        </div>
        <div className="fixed bottom-0 right-16 flex flex-col w-10 items-center justify-center gap-7  ">
          <a
            style={{ fontFamily: "Fira Code, monospace" }}
            href="mailto:yuvraj.work99@gmail.com"
            className="hover:text-[#4CC8B2] transform rotate-90 mb-24 hover:scale-110 duration-200"
          >
            yuvraj.work99@gmail.com
          </a>
          <p className="w-[2px] h-28 bg-[#8993b1]"></p>
        </div>
      </div>
    </div>
  );
};

export default Home;
