import React from "react";
import globify from "../assets/portfolio/globify.png";
import college_marketplace from "../assets/portfolio/college_marketplace.png";
import traveler from "../assets/portfolio/traveler.png";
import droneco from "../assets/portfolio/droneco.png";
import vapo from "../assets/portfolio/vapo.png";

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
      disabled: false,
      demoButtonColor: "text-pink-800",
    },
    {
      id: 2,
      src: droneco,
      title: "DroneCo",
      technologies: "React.js | Next.js | Tailwind",
      frontendLink: "https://github.com/KotaUeshima/DroneCo",
      backendLink: "https://github.com/KotaUeshima/DroneCo",
      demoLink: "https://drone-co.vercel.app/",
      disabled: false,
    },
    {
      id: 3,
      src: vapo,
      title: "Vapo",
      technologies: "React.js | Tailwind | Python | Flask",
      frontendLink: "https://github.com/KotaUeshima/vapo",
      backendLink: "https://github.com/KotaUeshima/vapo",
      demoLink: "",
      disabled: true,
    },
    {
      id: 3,
      src: college_marketplace,
      title: "College Marketplace",
      technologies: "React.js | Ruby | MUI",
      frontendLink:
        "https://github.com/KotaUeshima/college_marketplace_frontend",
      backendLink: "https://github.com/KotaUeshima/college_marketplace_backend",
      demoLink: "https://clever-kulfi-41745d.netlify.app/",
      disabled: true,
    },
    {
      id: 4,
      src: traveler,
      title: "Traveler's Guide",
      technologies: "React.js | MUI",
      frontendLink: "https://github.com/KotaUeshima/traveler-guide",
      backendLink: "https://github.com/KotaUeshima/travelers-guide-backend",
      demoLink: "https://fluffy-vacherin-e1c347.netlify.app",
      disabled: true,
    },
  ];

  return (
    <div
      name="portfolio"
      className="py-20 bg-white w-full min-h-screen text-black"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="header">My Projects</p>
          <p className="subheader">Check out some of my work right here!</p>
        </div>

        <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-12 sm:px-0">
          {portfolios.map(
            ({
              id,
              src,
              title,
              technologies,
              frontendLink,
              backendLink,
              demoLink,
              disabled,
            }) => (
              <div
                key={id}
                className={
                  "shadow-md shadow-gray-600 rounded-md hover:scale-105 duration-200 "
                }
              >
                <img
                  className="border-b-2 rounded-t-md border-primary"
                  src={src}
                  alt=""
                />
                <p className="text-center pt-2 text-xl font-bold">{title}</p>
                <p className="text-center text-gray-500 text-sm">
                  {technologies}
                </p>
                <div className="flex items-center justify-center">
                  <a href={demoLink} target="_blank" rel="noreferrer">
                    <button
                      disabled={disabled}
                      className={`px-6 pt-3 m-2 text-primary ${
                        disabled ? "opacity-50" : "duration-200 hover:scale-105"
                      }`}
                    >
                      Demo
                    </button>
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <a href={frontendLink} target="_blank" rel="noreferrer">
                    <button className="w-1/2 px-6 pb-3 m-4 duration-200 hover:scale-105">
                      Frontend
                    </button>
                  </a>
                  <a href={backendLink} target="_blank" rel="noreferrer">
                    <button className="w-1/2 px-6 pb-3 m-4 duration-200 hover:scale-105">
                      Backend
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
