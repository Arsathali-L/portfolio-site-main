import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoSendSharp, IoMail, IoChatbubbles } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, subject, message } = formData;

    if (name && subject && message) {
      fetch("https://formspree.io/f/xyzbodwy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          subject,
          message,
        }),
      })
        .then((res) => {
          if (res.ok) {
            setSuccessMsg("✅ Message sent successfully!");
            setFormData({ name: "", subject: "", message: "" });
          } else {
            setSuccessMsg("⚠️ Something went wrong. Try again!");
          }
        })
        .catch(() =>
          setSuccessMsg("❌ Network error. Please try again later.")
        );

      setTimeout(() => setSuccessMsg(""), 4000);
    } else {
      setSuccessMsg("⚠️ Please fill in all fields.");
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-[#1b1733] px-3 md:px-5 lg:px-0 py-24 overflow-hidden"
    >
      {/* Floating icons background */}
      <motion.div
        className="absolute top-10 left-10 text-[#d4af37]/20 text-6xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <IoMail />
      </motion.div>

      <motion.div
        className="absolute bottom-16 left-1/4 text-[#d4af37]/15 text-5xl"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <IoChatbubbles />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-16 text-[#d4af37]/20 text-7xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaPaperPlane />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="text-4xl lg:text-5xl font-semibold text-center mb-16 relative z-10"
      >
        <span className="text-[#d4af37] text-3xl lg:text-4xl">{"<"}</span>
        Contact{" "}
        <span className="text-[#d4af37]">
          Me <span className="text-3xl lg:text-4xl">{"/>"}</span>
        </span>
      </motion.h1>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto flex flex-col px-3 md:px-0 md:flex-row gap-5 md:gap-10 relative z-10"
      >
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md bg-[#241f47] text-white border border-[#3b3670] focus:outline-none focus:ring-2 focus:ring-[#d4af37] placeholder-gray-400 transition-all duration-300 hover:shadow-[0_0_10px_#d4af37]"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full px-4 py-3 rounded-md bg-[#241f47] text-white border border-[#3b3670] focus:outline-none focus:ring-2 focus:ring-[#d4af37] placeholder-gray-400 transition-all duration-300 hover:shadow-[0_0_10px_#d4af37]"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 rounded-md bg-[#241f47] text-white border border-[#3b3670] focus:outline-none focus:ring-2 focus:ring-[#d4af37] placeholder-gray-400 transition-all duration-300 hover:shadow-[0_0_10px_#d4af37]"
            required
          />

          {successMsg && (
            <p className="text-[#d4af37] my-3 text-center">{successMsg}</p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-[#d4af37] cursor-pointer text-[#1b1733] px-6 py-2 rounded-full border border-transparent hover:border-[#d4af37] hover:text-[#d4af37] hover:bg-transparent hover:shadow-[0_0_15px_#d4af37] transition-all duration-300"
            >
              <span>Send Message</span> <IoSendSharp />
            </button>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;

