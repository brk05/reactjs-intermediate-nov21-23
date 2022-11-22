import React, {useContext, useState} from 'react'

import CartContext from '../../store/cart-context'

const Cart = (props) =>{
    const [isCheckout,setIsCheckout] = useState(false)
    const [isSubmitting,setIsSubmitting] = useState(false)
    const [didSubmit,setDidSubmit] = useState(false)
    const cartCtx = useContext(CartContext)
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
                use: userData,
                orderedItems: cartCtx.items
            })
        })
        setIsSubmitting(false)
        setDidSubmit(true)
    }

    const cartItems =(
        <ul className={classess['cart-item']}>

            {
                cartCtx.items.map(item =>
                    <CartItem
                    key={item.productId}
                    productName = {item.productName}
                    price ={item.price}
                    amout={item.amount}
                    onAdd={()=> cartItemAddHandler(item)}
                    
                    />
                    )
            }

        </ul>
    )

    const modalActions = (
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>
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

