import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

function NavBar() {
  const [nav, setNav] = useState(false);
  const links = ["home", "about", "portfolio", "skills", "contact"];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 bg-white fixed">
      <div className="text-3xl font-japanese ml-4">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("上嶋コウタ").start();
          }}
        />
      </div>

      <ul className="hidden md:flex">
        {links.map((link) => {
          return (
            <li
              key={link}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-pink-800 hover:scale-105 duration-250"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white text-gray-500 md:hidden">
          {links.map((link) => {
            return (
              <li
                key={link}
                className="cursor-pointer capitalize px-4 py-6 text-4xl hover:text-pink-800"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
