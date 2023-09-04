import React from 'react';
import "./FeaturedCard.scss";
import { fadeIn } from '../../utils/motion';
import { motion } from 'framer-motion';
import CallMadeIcon from '@mui/icons-material/CallMade';
import { Link } from 'react-router-dom';
const FeaturedCard = ({ index, featured, active, setActive }) => {
  console.log(active);


  const handleLinkClick = () => {
    // Scroll to the top of the window
    window.scrollTo(0, 0);
  };
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      onClick={() => setActive(featured.id)} 
      className={`featured-card-container ${active === featured.id ? 'featured-active' : 'featured-notActive'}`}
    >
      <img src={featured.img} alt="" className='featured-img' />
      {active !== featured.id ? (
        <div className='featured-card-1'>
             <h3 >
                {featured.name}
            </h3>
        </div>
     
    ) : (
      <div className="featured-card-2">
        <div className="featured-card-3" >
          <Link to={`/details/${featured.id}`} 
          onClick={handleLinkClick}
          style={{color:'inherit',textDecoration:'none'}}>
            <CallMadeIcon  className='icon' />
          </Link>
            
        </div>
        <div className='featured-card-4'>
          <h2 className="featured-name">
            {featured.name}
          </h2>
        </div>
       
      </div>
    )}
    </motion.div>
  );
};

export default FeaturedCard;