import React from 'react'
import './CartButtons.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../../Redux/cart'
const AfterCart = ({cartCount}) => {
  const dispatch = useDispatch()
  return (
   <div className="after-cart">
    <button className='cart-counter-button' onClick={()=>dispatch(decrement())}>-</button>
    <div className="count">{cartCount}</div>
    <button className='cart-counter-button' onClick={()=>dispatch(increment())}>+</button>
   </div>
  )
}

export default AfterCart
