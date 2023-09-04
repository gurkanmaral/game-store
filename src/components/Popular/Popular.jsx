import React from 'react'
import './Popular.scss'
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../utils/motion';
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


const Popular = () => {

 
  const data = tempData.slice(0,5)

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
      className='popular'>
        <div className='popular-item'>
            <div className='popular-h3'>
            <TypingText title="TOP SELLERS"  />
            </div>
            <motion.div className='popular-card-container'
            variants={fadeIn('right','tween',0.3,1)}>
              {data.map((item)=>(
                    <Link to={`/details/${item.id}`}  onClick={handleLinkClick}
                    key={item.id} className='popular-card'>
                      <img src={item.img} alt="" className='popular-img' />
                     <div className='popular-info'>
                       <span>{item.name}</span>
                        {item.discount ?  <div className='span'>
                        <span className='span-1'><del>${item.price + 20}</del></span>
                          <span>${item.price}</span>
                          <span className='span-3'>%{((20 / (item.price + 20)) * 100).toFixed(0)} </span>
                        </div>
                        : <div className='popular-info'> 
                              <span>${item.price}</span>
                          </div>}
                       
                      <div>            
                      </div>
                   </div>
                    </Link>
                  ))}
            </motion.div>
        </div>
        <div className='popular-item'>
            <div className='popular-h3'>
            <TypingText title="MOST PLAYED"  />
            </div>
            <motion.div className='popular-card-container'
            variants={fadeIn('right','tween',0.3,1)}>
              {data.map((item)=>(
                    <Link to={`/details/${item.id}`}
                    onClick={handleLinkClick}
                    key={item.id} className='popular-card'>
                      <img src={item.img} alt="" className='popular-img' />
                      <div className='popular-info'>
                     <span>{item.name}</span>
                     {item.discount ?  <div className='span'>
                        <span className='span-1'><del>${item.price + 20}</del></span>
                          <span>${item.price}</span>
                          <span className='span-3'>%{((20 / (item.price + 20)) * 100).toFixed(0)} </span>
                        </div>
                        : <div className='popular-info'> 
                              <span>${item.price}</span>
                          </div>}
                     </div>
                    </Link>
                  ))}
            </motion.div>
        </div>
        <div className='popular-item'>
          <div className='popular-h3'>
           <TypingText title="TOP RATED"  />
          </div>
          <motion.div className='popular-card-container'
           variants={fadeIn('right','tween',0.3,1)}
          >
              {data.map((item)=>(
                    <Link to={`/details/${item.id}`} onClick={handleLinkClick}
                     key={item.id} className='popular-card'>
                      <img src={item.img} alt="" className='popular-img' />
                      <div className='popular-info'>
                        <span>{item.name}</span>
                        {item.discount ?  <div className='span'>
                        <span className='span-1'><del>${item.price + 20}</del></span>
                          <span>${item.price}</span>
                          <span className='span-3'>%{((20 / (item.price + 20)) * 100).toFixed(0)} </span>
                        </div>
                        : <div className='popular-info'> 
                              <span>${item.price}</span>
                          </div>}
                     </div>
                    </Link>
                  ))}
            </motion.div>   
        </div>
      </motion.div>
    </div>
  )
}

export default Popular