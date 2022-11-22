
import {useEffect, Fragment} from 'react'
import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Products from './components/products/Products';
import CartProvider from './store/cartProvider'
import Cart from './components/cart/Cart'
import Header from './components/Layout/Header'


import {sendCartData,fetchCartData} from './store/cart-actions'
import {useSelector,useDispatch} from 'react-redux'
function App() {

  const dispatch = useDispatch()
  const showCart = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)
  
  useEffect(() =>{
    dispatch(fetchCartData)
  },[dispatch])
  
  useEffect(() =>{
   if(isInitial){
    isInitial = false
    return
   }
   if(cart.changed){
    dispatch(sendCartData(cart))
   }
  },[cart,dispatch])

 
  return (
 <Fragment>
 

  <Header />
    <main>
      {showCart && <Cart/>}
      <Products/>
    </main>
 </Fragment>

  );
}

export default App;
