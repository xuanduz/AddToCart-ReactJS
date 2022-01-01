import React from 'react'
import './Header.css'

export default function Header(props) {
  const { quantity } = props
  return (
    <div className='header'>
      <h1 className='title'>Small Shopping Cart</h1>
      <div className="cart">
        <p>Cart</p>
        <span className="quantity">{quantity}</span>
        <p>Sign In</p>
      </div>
    </div>
  )
}
