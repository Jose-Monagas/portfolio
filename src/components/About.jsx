import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#2b6777] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#FF5733]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid  sm:grid-cols-2 gap-8 px-4 ">
          <div className="sm:text-right text-3xl font-bold">
            <p>Hi. I'm Jose, welcome to my site. Please take a look around.</p>
          </div>
          <div>
            <p>
              I excel in collaborative environments, fostering creativity and
              teamwork to deliver outstanding results. My problem-solving
              approach embraces innovation, encourages out-of-the-box thinking,
              and values the learning process as a precursor to success. I'm
              driven by a deep passion for crafting exceptional software that
              enhances the quality of life for those I work with.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
