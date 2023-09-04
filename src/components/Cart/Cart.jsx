import React, { useRef } from 'react'
import "./Cart.scss"
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { motion } from 'framer-motion';
import { staggerContainer } from '../../utils/motion';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';

const Cart = ({setOpenCart,openCart}) => {

  const products = useSelector(state=>state.cart.products)
  const dispatch=useDispatch()

  const totalPrice =()=>{
    let total =0;
    products.forEach(item=>total+= item.price)
    return total.toFixed(2)
}
  const cartRef = useRef();
 
  return (
    <motion.div ref={cartRef}
    className={`cart ${openCart ? 'open' : ''}`}
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    animate={openCart ? 'show' : 'hidden'} 
    viewport={{once:false,amount:0.25}}
    >
        <div className='cart-icon'>
        <CloseIcon onClick={()=> setOpenCart(false)} 
        style={{cursor:'pointer',width:'50px',height:'50px'}} />
        </div>
        
        <div className='cart-h3'>
              <h3>Your Games in Cart</h3>
        </div>
        <motion.div className='cart-item-container'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}>
            {products.length < 1 &&(
              <div className='empty-cart'>
                <h3>Your shopping bag is empty</h3>
                <Link to="/discover" className='empty-div'>
                  <button type="button" 
                  className="empty-button">
                    Continue Shopping
                  </button>
                </Link>
              </div>           
            )}

        </motion.div >
        <div className='cart-item-container-2'>
        {products.length >=1 && products.map((item,index)=> (
            <motion.div
            initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
            className='cart-item' key={item.id}>
              <img src={item?.img} 
              className="cart-img"/>
              <div className='cart-desc'>
                  <div className='cart-name'>
                    <span>{item?.name}</span>
                    <span>${item?.price}.00</span>
                  </div>       
              </div>
              <div className='cart-button'>
               <button type='button'
                  className=''
                  onClick={()=>dispatch(removeItem(item.id))}>
                   <DeleteOutlineIcon />
                  </button>
               </div>
            </motion.div> 
          ))}
        </div>
        <div className='cart-total'>
          <span>Total Price: {totalPrice()}</span> 
          <button>Checkout</button>
        </div>
    </motion.div >
  )
}

export default Cart