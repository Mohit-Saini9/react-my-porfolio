import React from "react";
import Mohit from "../Assets/MOHIT.jpg";
import { Link } from "react-scroll";
// import About from "./About";
// import Experience from "./Experience";
// import Conatact from "./Conatact";

const Home = () => {
  return (
    <div name="home" className="sm:min-h-screen lg:h-screen md:h-screen w-full text-black">
      {/* max-h-screen   md:max-h-screen */}
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center 
      justify-between px-3 h-full md:flex-row "
      >
        <div className="px-3 mx-auto">
          <h2 className="text-4xl cursor-pointer sm:text-7xl mt-20 text-slate-400  font-bold">
            <Link to={"home"} smooth duration={400}>
              {" "}
              Hi I am Mohit Saini
            </Link>
          </h2>
          <p className="py-4 justify-between text-xl md:text-xl  items-center max-w-md ">
            Full Stack Developer (MERN Stack) With 6 months of hands-on
            experience in the MERN (MongoDB, Express.js, React, Node.js) stack,
            I am a passionate and dedicated developer eager to create efficient,
            scalable, and user-friendly web applications. My expertise spans
            across building dynamic front-end interfaces, developing robust
            back-end services, and seamlessly integrating databases to deliver
            {/* end-to-end solutions. In my journey so far, I have successfully
            contributed to projects involving responsive web design, RESTful
            APIs, and state management, demonstratings */}
          </p>
          <div className=" flex  justify-items-center items-center max-md:hidden  ">
            <button
              className="bg-cyan-400 rounded-lg  px-6 py-3 
          hover:scale-110 duration-300 "
            >
              <a href={require("../Assets/mp.pdf")} download={"Resume.pdf"}>
                DownloadCv
              </a>
            </button>
            <button
              className="bg-cyan-400 rounded-lg px-6 py-3 ml-20
          hover:scale-110 duration-30 "
            >
              <Link to={"contact"} smooth duration={400}>
                Conatact
              </Link>
            </button>
          </div>
        </div>
        <div className="">
          <img
            src={Mohit}
            alt="img"
            className=" rounded-xl  h-[75%] w-[75%] ml-10 md:mt-20 md:h-[90%]w-[80%]  "
          />
        </div>
        <div className="flex justify-between p-2 text-l font-medium mt-0 md:hidden">
          <button
            className="bg-cyan-400 rounded-lg  px-6 py-3 
          hover:scale-110 duration-300  "
          >
            <a href={require("../Assets/mp.pdf")} download={"Resume.pdf"}>
              DownloadCv
            </a>
          </button>
          <button
            className="bg-cyan-400 rounded-lg px-6 py-3
           hover:scale-110 duration-300 ml-20"
          >
            <Link to={"contact"} smooth duration={400}>
              Conatact
            </Link>
          </button>
        </div>
      </div>
      {/* <About/>
    <Experience/>
    <Conatact/> */}
    </div>
  );
};

export default Home;
