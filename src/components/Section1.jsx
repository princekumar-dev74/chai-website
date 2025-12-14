import React from 'react';
import './Section1.css';
import { motion } from 'framer-motion';

const teas = [
  { name: 'Rose Tea', img: '/images/rose.png' },
{ name: 'Tulsi Tea', img: '/images/tulsi.png' },
  { name: 'Kesar Tea', img: '/images/kesar.png' },
  { name: 'Cardamom Tea', img: '/images/card.png' },
];


const headingVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const galleryVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1,  
    },
  },
};

const itemVariants = {
    hidden: { opacity: 0, y:-150 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };
  

const Section1 = () => {
  return (
    <div className="section1">
      <motion.h1
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        OUR POPULAR <span className="hindi">चाय</span>
      </motion.h1>

      <motion.div
        className="tea-gallery"
        variants={galleryVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {teas.map((tea, index) => (
          <motion.div className="tea-item" key={index} variants={itemVariants}>
            <img src={tea.img} alt={tea.name} />
            <h2>{tea.name}</h2>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Section1;
