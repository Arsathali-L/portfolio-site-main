import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiExpress, SiJavascript, SiMongodb, SiMysql } from "react-icons/si";
import "../App.css";

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 size={70} />, name: "HTML" },
    { icon: <FaCss3Alt size={70} />, name: "CSS" },
    { icon: <SiJavascript size={70} />, name: "JavaScript" },
    { icon: <BiLogoTailwindCss size={70} />, name: "TailwindCSS" },
    { icon: <FaReact size={70} />, name: "React" },
    { icon: <FaNodeJs size={70} />, name: "NodeJS" },
    { icon: <SiExpress size={70} />, name: "ExpressJS" },
    { icon: <SiMongodb size={70} />, name: "MongoDB" },
    { icon: <SiMysql size={70} />, name: "MySQL" },
    { icon: <FaGitAlt size={70} />, name: "Git" },
    { icon: <FaGithub size={70} />, name: "GitHub" },
  ];

  return (
    <section
      id="skills"
      className="skills-bg py-24 px-6 md:px-10 text-center overflow-hidden"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="text-4xl lg:text-5xl font-semibold text-center mb-12"
      >
        <span className="text-[#d4af37] text-3xl lg:text-4xl">{"<"}</span>My{" "}
        <span className="text-[#d4af37]">
          Skills <span className="text-3xl lg:text-4xl">{"/>"}</span>
        </span>
      </motion.h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-16 lg:gap-18">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.1 + index * 0.08,
            }}
            viewport={{ once: true }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.4}
              glareColor="#d4af37"
              glareBorderRadius="1rem"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              transitionSpeed={2500}
              scale={1.05}
              className="skill-card bg-[#241f47] rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 border border-[#3b3670] hover:border-[#d4af37] shadow-lg"
            >
              <div className="skill-icon text-6xl mb-3 text-white">{skill.icon}</div>
              <p className="text-white font-medium text-base">{skill.name}</p>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;


