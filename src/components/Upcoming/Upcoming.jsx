import React from 'react'
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../utils/motion';
import { tempData } from '../../utils/data';
import "./Upcoming.scss"
import {Link} from "react-router-dom"
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
  
const Upcoming = () => {

    const filteredData = tempData.slice(0, 3);

  return (
    <div className='upcomingg'>
        <motion.div
        variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0.25}}
    className='upcoming'
        >
        <TypingText title="COMING SOON"  />
            <motion.div
            variants={fadeIn('up','tween',0.3,1)}
            className='upcoming-1'
            >
            {filteredData.map((item)=>(
                <Link key={item.id} className='upcoming-card'>
                    <img src={item.img} alt="" />
                    <span>{item.name}</span>
                </Link>
            ))}

            </motion.div>
         </motion.div>
    </div>
  )
}

export default Upcoming