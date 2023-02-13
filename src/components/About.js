import React from "react";

function About() {
  return (
    <div
      name="about"
      className="h-[50vh] w-full bg-primary text-white flex flex-col justify-center items-center"
    >
      <h2 className="header">Learn a little more about me!</h2>
      <p className="subheader px-[25vw] text-center">
        Since beginning my journey into software less than a year ago, I've
        picked up a minor in Computer Programming at my university, USC, worked
        as a frontend developer at a LA-based startup, completed a 15 week
        full-time bootcamp, and am currently working as a full-stack intern at
        Seminaut.
      </p>
    </div>
  );
}

export default About;
