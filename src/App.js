import './App.css';
import data from './data';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import Header from './components/Header'
import { useState, useEffect } from 'react';

function App() {
  const { products } = data
  const [cartItems, setCartItems] = useState([])
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    setQuantity(cartItems.reduce((pre, cur) => {
      return (
        pre + cur.qty
      )
    }, 0))
  }, [cartItems]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty > 1) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      )
    } else {
      setCartItems(
        cartItems.filter((x) => x.id !== exist.id)
      )
    }
  }

  return (
    <div className="App">
      <div className="wrapper">
        {/* {console.log(products)}
        {console.log(cartItems)} */}
        <Header quantity={quantity} />
        <div className="content">
          <div className="left">
            <Products
              products={products}
              onAdd={onAdd}
            />
          </div>
          <div className="right">
            <ShoppingCart
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
