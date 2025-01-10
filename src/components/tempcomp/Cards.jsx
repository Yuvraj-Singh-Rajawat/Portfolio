import React from "react";
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";



const Card = ({
  title,
  duration,
  description,
  techStack,
  image,
  github,
  demo_link,
}) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl w-full max-w-[22rem] shadow-lg transform transition duration-200 hover:scale-105 flex flex-col">
      <div className="relative w-full h-40 rounded-xl overflow-hidden">
        <img
          src={image}
          alt={`${title} project`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="text-xs rounded-xl bg-[#1d2813] font-medium text-[#4cCC8B99] px-3 py-1"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="font-bold text-gray-200 text-lg mt-4">{title}</div>
      <div className="text-gray-400 font-medium text-sm mt-1">{duration}</div>
      <div className="text-gray-400 mt-2 font-light leading-relaxed mb-5">
        {description}
      </div>
      {/* Flex container for buttons */}
      <div className="flex justify-between gap-4 mt-auto">
        <div>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <FaGithub className="text-gray-400 text-2xl hover:text-[#4CC8B2] duration-150 hover:scale-125" />
            </a>
          )}
        </div>
        <div>
          {demo_link && (
            <a href={demo_link} target="_blank" rel="noopener noreferrer">
              <IoIosLink className="text-gray-400 text-2xl hover:text-[#4CC8B2] duration-150 hover:scale-125" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
