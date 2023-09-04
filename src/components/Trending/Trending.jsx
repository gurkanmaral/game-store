import React from 'react'
import "./Trending.scss"
import { tempData } from '../../utils/data'
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn,zoomIn } from '../../utils/motion';
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


const Trending = () => {

    const data = tempData.slice(0,5)


    const handleLinkClick = () => {
      // Scroll to the top of the window
      window.scrollTo(0, 0);
    };

  return (
    <div className=''>
       <motion.div className='trending'
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once:false,amount:0.25}}>
            <div className='text'>
                        <TypingText title="POPULAR"  />
            </div>
        <motion.div
        variants={fadeIn('up','tween',0.3,1)}
        className='trending-card-container'
        >   
            {data.map((item)=>(
                <div key={item.id} className='trending-card'>
                    <div className='trending-img-div'>
                      <Link to={`/details/${item.id}`}
                      onClick={handleLinkClick}
                      >
                        <img src={item.img} alt="" className='trending-img' />
                      </Link>              
                    </div>
                    <div className='trending-info'>
                        <span>{item.name}</span>
                    </div>
                </div>
            ))}
        </motion.div>
              <motion.div
                variants={zoomIn(0.1,0.2)}
                className='trending-see'
                >
                  <Link to="/popular"
                  onClick={handleLinkClick}
                  style={{color:'inherit',textDecoration:'none'}}>
                  See More
                  </Link>
                  
            </motion.div>
        

       </motion.div>




    </div>
  )
}

export default Trending