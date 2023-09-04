import React from 'react'
import "./Hero.scss"
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../utils/motion';
import { tempData } from '../../utils/data';





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

const Hero = () => {

  return (
    <div className=''>
       <motion.div className='hero'
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once:false,amount:0.25}}
       >
            
       </motion.div>
    </div>
  ) 
}

export default Hero