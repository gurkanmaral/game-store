import React, { useState } from 'react';
import "./Featured.scss";
import { motion } from "framer-motion";
import { tempData } from '../../utils/data';
import { staggerContainer,fadeIn } from '../../utils/motion';
import FeaturedCard from '../FeaturedCard/FeaturedCard';

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
    },
  },
};
export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};


  
export const TypingText = ({ title}) => (
  <motion.p
    variants={textContainer}
    className="typing-text"
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);



const Featured = () => {

    const [active, setActive] = useState(2);
    const filteredData = tempData.slice(0, 5);
  return (
    <div className='featured'>
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className='featured-1'
      >
         <TypingText title="FEATURED THIS SUMMER"  />
        <div className='featured-2'>
          {filteredData.map((featured, index) => (
            <FeaturedCard
              key={featured.id}
              featured={featured}
              index={index}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Featured;