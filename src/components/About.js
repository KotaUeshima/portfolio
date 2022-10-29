import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-white text-black">
      <div className="max-w-screen-md p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-extrabold tracking-widest inline border-b-4 border-pink-800">
            ABOUT ME
          </p>
        </div>

        <p className="text-lg text-center text-gray-500 mt-16">
          Hey everyone! My name is Kota Ueshima and I'm a senior at the
          Unviersity of Southern California, with a passion for learning new
          technologies and solving modern day problems. I have a minor in{" "}
          <span className="font-bold text-black">Computer Programming</span>,
          and have just completed my time at{" "}
          <span className="font-bold text-black">
            Flatiron's Software Engineering Bootcamp
          </span>
          . I am excited to start my journey into tech and am open to
          opportunities for experience.
        </p>
        <br />
        <p className="text-lg text-center  text-gray-500">
          As a busines administration major, I have strong teamworking and
          communication skills, which are vital in the software field. I have
          lived in <span className="font-bold text-pink-800">3</span> different
          countries, Japan, England, and the US, and I pride myself on
          adaptability and perseverance. Thanks so much, and enjoy my portfolio!
        </p>
      </div>
    </div>
  );
}

export default About;
