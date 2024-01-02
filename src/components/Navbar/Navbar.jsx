import React, { useState } from 'react'
import "./Navbar.scss"
import { Link, useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import Cart from "../Cart/Cart"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
const Navbar = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate()
  const [openCart,setOpenCart] = useState(false)
  const products = useSelector((state)=> state.cart.products)

  const handleSearch = (e)=>{
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`)
      setSearchTerm("")
    }
    
  }


  return (
    <div className='navbar-outer'>
    <div className='navbar-container'>
        <div className='navbar-name'>
            <Link to="/" className='link'>
             <p className='game-store'>GameStore</p>
            </Link>
           
        </div>
        <div className='navbar-input-1'>
          <form className='navbar-input' >
            <button onClick={handleSearch} className='navbar-button' >
                  <SearchIcon className='icon' 
                style={{cursor:'pointer'}}
                />          
            </button>
          
            <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search games..."
      />
      
          </form>
             
           
        </div>
        <div className='navbar-sign'>
          <Link to="/" style={{textDecoration:'none',color:'inherit'}}>
            <span className='navbar-home'>Home</span>
          </Link>        
          <Link to="/discover" className='navbar-home' style={{textDecoration:'none',color:'inherit'}}>
            <span>Discover</span>
          </Link>
         
           <p className='sign-in'>Sign In</p>
        </div>
        
     <div className='open-cart'>
        <div className='open-cart-1'>
          <ShoppingCartIcon style={{cursor:'pointer'}}
            onClick={()=>setOpenCart((prev)=>!prev)}
            />
          <div className='open-cart-number'
          onClick={()=>setOpenCart((prev)=>!prev)}
          style={{cursor:'pointer'}}>
              <span>{products.length}</span>
          </div>
        </div>
         
          
     </div>
    </div>
    {openCart && <Cart setOpenCart={setOpenCart} openCart={openCart} />}
    </div>
  )
}

export default Navbar