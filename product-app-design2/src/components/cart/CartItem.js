import classes from './CartItem.css'

const CartItem  = (props) =>{
    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>{props.productName}</h2>
                <div className={classes.summary}>
                    <span>
                        {price}
                    </span>
                    <span>
                       x {props.amount}
                    </span>

                </div>
            </div>
            <div className={classes.action}>
             <button onClick={props.onAdd}>+</button>
             <button>-</button>
            </div>

        </li>

    )
}
export default CartItem