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
              I’m <span className="highlight">L. Arsath Ali</span>, a dedicated 
            <span className="highlight"> MERN Stack Developer</span> focused on building clean, 
            scalable, and user-centered web applications. I enjoy transforming ideas into 
            functional products with smooth interfaces and efficient backend logic.
          </p>
          <br />
          
          <p className="text-justify">
              I work confidently across 
            <span className="highlight"> MongoDB, Express.js, React, and Node.js</span> — enabling me 
            to develop complete end-to-end applications. I prioritize clean code, responsive UI, 
            optimized APIs, and real-world problem solving in every project I build.
          </p>
          <br />
          
          <p className="text-justify">
              I am constantly learning new technologies, improving my system design skills, and 
            refining my approach to modern development. My goal is to deliver reliable solutions 
            and grow into a developer who contributes to meaningful and impactful products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;


