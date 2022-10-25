import React from "react";
import globify from "../assets/portfolio/globify.png";
import college_marketplace from "../assets/portfolio/college_marketplace.png";
import coming_soon from "../assets/portfolio/coming_soon.png";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: globify,
      codeLink: "https://github.com/KotaUeshima/Capstone-Project-Frontend",
    },
    {
      id: 2,
      src: college_marketplace,
      codeLink: "https://github.com/KotaUeshima/College_marketplace_frontend",
    },
    {
      id: 3,
      src: coming_soon,
      codeLink: "",
    },
    {
      id: 4,
      src: coming_soon,
      codeLink: "",
    },
    {
      id: 5,
      src: coming_soon,
      codeLink: "",
    },
    {
      id: 6,
      src: coming_soon,
      codeLink: "",
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
          {portfolios.map(({ id, src, codeLink }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-md hover:scale-105 duration-200"
            >
              <img src={src} alt="" />
              <div className="flex items-center justify-center">
                <a href="" target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={codeLink} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
