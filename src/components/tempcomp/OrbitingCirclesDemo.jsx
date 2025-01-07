import { OrbitingCircles } from "@/components/ui/orbiting-circles";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-[50%] flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b bg-clip-text text-center text-5xl font-semibold leading-none text-transparent from-white to-black">
        Technologies
      </span>

      <OrbitingCircles iconSize={20} speed={2} radius={160}>
        <Icons.react />
        <Icons.nodejs />
        <Icons.docker />
        <Icons.expressjs />
        <Icons.figma />
      </OrbitingCircles>
      <OrbitingCircles iconSize={20} radius={110} reverse speed={2}>
        <Icons.github />
        <Icons.git />
        <Icons.c />
        <Icons.cpp />
      </OrbitingCircles>
      <OrbitingCircles iconSize={20} radius={60} speed={2}>
        <Icons.html />
        <Icons.css />
        <Icons.js />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  html: () => (
    <i
      className="devicon-html5-plain text-orange-500"
      style={{ fontSize: "2rem" }}
    />
  ),
  css: () => (
    <i
      className="devicon-css3-plain text-blue-500"
      style={{ fontSize: "2rem" }}
    />
  ),
  js: () => (
    <i
      className="devicon-javascript-plain text-yellow-500 rounded-sm"
      style={{ fontSize: "2rem" }}
    />
  ),
  react: () => (
    <i
      className="devicon-react-original text-blue-400"
      style={{ fontSize: "2rem" }}
    />
  ),
  nodejs: () => (
    <i
      className="devicon-nodejs-plain text-green-500"
      style={{ fontSize: "2rem" }}
    />
  ),
  expressjs: () => (
    <i
      className="devicon-express-original text-gray-500"
      style={{ fontSize: "2rem" }}
    />
  ),
  github: () => (
    <i
      className="devicon-github-original text-black"
      style={{ fontSize: "2rem" }}
    />
  ),
  git: () => (
    <i
      className="devicon-git-plain text-red-500"
      style={{ fontSize: "2rem" }}
    />
  ),
  c: () => (
    <i className="devicon-c-plain text-blue-500" style={{ fontSize: "2rem" }} />
  ),
  cpp: () => (
    <i
      className="devicon-cplusplus-plain text-blue-700"
      style={{ fontSize: "2rem" }}
    />
  ),
  figma: () => (
    <i
      className="devicon-figma-plain text-purple-500"
      style={{ fontSize: "2rem" }}
    />
  ),
  docker: () => (
    <i
      className="devicon-docker-plain text-blue-400"
      style={{ fontSize: "2rem" }}
    />
  ),
};
