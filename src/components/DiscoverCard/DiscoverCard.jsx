import React from 'react'
import './DiscoverCard.scss'
import { tempData } from '../../utils/data'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { fadeIn } from '../../utils/motion'
import {Link} from "react-router-dom"

export const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    };
  };

  const ProjectCard = ({item,index})=>{
      return (
        
        <motion.div variants={fadeIn("up","spring",1 * 0.5, 0.75)} key={item.id}>
          <Tilt
          options={{
            max:45,
            scale:1.05,
            speed:450
          }}
          className="tilt-card">
            <div>
              <Link to={`/details/${item.id}`}>
              <img src={item.img} alt="" className='tilt-img' />
              </Link>              
            </div>
            {item.discount ? <div className='tilt-info'>
              <span>{item.name}</span>
             <div className='card-discount'> 
              <span className='card-old'><del>${item.price + 20}</del></span>
              <span>${item.price}</span>
              </div>
             

            </div> : <div className='tilt-info'>
              <span>{item.name}</span>
              <span>${item.price}</span>

            </div> }
            
            
          </Tilt>
        </motion.div>
      )
  }
  

const DiscoverCard = ({filteredData}) => {


  return (
    <div className='d-container'>
        <div className='d-card-container'>
            {filteredData?.map((item,index)=>(
                    <ProjectCard 
                    key={item.id}
                    item={item}
                    index={index}
                    />
                    ))}    
            </div>

    </div>
  )
}

export default DiscoverCard