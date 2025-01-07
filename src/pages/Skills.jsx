import { LampDemo } from "@/components/comp/LampDemo";
import Navbar from "@/components/comp/Navbar";
import React from "react";
import "../css/fonts.css";
import { OrbitingCirclesDemo } from "@/components/tempcomp/OrbitingCirclesDemo";

const Skills = () => {
  return (
    <div className="" style={{ fontFamily: "Fira Code, monospace" }}>
      <Navbar />
      <div className="mt-8">
        <h2 className="text-4xl text-gray-300 mb-5">
          Technologies I have learn't So far {"->"}{" "}
        </h2>
        <div className="flex items-center justify-end shadow-2xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-6 border-2 border-slate-700 rounded-lg">
            {[
              { name: "HTML", src: "/png/htmllogo.png" },
              { name: "CSS", src: "/png/csslogo.png" },
              { name: "JavaScript", src: "/png/jslogo.png" },
              { name: "Tailwind", src: "/png/tailwindlogo.png" },
              { name: "React", src: "/png/reactlogo.png" },
              { name: "Node.js", src: "/png/node.png" },
              { name: "MongoDB", src: "/png/mongodb.svg" },
              { name: "Git", src: "/png/gitlogo.png" },
              { name: "GitHub", src: "/png/githublogo.png" },
              { name: "Docker", src: "/png/docker-mark-blue.svg" },
              { name: "C", src: "/png/clogo.png" },
              { name: "C++", src: "/png/cpplogo.png" },
            ].map(({ name, src }, index) => (
              <div
                key={index}
                className="p-4 bg-slate-900 rounded-md flex justify-center items-center shadow-md bg-gradient-to-br from-slate-800 w-36 to-slate-900 group relative"
              >
                <img src={src} className="w-24" alt={`${name} Logo`} />
                <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 bg-slate-900 text-white rounded-md top-[-20%] left-1/2 transform -translate-x-1/2">
                  {name}
                </div>
              </div>
            ))}
          </div>
          <OrbitingCirclesDemo />
        </div>
      </div>
    </div>
  );
};

export default Skills;
