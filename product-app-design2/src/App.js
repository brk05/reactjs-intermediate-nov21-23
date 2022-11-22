
import * as React from 'react'
import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Products from './components/products/Products';
import CartProvider from './store/cartProvider'
import Cart from './components/cart/Cart'
import Header from './components/Layout/Header'
function App() {
  const [cartIsShown,setCartIsShown] = useState(false)
  const showCartHandler = () =>{
    setCartIsShown(true)
  }
  const hideCartHandler = () =>{
    setCartIsShown(false)
  }
 
  return (
 <CartProvider>
  {cartIsShown && <Cart onClose={hideCartHandler}/>}

  <Header onShowCart={showCartHandler}/>
    <main>
      <Products/>
    </main>
 
  </CartProvider>
  );
}

export default App;
