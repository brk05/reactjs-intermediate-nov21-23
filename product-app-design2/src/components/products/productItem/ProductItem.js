
import {useContext} from 'react'
import classes from './ProductItem.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import StarRating from '../rating/StarRating'
import ProductItemForm from './ProductItemForm'
import CartContext from '../../../store/cart-context'


const ProductItem =(props) =>{

    const cartCtx = useContext(CartContext)
    const addToCartHandler = amount => {
        cartCtx.addItem({
            productId: props.productId,
            productName: props.productName,
            price: props.price,
            amount: amount
        })

    }

    return (
//         <li className={classes.product}>
//             <div>
// <h3>{props.productName}</h3>
// <div className={classes.description}>{props.description}</div>
// <div className={classes.price}>{props.price}</div>
//             </div>

//         </li>

<tr>

<td>
{props.show ?
<img src={props.imageUrl} title={props.productName}
className='avatar' style={{width:50,margin:2}}
/>  : null}

</td>
<td>

{ props.productName }
</td>
<td>{ props.productCode }</td>
<td>{ props.releaseDate }</td>
<td>{ props.price }</td>

<td>
<StarRating rating={props.starRating}/>
</td>

<td>
    <ProductItemForm onAddToCart={addToCartHandler}/>
</td>
</tr>




    )

}

export default ProductItem