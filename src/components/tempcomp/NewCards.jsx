import { FaGithub } from "react-icons/fa";
import { FollowerPointerCard } from "../ui/following-pointer";
import { IoIosLink } from "react-icons/io";

export function FollowingPointerDemo() {
  const projects = [
    {
      title: "Food Delivery App",
      duration: "3 months",
      description:
        "A comprehensive food delivery application with user-friendly interfaces and real-time tracking. Features include restaurant listings, menu browsing, order placement, live order tracking, and secure payment options.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB"],
      image: "./project_images/food_del.png",
      github: "https://github.com/Yuvraj-Singh-Rajawat/Food-Delivery-App",
      demo_link: "https://food-on-finger.onrender.com/",
    },
    {
      title: "E-commerce App",
      duration: "4 months",
      description:
        "An e-commerce platform with a wide range of features including product listings, cart, and payment integration. Additional features include user authentication, order history, product reviews, and a recommendation system.",
      techStack: ["React", "Redux", "Node.js", "Express.js", "MongoDB"],
      image: "./project_images/ecommerce.png",
      github: "https://github.com/Yuvraj-Singh-Rajawat/Ecommerce-app",
      demo_link: "https://ecommerce-app-k361.onrender.com",
    },
    {
      title: "AI Trip Planner",
      duration: "2 months",
      description:
        "An AI-powered trip planner that helps users plan their trips efficiently with personalized recommendations. Features include itinerary creation, budget management, and integration with travel APIs for real-time information.",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "Firebase",
        "Chatgpt API",
        "Google Places API",
      ],
      image: "./project_images/ai-trip.png",
      github: "https://github.com/Yuvraj-Singh-Rajawat/AI-Trip-Planner",
    },
    {
      title: "Portfolio Website",
      duration: "1 month",
      description:
        "A personal portfolio website showcasing my projects, skills, and achievements. Features include a blog section, contact form, and smooth animations for an enhanced user experience.",
      techStack: ["React", "Tailwind CSS", "Framer Motion"],
      image: "./project_images/portfolio.png",
      github: "https://github.com/Yuvraj-Singh-Rajawat/Portfolio",
      demo_link: "https://yuvraj-portfolio001.vercel.app",
    },
    {
      title: "Chess Project",
      duration: "2 months",
      description:
        "A chess game application with multiplayer support and AI opponent. Features include different difficulty levels, game history, and a user-friendly interface for an engaging experience.",
      techStack: ["EJS", "Web Sockets", "Express.js", "Node.js"],
      image: "./project_images/chess.png",
      github: "https://github.com/Yuvraj-Singh-Rajawat/Chess-Project",
    },
    {
      title: "Myntra Frontend Clone",
      duration: "3 months",
      description:
        "A frontend clone of the Myntra website with a focus on UI/UX design and responsiveness. Features include product listings, filters, and a seamless user experience similar to the original website.",
      techStack: ["React", "Tailwind CSS"],
      image: "./project_images/myntra-clone.png",
      github: "https://github.com/Yuvraj-Singh-Rajawat/Myntra-Front-End-Clone",
    },
  ];

  return (
    <div
      className="w-full mx-auto grid grid-cols-3 gap-10"
      style={{ fontFamily: "Ubuntu" }}
    >
      {projects.map((project, index) => (
        <FollowerPointerCard
          key={index}
          title={
            <div className="flex space-x-2 items-center group">
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
          <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group hover:shadow-xl border border-zinc-600 bg-gray-800">
            <div className="w-full h-60 bg-gray-300 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative ">
              <img
                src={project.image}
                alt="thumbnail"
                className="group-hover:scale-90 group-hover:rounded-2xl transform object-cover transition duration-200 h-full w-full"
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
