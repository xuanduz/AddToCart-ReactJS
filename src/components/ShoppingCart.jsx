import React from 'react'
import './ShoppingCart.css'

export default function ShoppingCart(props) {
  const { cartItems, onAdd, onRemove } = props
  const itemsPrice = cartItems.reduce((pre, cur) => {
    return (pre + cur.price * cur.qty)
  }, 0).toFixed(2)
  const taxPrice = (itemsPrice * 0.05).toFixed(2)
  const shippingPrice = itemsPrice > 4000 ? 0 : itemsPrice * 0.01.toFixed(2)
  return (
    <div className='shopping-cart'>
      <h2>Cart Items</h2>
      <div className="shopping-cart-content">
        {console.log(cartItems)}
        {(cartItems && cartItems.length > 0) ?
          cartItems.map((item) => {
            return (
              <div key={item.id} className='item-result' >
                <p>{item.name}</p>
                <div className="plus-minus">
                  <span onClick={() => onAdd(item)}>+</span>
                  <span onClick={() => onRemove(item)}>-</span>
                </div>
                <div className="total">
                  {item.qty} x {item.price.toFixed(2)}
                </div>
              </div>
            )
          }) :
          <div>Cart is empty</div>
        }
        <hr />
        {cartItems && cartItems.length > 0 &&
          <div className="bill">
            <div className="row">
              <p>Items Price</p>
              <p>$ {itemsPrice}</p>
            </div>
            <div className="row">
              <p>Tax Price</p>
              <p>$ {taxPrice}</p>
            </div>
            <div className="row">
              <p>Shipping Price</p>
              <p>$ {shippingPrice}</p>
            </div>
            <div className="row">
              <p>Total</p>
              <p>$ {(parseFloat(itemsPrice) +
                parseFloat(taxPrice) +
                parseFloat(shippingPrice)).
                toFixed(2)}</p>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
