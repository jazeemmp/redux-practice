import React from 'react'
import { useSelector } from 'react-redux'
import AfterCart from './AfterCart'
import BeforeCart from './BeforeCart'

const CartButtons = ({product}) => {
  const {cartList } = useSelector((state)=> state.cart)
  const cartCount = cartList.find((item)=> item.id === product?.id)?.count
  return (
    <>
     {cartCount >0 ? <AfterCart cartCount={cartCount} product={product}/> : <BeforeCart product={product}/>}
    </>
  )
}

export default CartButtons
