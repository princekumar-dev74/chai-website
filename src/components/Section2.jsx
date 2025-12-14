import React from 'react';
import './Section2.css';
import { motion } from 'framer-motion';

const teas = [
    { src: '/images/tea1.jpeg', alt: 'Tea', rotate: -15, top: -350, left: 20 },
    { src: '/images/tea.jpg', alt: 'Tea1', rotate: 10, top: -280, left: 200 },
    { src: '/images/tea2.jpg', alt: 'Tea2', rotate: -5, top: -70, left: 180 },
  ]

const Section2 = () => {
  return (
    <div className="section2">
      <div className="section2-left">
        {teas.map((tea, index) => (
          <motion.img
            key={index}
            src={tea.src}
            alt={tea.alt}
            className="tea-img"
            initial={{ opacity: 0, y: 150, rotate: 0, top: tea.top + 150, left: tea.left }}
            whileInView={{ opacity: 1, y: 0, rotate: tea.rotate, top: tea.top, left: tea.left }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            style={{ position: 'absolute' }}
          />
        ))}
      </div>
      <motion.div
        className="section2-right"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          OUR <span className="hindi">चाय</span> STORY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          From the first sip, our teas take you on a journey of flavors and aromas, carefully selected from the finest leaves. Each blend tells its own story, crafted with passion and expertise to bring warmth and comfort to your daily life. Whether it’s the delicate scent of rose, the exotic touch of kesar, or the classic spices in masala and cardamom, our chai is designed to delight your senses and make every cup a memorable experience.
          <br /><br />
          Every ingredient is sourced ethically, ensuring that each sip supports local farmers and sustainable practices. Our brewing process respects traditional methods while embracing modern techniques to bring out the richest flavors. Whether shared with friends, enjoyed during quiet reflection, or served as a comforting ritual in your daily routine, our chai is more than just a drink—it’s a celebration of culture, care, and connection.
          <br /><br />
          Let the aroma fill your space, let the flavors dance on your palate, and let each cup remind you that the simple joys in life are often the most profound. Welcome to a world where every tea tells a story, and every story is steeped in love.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Explore More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Section2;
