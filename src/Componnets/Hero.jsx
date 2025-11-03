import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/aboutimg.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import "../App.css";

// Social links
const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/arsath-ali-l/",
    icon: FaLinkedinIn,
    ariaLabel: "LinkedIn Profile",
  },
  {
    name: "GitHub",
    href: "https://github.com/Arsathali-L",
    icon: FaGithub,
    ariaLabel: "GitHub Profile",
  },
  {
    name: "Email",
    href: "https://mail.google.com/mail/u/0/#inbox",
    icon: MdEmail,
    ariaLabel: "Email Contact",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-28 pb-20 max-w-6xl mx-auto px-4 md:px-5 lg:px-8 flex flex-col-reverse md:flex-row gap-5 items-center md:justify-between relative"
    >
      {/* Left Content */}
      <div className="flex flex-col flex-1 gap-3 leading-loose tracking-wide">
        <motion.p
          className="text-xl lg:text-2xl mb-2 font-medium text-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Hello there! I'm
        </motion.p>

        <motion.h1
          className="text-4xl lg:text-5xl mb-2 font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          L. Arsath Ali
        </motion.h1>

        <motion.div
          className="text-4xl lg:text-5xl font-bold min-h-[3rem] sm:min-h-[4rem]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <span className="text-4xl lg:text-5xl text-white">I'm a </span>
          <span className="text-[#FFD700] text-justify">MERN Stack Developer | Building full-stack web applications</span>
        </motion.div>

        <motion.p
          className="lg:text-lg tracking-wide text-gray-300 max-w-xl text-justify"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
        >
          Building responsive, dynamic, and modern web applications using React,
          Node.js, and MongoDB — turning ideas into digital reality.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex gap-6 flex-1 my-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((link, index) => (
            <motion.div
              key={index}
              className="relative group p-2 cursor-pointer border border-[#FFD700] rounded-full bg-transparent hover:bg-[#FFD700] transition-all duration-300 flex items-center justify-center"
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="text-[#FFD700] group-hover:text-[#4B0082]"
              >
                <link.icon size={23} />
              </a>
              <span className="absolute bottom-full mb-2 px-2 py-1 rounded bg-white/70 text-[#4B0082] text-xs opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                {link.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Resume Button */}
        <motion.a
          href="/public/Arsathai_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="L_ArsathAli_Resume.pdf"
          className="p-3 flex gap-2 w-64 items-center justify-center font-bold border cursor-pointer border-[#FFD700] text-[#4B0082] rounded-full bg-[#FFD700] hover:bg-transparent hover:text-[#FFD700] transition-all duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
          viewport={{ once: true }}
        >
          <span>Download Resume</span>
          <FiDownload size={18} className="font-bold" />
        </motion.a>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img
          src={heroImage}
          alt="Arsath Ali working on laptop"
          className="h-[380px] w-[270px] sm:h-[400px] sm:w-[300px] md:h-[580px] md:w-[430px]"
          loading="eager"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
