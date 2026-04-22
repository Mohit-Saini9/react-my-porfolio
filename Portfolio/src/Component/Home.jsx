import React from "react";
import Mohit from "../Assets/MOHIT.jpg";
import { Link } from "react-scroll";
import ResumesUpdated from "../Assets/mp.pdf";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full max-w-6xl text-black flex justify-center mx-auto "
    >
      <div className="  grid grid-cols-1 md:grid-cols-2 items-center justify-between px-3 mx-auto w-full">
        <div className="px-3 mx-auto gap-10 ">
          <h1 className="text-4xl md:text-6xl cursor-pointer md:mt-20 mt-10 font-bold">
            Hi, I'm <span className="text-purple-800">Mohit Saini</span>
          </h1>

          <h2 className="font-medium text-xl mt-4">
            Frontend Developer (React.js)
          </h2>
          <p className="py-4 text-base max-w-md">
            React.js Developer with internship experience at PSK Technology and
            Cepia Labs. I build responsive and user-friendly web applications
            using the MERN stack.
          </p>
          <div className="flex gap-6 mt-4 items-center max-md:hidden text-white">
            <button className="bg-gradient-to-tl from-gray-800 to-purple-800 hover:to-purple-900 px-4 py-3 hover:scale-110 duration-300 rounded-lg">
              <a href={ResumesUpdated} download="Resume.pdf">
                Download CV
              </a>
            </button>

            <button className="bg-gradient-to-tl from-gray-800 to-purple-800 hover:to-purple-900 px-8 py-3  hover:scale-110 duration-300 rounded-lg">
              <Link to="contact" smooth duration={400}>
                Contact
              </Link>
            </button>
          </div>
        </div>

        <div className="mx-auto flex items-center justify-center">
          <img
            src={Mohit}
            alt="img"
            className="rounded-xl w-44 md:w-64 ml-10 md:mt-20 md:h-[10%] shadow-lg object-cover hover:scale-105 transition duration-300 "
          />
        </div>

        <div className=" w-full  p-2 text-lg font-medium md:hidden mt-4 text-white">
          <button className="bg-gradient-to-tl from-gray-800 to-purple-800 hover:to-purple-900 rounded-lg px-4 py-3 hover:scale-110 duration-300 w-full ">
            <a href={ResumesUpdated} download>
              Download CV
            </a>
          </button>

          <button className="bg-gradient-to-tl from-gray-800 to-purple-800 hover:to-purple-900 rounded-lg px-8 py-3 hover:scale-110 duration-300 w-full mt-4">
            <Link to="contact" smooth duration={400}>
              Contact
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
