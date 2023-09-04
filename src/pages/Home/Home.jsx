import React from 'react'
import "./Home.scss"
import Featured from '../../components/Featured/Featured'
import Upcoming from '../../components/Upcoming/Upcoming'
import Popular from '../../components/Popular/Popular'
import Discount from '../../components/Discount/Discount'
import Trending from '../../components/Trending/Trending'
import Hero from '../../components/Hero/Hero'


const Home = () => {
  return (
    <div className='home-container'>
        <div className='gradient-04' />      
        <div className='featured-container'>          
            <div className='gradient-03' />           
                <Featured />            
        </div>
        <div className='trending-container'>
            <div className='gradient-04' />
            <Trending />
        </div>
        <div className='discount-container'>
            <div className='gradient-03' />   
            <Discount />
        </div>
        <div className='popular-container'>
          <div className='gradient-05' />   
            <Popular />
        </div>
       
        <div className='upcoming-container'>
          <Upcoming />
        </div>
       
       
        
    </div>
  )
}

export default Home