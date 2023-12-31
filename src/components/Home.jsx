import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#2b6777]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-2xl sm:text-3xl text-[#FF5733]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#FFFAFA]">
          Jose Monagas
        </h1>
        <p className="text-[#FFE4E1] text-1xl py-4 max-w-[700px] ">
          I am a Full Stack Software Engineer with a unique background that
          spans from Industrial Engineering to Data Analysis, and now, Software
          Development. With 3 years of experience in the data field, I have
          transitioned my skills to become a dedicated developer specializing in
          the creation of responsive web applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FF5733] hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-4" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
