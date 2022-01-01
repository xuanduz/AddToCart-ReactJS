import './Products.css'
import React from 'react'

export default function Products(props) {
  const { products, onAdd } = props

  return (
    <div className='products'>
      {products.map(product => {
        return (
          <div className="product" key={product.id}>
            <img className='image' src={product.image} alt={product.name} />
            <div className="text">
              <h3>{product.name}</h3>

              <p className="price">$ {product.price}</p>
            </div>
            <div className="button" onClick={() => { onAdd(product) }}>
              <h4>Add To Cart</h4>
            </div>
          </div>

        )
      })}
    </div>
  )
}
