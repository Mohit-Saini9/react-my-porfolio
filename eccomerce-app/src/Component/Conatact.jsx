import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


const Contact = () => {
  
  return (
    <div name="contact"  className=" w-full max-h-screen mt-30">
      <div className="flex flex-col min-w-screen-lg mx-auto h-full px-4">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 mr-0">
            Contact
          </p>
          <p className="py-6 text-2xl">
            Submit the below form to get in touch with me
          </p>
        </div>
        <div className="flex justify-center items-center sm:px-4  ">
          <form
            action="https://getform.io/f/bjjmqvzb"
            method="POST"
            className="flex flex-col  h-200 w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2  border-2  border-black rounded-md focus:outline-none"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="my-4 p-2 border-2 border-black rounded-md  text-black focus:outline-none "
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows={"10"}
              className="bg-transparent p-2 border-2  border-black  rounded-md focus:outline-none"
            ></textarea>
            <button
              className=" bg-cyan-300 mx-auto px-6 py-3 my-8 flex-items-center 
             rounded-md hover:scale-110 duration-300 "
            >
              Let's talk
            </button>
          </form>
        </div>

        <div className="inline-flex gap-10 text-xl font-medium items-center justify-center mb-5 ">
          <div className="">
          <a href="https://github.com/Mohit-Saini9">
              <FaSquareGithub style={{ width: "30", height: "30" }} />
              Github
            </a>
          </div>
          <div className="">
            <a href="mohit911545@gmail.com">
              <MdEmail style={{ width: "30", height: "30" }} />
              E-mail
              </a>
          
          </div>
          <div className="" >
           <a href="https://www.linkedin.com/in/mohit-saini-713487283/">
         
              <FaLinkedin style={{ width: "30", height: "30" }} />
              Linkdin</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
