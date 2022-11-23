

//import classes from './ProductItem.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import StarRating from '../rating/StarRating'

import { cartActions } from '../../../store/cart-slice'
import { useDispatch } from 'react-redux'

const ProductItem =(props) =>{

   const dispatch = useDispatch()
   const {productId,productName,price,description}=props

   const addToCartHandler = () =>{
dispatch(
    cartActions.addItemToCart({
        productId,productName,price
    })
)
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
   <button onClick={addToCartHandler}>Add To Cart</button>
</td>
</tr>




    )

}

export default ProductItem