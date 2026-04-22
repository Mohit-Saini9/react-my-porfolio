import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "projects" },
    { id: 4, link: "contact" },
  ];

  return (
    <div
      className="flex justify-between items-center  bg-gradient-to-tr from-gray-800 to-purple-900  z-20
      w-full h-15 text-white fixed "
    >
      <div>
        <h1 className="text-xl ml-2 font-signature">Mohit Saini</h1>
      </div>

      <ul className="hidden md:flex  justify-between items-center  h-10 w-1/2 mr-12">
        {links.map((item) => (
          <li
            className="px-2 cursor-pointer capitalize font-medium text-xl text-white
              hover:scale-105 duration-200 hover:text-gray-300"
            key={item.link}
          >
            <Link to={item.link} smooth duration={400}>
              {item.link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="md:hidden  z-10 cursor-pointer mr-4 "
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}

        {nav && (
          <ul
            className="flex flex-col justify-center items-start absolute mt-4
        left-0 w-[95%]  mx-2 bg-gradient-to-bl  from-gray-700 to-purple-900  rounded-xl py-2"
          >
            {links.map((item) => (
              <li
                key={item.link}
                className=" lg:hidden
             font-medium cursor-pointer capitalize justify-center
             text-grey-600 text-xl  text-white px-4 "
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={item.link}
                  smooth
                  duration={500}
                >
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
