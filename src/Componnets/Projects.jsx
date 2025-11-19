import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import passwordManagerImage from "../assets/project/hotel.png";
import chatAppImage from "../assets/project/movies.png";
import authAppImage from "../assets/project/e-com.png";
import expenseTrackerImage from "../assets/project/expense.png";
import todoListImage from "../assets/project/to-do.png";
import { FaLink } from "react-icons/fa";
import "../App.css";

const projectData = [
  {
    title: "Hotel Booking App",
    image: passwordManagerImage,
    description:
      "A responsive MERN-based hostel/hotel booking platform where users can browse rooms, view details, and make secure bookings.",
    highlights: [
      "JWT Authentication",
      "Room listing & details",
      "Real-time booking flow",
      "Fully responsive UI",
    ],
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "TailwindCss","JWT"],
    demoLink: "https://arshbooking2.netlify.app/",
    frontEndCode: "https://github.com/Arsathali-L/ui-design.git",
    backEndCode: "https://github.com/Arsathali-L/backend-ui.git",
  },

  {
    title: "ToDo List App",
    image: todoListImage,
    description:
      "A clean and minimal MERN-based to-do app that allows users to manage daily tasks with create, update, and delete functionality.",
    highlights: [
      "Create, edit, delete tasks",
      "Task completion tracking",
      "MongoDB persistent storage",
      "Fast and lightweight UI",
    ],
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js","CSS"],
    demoLink: "https://to-do-arsh.netlify.app/",
    frontEndCode: "https://github.com/Arsathali-L/to-do-frontend.git",
    backEndCode: "https://github.com/Arsathali-L/to-do-backend.git",
  },

  {
    title: "Expense Tracker App",
    image: expenseTrackerImage,
    description:
      "A secure finance tracker that allows users to add, delete, and view income/expense transactions.",
    highlights: [
      "Add income & expense entries",
      "Auto calculation of totals",
      "JWT-secured routes",
      "Responsive & simple UI",
    ],
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js","CSS","JWT"],
    demoLink: "https://expense-tracker-arsh.netlify.app/",
    frontEndCode: "https://github.com/Arsathali-L/frontend.git",
    backEndCode: "https://github.com/Arsathali-L/backend.git",
  },

  {
    title: "Movie Search App",
    image: chatAppImage,
    description:
      "Developed a real-time movie search app using the OMDB API and React. Includes search, filtering, and a responsive UI.",
    highlights: [
      "Instant movie search",
      "OMDB API integration",
      "Responsive clean UI",
      "State management using hooks",
    ],
    techStack: ["React.js", "API", "TailwindCss"],
    demoLink: "https://arshathmoviesearch.netlify.app/",
    frontEndCode: "https://github.com/Arsathali-L/React-movie.git",
    backEndCode: "https://github.com/Arsathali-L/React-movie.git",
  },

  // {
  //   title: "e-Commerce App",
  //   image: authAppImage,
  //   description:
  //     "Created a responsive e-commerce UI using React and React Router with product listing and shopping cart functionality.",
  //   highlights: [
  //     "Product listing grid",
  //     "Cart functionality",
  //     "Add/Remove items",
  //     "Client-side routing",
  //   ],
  //   techStack: ["tailwindcss", "React.js", "API"],
  //   demoLink: "https://alibabashoping1.netlify.app/",
  //   frontEndCode: "https://github.com/Arsathali-L/React-1.git",
  //   backEndCode: "https://github.com/Arsathali-L/React-1.git",
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section py-20 px-6 md:px-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="text-4xl lg:text-5xl font-semibold text-center mb-16"
      >
        <span className="text-[#d4af37] text-3xl lg:text-4xl">{"<"}</span>My{" "}
        <span className="text-[#d4af37]">
          Projects <span className="text-3xl lg:text-4xl">{"/>"}</span>
        </span>
      </motion.h1>

      <div className="max-w-6xl mx-auto space-y-20">
        {projectData.map((project, index) => (
          <Tilt
            key={project.title}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareColor="#d4af37"
            className={`project-card flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-10`}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full lg:w-1/2 rounded-2xl object-cover shadow-gold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            />

            <motion.div
              className="w-full lg:w-1/2 p-5 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 project-title">
                {project.title}
              </h2>

              <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-lg text-justify">
                {project.description}
              </p>

              {/* ⭐ HIGHLIGHTS SECTION ADDED HERE ⭐ */}
              <ul className="mb-4 space-y-1">
                {project.highlights.map((point, i) => (
                  <li key={i} className="text-gray-300 text-sm sm:text-base flex">
                    <span className="text-[#d4af37] mr-2">•</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mb-4">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4 mt-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="glow-btn"
                >
                  <FaLink /> Demo
                </a>

                <a
                  href={project.frontEndCode}
                  target="_blank"
                  rel="noreferrer"
                  className="outline-btn"
                >
                  Frontend Code
                </a>

                <a
                  href={project.backEndCode}
                  target="_blank"
                  rel="noreferrer"
                  className="glow-btn"
                >
                  Backend Code
                </a>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Projects;
