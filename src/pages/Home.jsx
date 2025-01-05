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
      <p className="w-full h-[1px] bg-[#8993b1]"></p>

      <div className="w-full h-full">
        <div className="fixed bottom-0 left-15 flex flex-col w-10 items-center justify-center gap-7">
          <div className="hover:text-[#4CC8B2] text-xl cursor-pointer">
            <FaGithub />
          </div>
          <div className="hover:text-[#4CC8B2] text-xl cursor-pointer">
            <FaLinkedinIn />
          </div>
          <div className="hover:text-[#4CC8B2] text-xl cursor-pointer">
            <SiLeetcode />
          </div>
          <div className="hover:text-[#4CC8B2] text-xl cursor-pointer">
            <FaTwitter />
          </div>
          <div className="hover:text-[#4CC8B2] text-xl cursor-pointer">
            <FaInstagram />
          </div>
          <p className="w-[2px] h-28 bg-[#8993b1]"></p>
        </div>
        <div></div>
        <div className="fixed bottom-0 right-10 flex flex-col w-10 items-center justify-center gap-7">
          <a style={{ fontFamily: "Fira Code, monospace" }} href="mailto:yuvraj.work99@gmail.com" className="hover:text-[#4CC8B2] transform rotate-90 mb-24 mr-2">
            yuvraj.work99@gmail.com
          </a>
          <p className="w-[2px] h-28 bg-[#8993b1]"></p>
        </div>
      </div>
    </div>
  );
};

export default Home;
