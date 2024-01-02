import React, { useEffect, useState } from 'react'
import "./Details.scss"
import {useParams} from "react-router-dom"
import {tempData} from "../../utils/data"
import {Link} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartReducer';

const Details = () => {

  const [hovered,setHovered] = useState(false)
  const {id} = useParams()
  const [expanded, setExpanded] = useState(false);
  
  const [selectedImage,setSelectedImage] = useState(tempData[id].img)
  const dispatch = useDispatch()


 
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    // Scroll to the top of the window
   
  window.scroll(0,0)
   
  };
  useEffect(()=>{
    setSelectedImage(tempData[id].img)
  },[id])

 
  return (
    <div className='details'>
      <div className='gradient-05' />   
      <div className='details-up'>
      <div className='details-left'>
          <div className='details-name'> 
            <span>{tempData[id].name}</span>
            <span className='year'>({tempData[id].year})</span>
          </div>
          <div className='details-img'>   
              <img src={selectedImage} alt=""  className='details-img-1' />
          </div>
          <div className='other-images'>
          <img src={tempData[id].img} alt="" onClick={() => setSelectedImage(tempData[id].img)} />
              <img src={tempData[id].img2} alt="" onClick={() => setSelectedImage(tempData[id].img2)}  />
              <img src={tempData[id].img3} alt=""  onClick={() => setSelectedImage(tempData[id].img3)}/>
              <img src={tempData[id].img4} alt=""  onClick={() => setSelectedImage(tempData[id].img4)}/>
              
          </div>
      </div>
      <div className='details-right'>
        <div className='text-container'>
            <div className={`description-text ${expanded ? 'expanded' : ''}`}>
                  <p>{tempData[id].desc}</p>           
          </div>
          <div className='button-container'>
          {tempData[id].desc.length > 100 && (
                <span className="see-more-button" onClick={toggleExpand}>
                  {expanded ? 'See less' : 'See more'}
                </span>
          )}
          </div>
        </div>
         
          <div className='details-genre'>
              <span>Genres: {tempData[id].genre}</span>
              <div className='details-metascore'>
                  <span>Metascore: <span className='metascore'>{tempData[id].metascore}</span></span>
              </div>
          </div>
          <div className='add-to-cart'>
              <div className='buy' onClick={()=>dispatch(addToCart({
              id:tempData[id].id,
              title:tempData[id].name,
              price:tempData[id].price,
              img:tempData[id].img,
          
        }))}>
                  <span>Add to Cart</span>
              </div>  
              <div className='wishlist'>
                Add to Wishlist
              </div>
          </div>
      </div>
      </div>
      <div className='details-bottom'>
      
          <div className='recommended'>
            <h3>Recommended Games</h3>
          </div>
          <div className='recommended-card'>
         
              {tempData.slice(0,5).map((item)=>(
                  <div key={item.id} className='reco-card'>
                    <Link to={`/details/${item.id}`}
                    onClick={handleLinkClick}           
                    >
                      <img src={item.img} alt="" />
                    </Link>
                    <div className='reco-name'>
                            <span>{item.name}</span>
                    </div>
                  </div>
              ))}
          </div>
      </div>

    </div>
  )
}

export default Details