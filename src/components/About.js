import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-white text-black">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-extrabold tracking-widest inline border-b-4 border-pink-800">
            ABOUT ME
          </p>
        </div>

        <p className="text-lg text-center text-gray-500 mt-16">
          I'm a senior at the Unviersity of Southern California, who has
          recently transitioned into{" "}
          <span className="font-bold text-black">
            Full-Stack Web Development.
          </span>{" "}
          I have a minor in Computer Programming, and just completed my time at{" "}
          <span className="font-bold text-black">
            Flatiron's Software Engineering Bootcamp
          </span>
          . I am excited to start my journey into tech and want to be at a
          constant state of learning.
        </p>
        <br />
        <p className="text-lg text-center  text-gray-500">
          I have changed career paths{" "}
          <span className="font-bold text-pink-800">3</span> times, lived in{" "}
          <span className="font-bold text-pink-800">3</span> different
          continents, and I pride myself on adaptability and perseverance. I am
          open to job opportunities and want to be at a community where I can
          grow, and make an impact.
        </p>
      </div>
    </div>
  );
}

export default About;
