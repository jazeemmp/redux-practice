import React from 'react'
import './CartButtons.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../../Redux/cart'
const AfterCart = ({cartCount,productId}) => {
  const dispatch = useDispatch()
  return (
   <div className="after-cart">
    <button className='cart-counter-button' onClick={()=>dispatch(decrement(productId))}>-</button>
    <div className="count">{cartCount}</div>
    <button className='cart-counter-button' onClick={()=>dispatch(increment(productId))}>+</button>
   </div>
  )
}

export default AfterCart
