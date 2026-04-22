import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full ">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-4xl sm:text-4xl font-semibold text-black border-b-4 border-black inline-block">
          About Me
        </h2>
        <div className="mt-8 flex flex-col md:flex-row text-gray-600 text-lg">
          <div className="">
            <p className="leading-relaxed">
              I am a React.js developer with hands-on experience in building
              responsive and user-friendly web applications. I have completed
              internships at PSK Technology Pvt. Ltd. and Cepia Labs, where I
              worked on frontend and full-stack projects using the MERN stack.
            </p>
            <p className="mt-2 leading-relaxed">
              I focus on creating clean UI, improving user experience, and
              developing scalable applications using modern technologies like
              React, Tailwind CSS, and Node.js.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
