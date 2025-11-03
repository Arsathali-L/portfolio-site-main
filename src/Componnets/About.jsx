import React from "react";
import Tilt from "react-parallax-tilt";
import aboutMeImage from "../assets/about.png";
import "../App.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.4}
            scale={1.05}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            transitionSpeed={2000}
          >
            <img src={aboutMeImage} alt="About me" className="glow-img" />
          </Tilt>
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p className="text-justify">
            I’m <span className="highlight">L. Arsath Ali</span>, a passionate{" "}
            <span className="highlight">MERN Stack Developer</span> dedicated to building modern, user-friendly, and efficient web applications. I enjoy turning complex ideas into simple, functional, and visually appealing digital experiences.
          </p>
          <br />
          <p className="text-justify "> 
            My expertise spans across <span className="highlight">MongoDB, Express.js, React, and Node.js,</span> allowing me to develop both the frontend and backend of web applications with ease. I focus on clean code, smooth user interfaces, and scalable architecture.
          </p>
          <br />
          <p className="text-justify">
            When I’m not coding, I love exploring new technologies, improving my problem-solving skills, and learning how to make web applications faster and smarter. My goal is to grow as a developer while contributing to impactful projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
