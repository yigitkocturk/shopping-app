import './App.css';
import Header from "./components/Header"
import Product from "./components/Product"
import { useState, useEffect } from 'react';
import products from "./products.json"
import Cart from './components/Cart';

function App() {

  // eslint-disable-next-line no-unused-vars
  const [money, setMoney] = useState(1000000)
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const resetCart = () => {
    setCart([])
  }

  useEffect(() => {
    setTotal(cart.reduce((acc, item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    }, 0))
  }, [cart])

  return (
    <>
      <Header total={total} money={money} />
      <div className='container products'>
        {products.map(product => (
          <Product total={total} money={money} key={product.id} cart={cart} setCart={setCart} product={product} />
        ))}
      </div>

      {total > 0 && (
        <Cart resetCart={resetCart} total={total} products={products} cart={cart} />
      )}


    </>
  );
}

export default App;
