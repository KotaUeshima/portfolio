import React from "react";

function About() {
  return (
    <div
      name="about"
      className="relative -z-10 w-full h-screen bg-white text-black"
    >
      <div className="max-w-screen-md p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="header">ABOUT ME</p>
        </div>
        <div className="bg-primary mt-16 rounded-md drop-shadow-lg relative z-10">
          <p className="text-base font-normal text-center text-white p-6">
            As a young child, I spent many hours with my late grandfather
            playing shogi, otherwise known as Japanese chess. The game, which I
            would say has a few more additional rules than the standard game of
            chess, involves the basic principles of strategy, logical thinking,
            and finding creative solutions to beat one’s opponent. This game
            would be the origin of much exhilaration and agony in my childhood,
            and since then I have continued my love for those essential
            principles, which made the game so fun. I am still an adamant chess
            player, and now in my professional career, I have lately pivoted
            into the field of software engineering, which have shown me that the
            same principles my grandfather taught me can be used to create
            efficient and impactful solutions in this technological world.
          </p>
        </div>

        <img
          src="https://i.pinimg.com/236x/0f/b7/a6/0fb7a6754f1c6efc2fba4ef6a610c517.jpg"
          alt="shogi"
          className="absolute w-1/3 left-4 rounded-md opacity-20"
        />
        <img
          src="https://coloradomasterchess.com/wp-content/uploads/2017/11/chess-1226126_1920.jpg"
          alt="shogi"
          className="absolute w-1/3 right-4 rounded-md opacity-20"
        />
      </div>
    </div>
  );
}

export default About;
