import React from "react";
import globify from "../assets/portfolio/globify.png";
import college_marketplace from "../assets/portfolio/college_marketplace.png";
import traveler from "../assets/portfolio/traveler.png";
import { FaGithub } from "react-icons/fa";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: globify,
      title: "Globify",
      technologies: "React.js | Ruby on Rails | Bootstrap",
      frontendLink: "https://github.com/KotaUeshima/globify-frontend",
      backendLink: "https://github.com/KotaUeshima/globify-backend",
      demoLink: "https://stately-bombolone-0812fa.netlify.app/",
    },
    {
      id: 2,
      src: college_marketplace,
      title: "College Marketplace",
      technologies: "React.js | Ruby | MUI",
      frontendLink:
        "https://github.com/KotaUeshima/college_marketplace_frontend",
      backendLink: "https://github.com/KotaUeshima/college_marketplace_backend",
      demoLink: "https://clever-kulfi-41745d.netlify.app/",
    },
    {
      id: 3,
      src: traveler,
      title: "Traveler's Guide",
      technologies: "React.js | MUI",
      frontendLink: "https://github.com/KotaUeshima/traveler-guide",
      backendLink: "https://github.com/KotaUeshima/travelers-guide-backend",
      demoLink: "https://fluffy-vacherin-e1c347.netlify.app",
    },
  ];
  return (
    <div
      name="portfolio"
      className="py-20 bg-whitew-full min-h-screen text-black"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-extrabold tracking-widest inline border-b-4 border-pink-800">
            PORTFOLIO
          </p>
          <p className="py-6 text-gray-500">
            Check out some of my work right here!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(
            ({
              id,
              src,
              title,
              technologies,
              frontendLink,
              backendLink,
              demoLink,
            }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-600 rounded-md hover:scale-105 duration-200"
              >
                <img className="border-b-8 border-pink-800" src={src} alt="" />
                <p className="text-center pt-2 text-xl font-bold">{title}</p>
                <p className="text-center text-gray-500 text-sm">
                  {technologies}
                </p>
                <div className="flex items-center justify-center">
                  <a href={demoLink} target="_blank" rel="noreferrer">
                    <button className="px-6 pt-3 m-2 text-pink-800 duration-200 hover:scale-105">
                      Demo
                    </button>
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <a href={frontendLink} target="_blank" rel="noreferrer">
                    <button className="w-1/2 px-6 pb-3 m-4 duration-200 hover:scale-105">
                      Frontend <FaGithub />
                    </button>
                  </a>
                  <a href={backendLink} target="_blank" rel="noreferrer">
                    <button className="w-1/2 px-6 pb-3 m-4 duration-200 hover:scale-105">
                      Backend <FaGithub />
                    </button>
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
