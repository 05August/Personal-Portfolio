import ButtonLink from "@/components/ButtonLink";
import Layout from "../components/Layout";
import Image from "next/image";

const Home = () => {
  const recentProjects = [
    {
      id: 1,
      title: "Project 1",
      imageSrc: "/images/project1.jpg",
      imageAlt: "Project 1",
      tags: ["React", "Next.js"],
      timestamp: "2023-01-01",
      description: "Description for Project 1",
      slug: "project-1",
    },
  ];
  return (
    <Layout>
      <div
        className="flex p-4 mb-4 text-sm text-blue-800 border border-terminal-green rounded-lg bg-gray-900"
        role="alert"
      >
        <svg
          aria-hidden="true"
          className="flex-shrink-0 inline w-5 h-5 mr-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Info</span>
        <div>
          Welcome to my portfolio! Thanks for stopping by.
          <span className="text-terminal-green font-semibold" rel="noopener">
            {" "}
            Just another ChatGPT user.
          </span>
        </div>
      </div>
      <div className="flex md:flex-row gap-16 items-center flex-col justify-center mt-0 md:mt-6">
        <div className="flex-[3] flex flex-col">
          <h1 className="typewrite text-5xl font-bold text-terminal-green md:inline-flex hidden w-fit">
            Augustt.
          </h1>
          <p className="mt-2 text-center md:text-left">
            Tech enthusiast and web design hobbyist.
          </p>
          {/* <ButtonLink
            label="View CV"
            link="/Elliott Chong CV.pdf"
            className="font-bold mt-4 self-center md:self-start"
          /> */}
        </div>
        <div className="flex-[2]">
          <Image
            src="/images/hero.jpg"
            alt="hero"
            className="hero-img"
            width={768}
            height={1024}
          />
        </div>
      </div>
      <div className="mt-8 text-2xl font-bold text-white flex gap-2 items-center justify-between">
        <span>
          Recent
          <span className="text-terminal-green">Projects</span>
        </span>
        <div className="text-sm">
          <a href="/projects">View all Projects →</a>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {recentProjects.map((project) => (
          <div
            key={project.id}
            className="flex rounded-md md:items-center border-2 border-terminal-green/50 p-4 flex-col gap-8 md:flex-row items-center hover:-translate-y-1 transition-all"
          >
            <div className="flex-[3]">
              <Image
                alt={project.imageAlt}
                src={project.imageSrc}
                width={770}
                height={380}
                className="object-contain rounded-md w-full p-2 shadow-xl"
              />
            </div>
            <div className="flex flex-col flex-[5] justify-center md:items-start items-center gap-x-8">
              <div className="flex gap-2 md:flex-row flex-col items-center flex-wrap">
                <h2 className="text-xl font-semibold text-center">
                  {project.title}
                </h2>
                <div className="flex gap-2 flex-wrap justify-center">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md px-2 py-1 text-xs font-semibold border border-terminal-green items-center flex justify-center shadow-lg whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-3 md:mt-2 inline-flex">
                {new Date(project.timestamp).toDateString()}
              </p>
              <p className="text-gray-200 mt-4">
                {project.description}
                <a
                  className="text-terminal-green underline underline-offset-2"
                  href={`/projects/${project.slug}`}
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
