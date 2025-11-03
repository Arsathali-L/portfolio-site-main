import React, { useEffect, useState } from "react";
import Navbar from "./Componnets/Navbar";
import Hero from "./Componnets/Hero";
import "./App.css";
import About from "./Componnets/About";
import Skills from "./Componnets/Skills";
import Contact from "./Componnets/Contact";
import Footer from "./Componnets/Footer";
import MoveToTop from "./Componnets/MoveToTop";
import Projects from "./Componnets/Projects";
import { HashLoader } from "react-spinners";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  /* Loading section */
  if (isLoading) {
    return (
      <div className="absolute inset-0 flex justify-center items-center bg-[#191c36]">
        <HashLoader color="#FFD700" size={100} />
      </div>
    );
  }
  return (
    <div className="relative bg-custom-dark-blue min-h-screen text-white overflow-x-hidden">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <MoveToTop activeSection={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
