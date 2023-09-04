import React from 'react'
import "./Discount.scss"
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn,zoomIn } from '../../utils/motion';
import { tempData } from '../../utils/data';
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


const Discount = () => {


    const data = tempData.filter((item)=> item.discount).slice(0,4)
    const handleLinkClick = () => {
      // Scroll to the top of the window
      window.scrollTo(0, 0);
    };
  

  return (
    <div className=''>
        <motion.div
           variants={staggerContainer}
           initial="hidden"
           whileInView="show"
           viewport={{once:false,amount:0.25}}
          className='discount'
        >
             <div className='text'>
                 <TypingText title="SPECIAL OFFERS"  />
            </div>
       
        <motion.div
            variants={fadeIn('up','tween',0.3,1)}
            className='upcoming-1'
            >
            {data.map((item)=>(
                <div key={item.id} className='upcoming-card'>
                  <Link to={`/details/${item.id}`}  onClick={handleLinkClick}>
                  <img src={item.img} alt="" className='upcoming-img' />
                  </Link>               
                    <div className='upcoming-info'>
                        <span className='upcoming-name'>{item.name}</span>
                        <div className='upcoming-span'>
                            <span className='upcoming-d'>$<del>{item.price + 20}</del></span>
                            <span className='upcoming-n'>${item.price}</span>
                        </div>
                    </div>
                    <div className='percentage'>
                    <span className=''>%<span className='percentage-1'>{((20 / (item.price + 20)) * 100).toFixed(0)}</span></span>
                    </div>
                </div>
            ))}

            </motion.div>
                <motion.div
                    variants={zoomIn(0.1,0.2)}
                    className='see-more'
                >
                  <Link to="/special" 
                  onClick={handleLinkClick}
                  style={{color:"inherit",textDecoration:'none'}}>
                   See More
                  </Link>
                   
                </motion.div>
        </motion.div>

      
    </div>
  )
}

export default Discount