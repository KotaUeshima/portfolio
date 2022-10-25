import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import Typewriter from "typewriter-effect";

function Home() {
  const links = [
    {
      id: 1,
      icon: <FaGithub size={40} />,
      link: "https://github.com/KotaUeshima",
    },
    {
      id: 2,
      icon: <FaLinkedin size={40} />,
      link: "https://www.linkedin.com/in/kota-ueshima/",
    },
    {
      id: 3,
      icon: <BsMedium size={40} />,
      link: "https://medium.com/@kota.j.ueshima",
    },
  ];
  return (
    <div name="home" className="h-screen w-full bg-white">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-center text-black">
            Hi, I'm Kota.
          </h2>
          <div className="text-gray-500 py-7 text-center">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    " I am a Full Stack Developer | College Student @ USC | Fanatic Football Fan"
                  )
                  .start();
              }}
            />
          </div>

          <div className="flex justify-center space-x-5">
            {links.map(({ id, icon, link }) => {
              return (
                <a
                  key={id}
                  href={link}
                  className="text-pink-800 hover:scale-110 duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
