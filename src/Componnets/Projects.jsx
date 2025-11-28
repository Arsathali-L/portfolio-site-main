import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import passwordManagerImage from "../assets/project/hotel.png";
import baby from "../assets/project/baby.png";
import food from "../assets/project/food.png";
import { FaLink } from "react-icons/fa";
import "../App.css";

const projectData = [
  {
    title: "baby-e-commerce",
    image: baby,
    description:
      "A fully responsive e-commerce web app designed for baby products. Users can browse categories, view product details, manage their cart, and make secure payments using Stripe. Smooth UI interactions and real-time product updates enhance the complete shopping experience.",
    highlights: [
      "Product listing with dynamic categories",
      "Add to Cart & real-time cart management",
      "Stripe payment gateway integration",
      "User authentication & protected checkout",
      "Fully responsive modern UI"
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "tailwindcss","stripe"],
    demoLink: "https://baby-shop-e-commerse-client.vercel.app/",
    frontEndCode: "https://github.com/Arsathali-L/Baby-Shop-E-Commerse-front.git",
    backEndCode: "https://github.com/Arsathali-L/babyshop-E-Commerce-back.git",
  },
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
    title: "food ordering",
    image: food,
    description:
      "A modern food ordering platform where users can explore dishes, view detailed descriptions, add items to the cart, and place orders with smooth UI interactions. Integrated with Firebase authentication for secure login and Strapi backend for order storage.",
    highlights: [
      "Category-based food browsing",
      "Cart system with quantity management",
      "Order placement with backend sync",
      "Firebase authentication (Login & Register)",
      "Mobile-first responsive design"
    ],
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "firebase","stripe","tailwindcss"],
    demoLink: "https://foodarsh.netlify.app/",
    frontEndCode: "https://github.com/Arsathali-L/food-front.git",
    backEndCode: "https://github.com/Arsathali-L/server.git",
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
