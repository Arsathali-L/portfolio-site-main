import React, { useEffect, useState } from "react";

const Navbar = ({ activeSection, setActiveSection }) => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const navLinks = ["home", "about", "skills", "projects", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks
        .map((section) => document.getElementById(section))
        .filter(Boolean);

      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      if (current && current !== activeSection) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        window.scrollY > 20
          ? "bg-[#0E0C24]/90 backdrop-blur-md shadow-lg shadow-black/40"
          : "bg-[#0E0C24]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex gap-1 items-center justify-between text-white font-semibold px-3 sm:px-6 py-3 text-xl">
        {/* Logo */}
        <div className="font-bold text-[#FFD700] whitespace-nowrap tracking-tighter drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]">
          {"<"} <span className="text-4xl text-[#FFD700]">A</span> {"/>"}
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex gap-10 md:gap-14 lg:gap-20 justify-between items-center">
          {navLinks.map((navlink, index) => (
            <a
              key={index}
              href={`#${navlink}`}
              onClick={() => setActiveSection(navlink)}
              className={`capitalize group relative transition duration-300 ${
                activeSection === navlink
                  ? "text-[#FFD700] font-semibold after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-[#FFD700] after:rounded-full"
                  : "text-gray-300 hover:text-[#FFD700]"
              }`}
            >
              {navlink}
            </a>
          ))}
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setHamburgerClicked(!hamburgerClicked)}
          className="sm:hidden flex flex-col justify-center h-12 w-12 gap-1 hover:bg-white/10 p-3 rounded-full cursor-pointer transition-all duration-300"
        >
          <span
            className={`block h-1 bg-[#FFD700] rounded transition-all duration-300 transform ${
              hamburgerClicked ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-1 bg-[#FFD700] rounded transition-all duration-300 transform ${
              hamburgerClicked ? "-rotate-45 -translate-y-0" : ""
            }`}
          ></span>
          <span
            className={`block h-1 bg-[#FFD700] rounded transition-all duration-300 ${
              hamburgerClicked ? "opacity-0" : "opacity-100"
            }`}
          ></span>
        </button>

        {/* Mobile Dropdown */}
        <div
          className={`sm:hidden absolute top-full left-0 right-0 bg-[#161335]/95 backdrop-blur-lg border-t border-[#FFD700]/30 shadow-xl overflow-hidden transition-all duration-300 ${
            hamburgerClicked ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-3 m-4">
            {navLinks.map((navlink, index) => (
              <a
                key={index}
                href={`#${navlink}`}
                onClick={() => {
                  setActiveSection(navlink);
                  setHamburgerClicked(false);
                }}
                className={`p-2 capitalize rounded-md text-lg transition-all duration-300 ${
                  activeSection === navlink
                    ? "text-[#FFD700] bg-[#2A2560]/60"
                    : "text-gray-300 hover:text-[#FFD700] hover:bg-[#2A2560]/40"
                }`}
              >
                {navlink}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
