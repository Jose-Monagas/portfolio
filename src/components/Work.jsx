import React from "react";
import Fallmart from "../assets/projects/fallmart.png";
import TicTacToe from "../assets/projects/tic-ta-toe.png";
import TodoList from "../assets/projects/TodoList.png";
import WorkoutWiseApp from "../assets/projects/WorkoutWiseApp.png";
function Work() {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#2b6777]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#FF5733] ">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>
        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${TicTacToe})` }}
            className="shadow-lg shadow-[#040c16 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-exl font-bold text-white tracking-wider">
                A Twist on the Tic-Tac-Toe game implemented with HTML, CSS, and
                JavaScript
              </span>
              <div className="pt-8 text-center">
                <a href="https://www.josemonagas.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Jose-Monagas/unit-1-project">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Fallmart})` }}
            className="shadow-lg shadow-[#040c16 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-exl font-bold text-white tracking-wider">
                E-commerce React Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://fallmart.josemonagas.me/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Jose-Monagas/Walmart-MERN-APP">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${TodoList})` }}
            className="shadow-lg shadow-[#040c16 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-exl font-bold text-white tracking-wider">
                React-based todo list application for efficient task management.
              </span>
              <div className="pt-8 text-center">
                <a href="https://todolist.josemonagas.me/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Jose-Monagas/todo-example-deploy">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkoutWiseApp})` }}
            className="shadow-lg shadow-[#040c16 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-exl font-bold text-white tracking-wider">
                Experience fitness on your terms with this cutting-edge workout
                React app
              </span>
              <div className="pt-8 text-center">
                <a href="https://workout-wise-test.josemonagas.me/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Jose-Monagas/unit-3-project">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
