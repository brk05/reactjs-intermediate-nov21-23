
import {useEffect, Fragment} from 'react'

import './App.css';

import Products from './components/products/Products';

import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout';


import {sendCartData,fetchCartData} from './store/cart-actions'
import {useSelector,useDispatch} from 'react-redux'
function App() {

  const dispatch = useDispatch()
  const showCart = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)
  const isInitial = false
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
 

 <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
 </Fragment>

  );
}

export default App;
