import Navbar from "@/components/comp/Navbar";
import { FollowingPointerDemo } from "@/components/tempcomp/NewCards";
import React from "react";

const Projects = () => {

  return (
    <div className="min-h-screen h-full pb-5">
      <Navbar />
      <div className="w-[83%] h-auto mx-auto flex flex-wrap gap-6 mt-10">
        <FollowingPointerDemo/>
      </div>
    </div>
  );
};

export default Projects;
