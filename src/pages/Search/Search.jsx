import React from 'react'
import "./Search.scss"
import { Link, useParams } from 'react-router-dom';
import { tempData } from '../../utils/data';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn,zoomIn } from '../../utils/motion';

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



const Search = () => {

  const { searchTerm } = useParams();


  console.log(searchTerm)
  const matchingGames = tempData.filter(
    (game) =>
      game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.desc.toLowerCase().includes(searchTerm.toLowerCase())

  );

  const handleLinkClick = () => {
    // Scroll to the top of the window
    window.scrollTo(0, 0);
  };
  return (
    <motion.div className='search'
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0.25}}
    >
      <TypingText title={`Search results for :${searchTerm}`} />
      <div className="search-results">

        {matchingGames.map((game) => (
          <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ type: 'spring', damping: 16, stiffness: 200 }}
          className="game-card" key={game.id}>
            <Link to={`/details/${game.id}`}
            onClick={handleLinkClick}           
            >
             <img src={game.img} alt={game.name} />
            </Link>        
            <div className='reco-name'>
                            <span>{game.name}</span>
                          {game.discount ? 
                          <div className='reco-name-1'>
                              <span className='reco-name-2'><del>${game.price + 20}.00</del></span>
                              <span>{game.price}.00</span>
                          </div> : 
                           <div>
                             <span>${game.price}.00</span>
                           </div>}
                    </div>
            
          </motion.div>
        ))}
        {matchingGames.length === 0 && <p className='match'>No matching games found.</p>}
      </div>
    </motion.div>
  )
}

export default Search