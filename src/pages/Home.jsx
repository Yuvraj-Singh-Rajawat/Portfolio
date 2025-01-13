import Navbar from "@/components/comp/Navbar";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { AnimatedModalContact } from "@/components/tempcomp/AnimatedModelContact";
import { AnimatedModalResume } from "@/components/tempcomp/AnimatedModelResume";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-full min-h-screen">
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
        <div className="mt-32">
          <div className=" flex flex-col items-center justify-center gap-4 text-gray-300 w-[75%] mx-auto">
            <h3 className="text-2xl">Hi, my name is </h3>
            <h1 className="text-5xl font-bold text-[#4CC8B2]">
              Yuvraj Singh Rajawat
            </h1>
            <div className="flex gap-2 text-3xl mt-3">
              <h3 className="">I am a </h3>
              {/* previous text color text-[#4dbed2e2] */}
              <span className="text-[#FFC9A9] text-4xl">
                <Typewriter
                  options={{ loop: true }}
                  className=""
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Full Stack Developer")
                      .pauseFor(250)
                      .deleteAll()
                      .typeString("UI/UX Designer")
                      .pauseFor(250)
                      .deleteAll()
                      .typeString("Tech Enthusiast")
                      .pauseFor(250)
                      .deleteAll()
                      .start();
                  }}
                />
              </span>
            </div>
            <p className="w-[75%] mt-5 text-gray-400 text-center">
              I am a versatile web developer and freelancer dedicated to
              creating dynamic online experiences. Bringing a blend of
              creativity and technical prowess to every project, I specialize in
              crafting unique and user-friendly solutions. Let's collaborate to
              elevate your digital presence.
            </p>

            <div className="flex gap-20 mt-5">
              <a href={'https://drive.google.com/file/d/1z5xcuzD_cCf72nsB-pa_yl81t-UDB4uW/view?usp=drive_link'} target="_blank">
                <AnimatedModalResume text={"Resume"} icon={"📜"} />
              </a>
              <button>
                <AnimatedModalContact text={"Contact"} icon={"🙋🏻‍♂️"} />
              </button>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 right-16 flex flex-col w-10 items-center justify-center gap-7">
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
