import React, { useState,useEffect } from 'react'
import "./Upcoming.scss"
import { tempData } from '../../utils/data'
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn,zoomIn } from '../../utils/motion';
import DiscoverCard from '../../components/DiscoverCard/DiscoverCard';
import { Link, useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate()
    const [sortOption, setSortOption] = useState('');
    const [filteredData,setFilteredData] = useState([]);
    const filteredData1 = tempData.filter((item)=> item.upcoming)
    const [selectedGenre,setSelectedGenre] = useState('');
    useEffect(() => {
        let newData = [...filteredData1]; // Copy of tempData to manipulate
    
  
        // Apply filtering based on the sort option
        if (sortOption === 'priceLowToHigh') {
          newData.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'priceHighToLow') {
          newData.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'alphabetical') {
          newData.sort((a, b) => {
            const nameA = a.name || ''; // Handle undefined name
            const nameB = b.name || ''; // Handle undefined name
            return nameA.localeCompare(nameB);
          });
        }
       
  
        setFilteredData(newData);
      }, [sortOption]);

      useEffect(() => {
      
        if(selectedGenre === "all"){
          navigate("/discover")
        }
        else if(selectedGenre) {
          navigate(`/cats/${selectedGenre}`);
        }
      }, [selectedGenre, navigate]);

  return (

    <div className='popular'>
           <motion.div
       className='discover'
       variants={staggerContainer}
       initial="hidden"
       whileInView="show"
       viewport={{once:false,amount:0.25}}
       >
          <div className='discover-title'>
                 <TypingText title="Discover"  />            
                 <div className='gradient-073' />
                <div className='gradient-06' />
           <div className='discover-item-container'>
           <Link className='discover-item'  to="/popular"
                style={{color:'inherit',textDecoration:'none'}}>
                
                    <span>POPULAR</span>
                </Link>
                <Link className='discover-item'  to="/mostplayed"
                style={{color:'inherit',textDecoration:'none'}}>
                
                    <span>Most Played</span>
                </Link>
                <Link className='discover-item'  to="/toprated"
                style={{color:'inherit',textDecoration:'none'}}>
                
                    <span>Top Rated</span>
                </Link>
                <Link className='discover-item'  to="/upcoming"
                style={{color:'inherit',textDecoration:'none'}}>
                
                    <span>Upcoming</span>
                </Link>
                <Link className='discover-item'  to="/special"
                style={{color:'inherit',textDecoration:'none'}}>
                
                    <span>Special Offers</span>
                </Link>
           </div>
           <div className='line' />
           <div className='discover-sort'>
                <select  onChange={(e) => setSelectedGenre(e.target.value)}  >
                <option value="">Select Genre:</option>
                  <option value="action">Action</option>
                  <option value="fps">FPS</option>
                  <option value="rpg">RPG</option>
                  <option value="mmorpg">MMOPRG</option>
                  <option value="sport">Sport</option>
                  <option value="strategy">Strategy</option>
                  <option value="all">All</option>
                </select>
              </div>
              <div className='discover-sort'>
                  <select  onChange={(e) => setSortOption(e.target.value)} >
                    <option value="">Sort by:</option>
                    <option value="priceLowToHigh">Price: Low to High</option>
                    <option value="priceHighToLow">Price: High to Low</option>
                    <option value="alphabetical">Alphabetical</option>
                  </select>
              </div>
              </div>
              <div className='card-container'>
            <DiscoverCard filteredData={filteredData} />
        </div>  
       </motion.div>

    </div>
  )
}

export default Upcoming