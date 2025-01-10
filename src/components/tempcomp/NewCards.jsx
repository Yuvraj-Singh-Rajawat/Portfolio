import { FaGithub } from "react-icons/fa";
import { FollowerPointerCard } from "../ui/following-pointer";
import { IoIosLink } from "react-icons/io";

export function FollowingPointerDemo() {
  const projects = [
    {
      title: "Aakar - Notion Clone",
      duration: "4 months",
      description:
        "A Notion clone designed for note-taking and knowledge management aimed at students, teachers, and professionals. Features rich editing and custom templates.",
      techStack: ["React", "Node.js", "MongoDB", "Express.js", "JWT", "Bcrypt"],
      image: "./temp_image.avif",
      github: "https://github.com/yourusername/aakar",
      demo_link: "https://aakar-app.com",
    },
    {
      title: "Perfume Selling Website",
      duration: "2 months",
      description:
        "A responsive and aesthetic website to sell perfumes, offering tailored fragrance recommendations based on user preferences, with separate admin and user interfaces.",
      techStack: ["React", "Tailwind CSS", "Node.js", "Express.js"],
      image: "./temp_image.avif",
      github: "https://github.com/yourusername/aakar",
      demo_link: "https://aakar-app.com",
    },
    {
      title: "React Portfolio Website",
      duration: "1 month",
      description:
        "A portfolio website built with React showcasing my projects, skills, and achievements. Features modern animations with GSAP and smooth navigation.",
      techStack: ["React", "GSAP", "React Router DOM"],
      image: "./temp_image.avif",
      github: "https://github.com/yourusername/aakar",
      demo_link: "https://aakar-app.com",
    },
    {
      title: "Buffalo Milk Business Website",
      duration: "2 months",
      description:
        "A business website to showcase and sell buffalo milk products, with e-commerce features and user-friendly navigation.",
      techStack: ["React", "Node.js", "MongoDB"],
      image: "./temp_image.avif",
      github: "https://github.com/yourusername/aakar",
      demo_link: "https://aakar-app.com",
    },
  ];

  return (
    <div
      className="w-full mx-auto grid grid-cols-3 gap-10 grid-rows-3 "
      style={{ fontFamily: "Ubuntu" }}
    >
      {projects.map((project, index) => (
        <FollowerPointerCard
          key={index}
          title={
            <div className="flex space-x-2 items-center">
              <img
                src={project.image}
                height="20"
                width="20"
                alt="thumbnail"
                className="rounded-full border-2 border-white"
              />
              <p>{project.title}</p>
            </div>
          }
        >
          <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group  hover:shadow-xl border border-zinc-600 bg-gray-800">
            <div className="w-full h-60 bg-gray-300 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative ">
              <img
                src={project.image}
                alt="thumbnail"
                className="group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 h-full w-full"
              />
            </div>
            <div className="px-4 mb-4">
              <div className="flex flex-wrap gap-2 mt-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs rounded-xl bg-[#000000] font-bold text-[#52e69c99] px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <h2 className="mt-4 text-neutral-300 text-2xl font-extrabold">
                {project.title}
              </h2>
              <div className="text-sm text-gray-500 mt-2">
                {project.duration}
              </div>

              <h2 className="font-normal my-4 text-sm text-zinc-400">
                {project.description}
              </h2>
              <div className="flex justify-between gap-4 mt-auto cursor-pointer">
                <div className="">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      <FaGithub className="text-gray-400 text-2xl hover:text-[#4CC8B2] duration-150 hover:scale-125" />
                    </a>
                  )}
                </div>
                <div>
                  {project.demo_link && (
                    <a
                      href={project.demo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoIosLink className="text-gray-400 text-2xl hover:text-[#4CC8B2] duration-150 hover:scale-125" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </FollowerPointerCard>
      ))}
    </div>
  );
}
