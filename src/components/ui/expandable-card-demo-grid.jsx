
import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

const projectImages = [
  "https://picsum.photos/id/1025/400/200",
  "https://picsum.photos/id/1074/400/200",
  "https://picsum.photos/id/1024/400/200",
  "https://picsum.photos/id/1076/400/200",
];

const techIcons = {
  React: "bg-blue-500",
  "TailwindCSS": "bg-sky-500",
  "Node.js": "bg-green-500",
  HTML: "bg-orange-500",
  GSAP: "bg-lime-500",
  "Framer Motion": "bg-pink-500",
  "Express.js": "bg-yellow-500",
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-600",
  NextJS: "bg-gray-800",
  Python: "bg-yellow-300",
  Django: "bg-green-700",
  Firebase: "bg-orange-600",
  MongoDB: "bg-green-600",
  PostgreSQL: "bg-blue-700",
  // Add more technologies and their corresponding colors here
};

const getIconColor = (tech) => {
  return techIcons[tech] || "bg-gray-400"; // Default color if not found
};

export default function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActive(null);
      }
    };

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="max-w-6xl mx-auto p-4 bg-transparent">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            layout
            onClick={() => setActive(project)}
            className={`p-4 bg-slate-800 rounded-lg shadow-lg cursor-pointer hover:bg-slate-700 transition-all duration-300 ${
              active === project ? "z-10" : ""
            }`}
          >
            <img
              src={projectImages[index % projectImages.length]}
              alt={project.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <motion.h3
              layoutId={`title-${project.title}`}
              className="text-lg font-bold text-white mt-2"
            >
              {project.title}
            </motion.h3>
            <motion.p
              layoutId={`description-${project.title}`}
              className="text-gray-200 mt-2 line-clamp-2"
            >
              {project.description}
            </motion.p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1 text-sm ${getIconColor(
                    tech
                  )} text-white rounded-full`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </ul>

      <AnimatePresence>
        {active && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-transparent z-10"
            onClick={() => setActive(null)}
          />
        )}
        {active && (
          <motion.div
            key="expanded-card"
            layoutId={`card-${active.title}`}
            ref={ref}
            className="fixed inset-0 m-auto max-w-lg bg-slate-800 p-6 rounded-lg shadow-lg z-20 overflow-y-auto" // Added overflow for long content
            style={{ maxHeight: "90vh" }} // Prevent card from overflowing viewport
          >
            <motion.h3
              layoutId={`title-${active.title}`}
              className="text-xl font-bold text-white"
            >
              {active.title}
            </motion.h3>
            <motion.p
              layoutId={`description-${active.title}`}
              className="text-gray-200 mt-4"
            >
              {active.description}
            </motion.p>
            <div className="mt-4">
              <h4 className="text-white font-semibold mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {active.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 text-sm ${getIconColor(tech)} text-white rounded-full`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <a
                href={active.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-200 rounded-full text-black hover:bg-gray-300"
              >
                GitHub
              </a>
              {active.website && (
                <a
                  href={active.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 ${getIconColor(active.techStack[0])} text-white rounded-full hover:${getIconColor(active.techStack[0])}`}
                >
                  Website
                </a>
              )}
            </div>
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const projects = [
  {
    title: "Notion Clone (Aakar)",
    description: "A note-taking app designed for students and teachers.",
    techStack: ["React", "TailwindCSS", "Node.js"],
    image: "https://via.placeholder.com/400x200?text=Aakar",
    github: "https://github.com/yourusername/aakar",
    website: "https://aakar-app.com",
  },
  {
    title: "Perfume Website",
    description: "An e-commerce platform for selling perfumes.",
    techStack: ["React", "HTML", "TailwindCSS"],
    image: "https://via.placeholder.com/400x200?text=Perfume+Website",
    github: "https://github.com/yourusername/perfume-website",
    website: "https://perfume-shop.com",
  },
  {
    title: "React Portfolio",
    description: "A personal portfolio with animations using GSAP.",
    techStack: ["React", "GSAP", "Framer Motion"],
    image: "https://via.placeholder.com/400x200?text=React+Portfolio",
    github: "https://github.com/yourusername/react-portfolio",
    website: "https://yourportfolio.com",
  },
  {
    title: "Buffalo Milk Business Website",
    description: "A website for managing and promoting buffalo milk sales.",
    techStack: ["React", "Node.js", "Express.js"],
    image: "https://via.placeholder.com/400x200?text=Buffalo+Milk+Website",
    github: "https://github.com/yourusername/buffalo-milk-website",
  },
];