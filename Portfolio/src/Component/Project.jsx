import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built using React.js and Tailwind CSS.",
      tech: "React, Tailwind Css",
      github: "https://github.com/Mohit-Saini9/react-my-porfolio",
      live: "",
    },
    {
      title: "E-commerce Application",
      desc: "Full-stack MERN app with cart and authentication.",
      tech: "MongoDB, Express, React, Node",
      github: "https://github.com/your-username/ecommerce",
      live: "https://ecommerce-demo.vercel.app",
    },
    {
      title: "Learning Management System",
      desc: "Responsive LMS UI built using React.js.",
      tech: "React, Tailwind",
      github: "https://github.com/Mohit-Saini9/PskAcadmy",
      live: "https://psk-acadmy.vercel.app/",
    },
    {
      title: "GitHub Profile Fetcher",
      desc: "Fetch GitHub user data using API integration.",
      tech: "React, API ,Tailwind css",
      github: "https://github.com/Mohit-Saini9/githubFetcher",
      live: "",
    },
    {
      title: "Student Management System",
      desc: "CRUD app to manage student records with add, update, and delete functionality.",
      tech: "React, Redux Toolkit, Tailwind CSS, API Integration",
      github: "https://github.com/Mohit-Saini9/student-managment",
      live: "https://student-managment-bay.vercel.app/",
    },
  ];

  return (
    <div name="projects" className="w-full min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-semibold border-b-4 border-black inline-block">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-2">
          {projects.map((item, index) => (
            <div
              key={index}
              className="p-5 border rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-purple-700">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-2">{item.desc}</p>

              <p className="text-sm text-gray-400 mt-2">{item.tech}</p>

              <div className="mt-5 flex gap-3">
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 text-sm font-medium rounded-lg 
    bg-gradient-to-l from-gray-800 to-purple-700 text-white 
    shadow-md hover:shadow-xl hover:scale-105 
    transition duration-300"
                >
                  GitHub
                </a>

                {/* Live Button */}
                <a
                  href={item.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium rounded-lg 
    bg-gradient-to-r from-purple-800 to-gray-600 text-white 
    shadow-md hover:shadow-xl hover:scale-105 
    transition duration-300"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
