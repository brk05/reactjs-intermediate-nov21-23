import React, {useContext, useState} from 'react'
import CartItem from './CartItem';
import Checkout from './Checkout';
import CartContext from '../../store/cart-context'
import Modal from '../ui/Modal'
import classes from './Cart.module.css'

const Cart = (props) =>{
    const [isCheckout,setIsCheckout] = useState(false)
    const [isSubmitting,setIsSubmitting] = useState(false)
    const [didSubmit,setDidSubmit] = useState(false)
    const cartCtx = useContext(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0
    const cartItemAddHandler = item =>{
        cartCtx.addItem(item)
    }
    const orderHandler = () =>{
        setIsCheckout(true)
    }
    const submitOrderHandler = async (userData) =>{
        await fetch('http://localhost:4300/orders',{
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        })
        setIsSubmitting(false)
        setDidSubmit(true)
    }

    const cartItems =(
        <ul className={classes['cart-item']}>

            {
                cartCtx.items.map(item =>
                    <CartItem
                    key={item.productId}
                    productName = {item.productName}
                    price ={item.price}
                    amount={item.amount}
                    onAdd={()=> cartItemAddHandler(item)}
                    
                    />
                    )
            }

        </ul>
    )

    const modalActions = (
        <div className={classes.actions}>
          <button className={classes['button-alt']} onClick={props.onClose}>
            Close
          </button>
          {hasItems && (
            <button className={classes.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      );
    
      const cartModalContent = (
        <React.Fragment>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          {isCheckout && (
            <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
          )}
          {!isCheckout && modalActions}
        </React.Fragment>
      );
    
      const isSubmittingModalContent = <p>Sending order data...</p>;
    
      const didSubmitModalContent = (
        <React.Fragment>
          <p>Successfully sent the order!</p>
          <div className={classes.actions}>
          <button className={classes.button} onClick={props.onClose}>
            Close
          </button>
        </div>
        </React.Fragment>
      );
    
      return (
        <Modal onClose={props.onClose}>
          {!isSubmitting && !didSubmit && cartModalContent}
          {isSubmitting && isSubmittingModalContent}
          {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
      );
    };
export default Cart
