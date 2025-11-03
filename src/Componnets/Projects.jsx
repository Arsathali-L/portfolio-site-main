import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import passwordManagerImage from "../assets/project/hotel.png";
import chatAppImage from "../assets/project/movies.png";
import authAppImage from "../assets/project/e-com.png";
import { FaLink } from "react-icons/fa";
import "../App.css";

const projectData = [
  {
    title: "Hotel Booking App",
    image: passwordManagerImage,
    description:
      "Built a full-stack hotel booking application using React (frontend) and Node.js + Express (backend). Features include room listings, dynamic routing, and REST API integration.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "TailwindCss"],
    demoLink: "https://arshbooking2.netlify.app/",
    frontEndCode: "https://github.com/Arsathali-L/ui-design.git",
    backEndCode: "https://github.com/Arsathali-L/backend-ui.git",
  },
  {
    title: "Movie Search App",
    image: chatAppImage,
    description:
      "Developed a real-time movie search app using the OMDB API and React. Included features like responsive design, state management, and routing.",
    techStack: ["React.js", "API"," TailwindCss"],
    demoLink: "https://arshathmoviesearch.netlify.app/",
    frontEndCode: "https://github.com/Arsathali-L/React-movie.git",
    backEndCode: "https://github.com/Arsathali-L/React-movie.git",
  },
  {
    title: "e-Commerce App",
    image: authAppImage,
    description:
      "Created a responsive e-commerce UI using React and React Router. Implemented product listing, shopping cart functionality,and client-side routing.",
    techStack: ["tailwindcss", "React.js", "API"],
    demoLink: "https://alibabashoping1.netlify.app/",
    frontEndCode: "https://github.com/Arsathali-L/React-1.git",
    backEndCode: "https://github.com/Arsathali-L/React-1.git",
  },
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

              <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-lg">
                {project.description}
              </p>

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

