import React from "react";
import "./Hero.css";
import Navbar from "./Navrbar";
import { motion } from "framer-motion";

const gradientText = (text) => {
  return text.split("").map((char, index) => (
    <span key={index} className="gradient-letter">{char}</span>
  ));
};

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.6, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  const paraText = `From the streets of India to your home, experience the warmth, aroma, and soul of real chai. Every sip tells a story, every cup brings comfort, memories, and happiness into your day.`;

  return (
    <div className="hero">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Navbar />
      </motion.div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}>
          The Taste of <span className="hindi">चाय</span>
        </motion.h1>
        <motion.p variants={itemVariants}>{gradientText(paraText)}</motion.p>

        <motion.div className="hero-buttons" variants={containerVariants}>
          <motion.button className="primary-btn" variants={itemVariants}>
            Order Now
          </motion.button>
          <motion.button className="secondary-btn" variants={itemVariants}>
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>

      <img src="/images/leaf.png" alt="leaf" className="leaf leaf1" />
      <img src="/images/leaf2.png" alt="leaf" className="leaf leaf2" />
      <img src="/images/leaf.png" alt="leaf" className="leaf leaf3" />
      <img src="/images/leaf2.png" alt="leaf" className="leaf leaf4" />
      <img src="/images/tray.png" alt="" className="tray" />

      <motion.img
        src="/images/cup.png"
        alt="cup"
        className="cup"
        initial={{ y: 200, rotate: -30, opacity: 0 }}
        animate={{ y: 0, rotate: 0, opacity: 1 }}
        transition={{
          delay: 1.5, 
          duration: 0.8,
          ease: "easeOut",
        }}
      />

      <motion.img
        src="./images/tea.jpg"
        alt="tea"
        className="tea"
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 2, 
          duration: 0.8,
          ease: "easeOut",
        }}
      />

      <motion.p
        className="tea-para"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 2.1, 
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        Walk through the lush green tea gardens where every leaf tells a story.
        The mist, the aroma, and the gentle breeze carry the soul of nature into
        every cup of chai.
      </motion.p>
    </div>
  );
};

export default Hero;
