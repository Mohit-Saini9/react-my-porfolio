import React from "react";
import Html from "../Assets/Html.png";
import Css from "../Assets/Css.png";
import Js from "../Assets/Js.png";
import Reacts from "../Assets/Reacts.png";
import TailwindC from "../Assets/TailwindC.png";
import Nodejs from "../Assets/Nodejs.png";
import MongoDb from "../Assets/MongoDb.png";
import Github from "../Assets/Github.png";

const Experience = () => {
  const images = [
    { id: 1, src: Html, style: "shadow-orange-700", title: "Html" },
    { id: 2, src: Css, style: "shadow-blue-600", title: "Css" },
    { id: 3, src: Js, style: "shadow-yellow-500", title: "Javascript" },
    { id: 4, src: Reacts, style: "shadow-sky-400", title: "ReactsJs" },
    { id: 5, src: TailwindC, style: "shadow-green-600", title: "TailwindCss" },
    { id: 6, src: Nodejs, style: "shadow-green-500", title: "Nodejs" },
    { id: 7, src: MongoDb, style: "shadow-light-green-800", title: "MongoDb" },
    { id: 8, src: Github, style: "shadow-gray-500 ", title: "Github" },
  ];

  return (
    <div name="experience"  className=" w-full ">
      <div className="mx-auto   w-full">
        <div className="px-2 ">
          <p className="text-4xl font-bold underline text-gray-500 transition-all  ">
            Experience
          </p>
        </div>

        <div className="w-full  grid grid-cols-2   md:grid-cols-3 gap-4 px-10 sm:mr-10  "
        >
          {images.map(({ id, src, style, title }) => (
            <div
              key={id}
              className={`shadow:md  hover:scale-105 duration-200 gap-4
               mt-5 ${style}`}
            >
              <img
                src={src}
                alt="img"
                className="w-40 mx-auto border-2 object-conatain
                  rounded-lg md:h-[70%]w-[60%] "
              />
              <p className="mt-4 text-center text-xl font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
