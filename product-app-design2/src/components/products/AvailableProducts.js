//import products from '../../data/products'
import ProductItem from './productItem/ProductItem'
import classes from './AvailableProducts.css'
import { useEffect, useState } from 'react'
const AvailableProducts =() => {

 const [show, setShow] = useState(false)

 const [products, setProducts] = useState([])
 useEffect(() => {
    const fetchProducts = async () =>{
        const response = await fetch('http://localhost:4200/products')
        const responseData = await response.json()
        // const loadedProducts = []
        // for (const key in responseData){
        //     loadedProducts.push({
        //         productId: responseData[key].productId,
        //         productName: responseData[key].productName,
        //         description: responseData[key].description,
        //         productCode: responseData[key].productCode,
        //         starRating: responseData[key].starRating,
        //         price: responseData[key].price,
        //         imageUrl: responseData[key].imageUrl
        //     })
        // }
        setProducts(responseData)
       }
       fetchProducts()
 },[])

//  const searchByProductName =(e)=>{

//   const searchKey = e.target.value
//   setFilterBy(products.filter(p=> p.productName.indexOf(searchKey)!= -1))
//  }


    const clickHandler = () => {
    setShow(!show)
    }

    const productsList = products.map( product => (

       

        <ProductItem key={product.productId} 
        productId={product.productId}
        productName={product.productName}
        price={product.price}
        productCode={product.productCode}
        starRating={product.starRating}
        releaseDate={product.releaseDate}
        description={product.description}
        imageUrl={product.imageUrl}
        show={show}
        />

    ))

    return (
        
          <div className="panel-group">
<div className='panel panel-primary'>
<div className="panel panel-header">
New Products List
</div>


<div className='panel-body'>
<div className='row'>
<div className='col-md-2'>Filter by:</div>
<div className='col-md-4'>
<input type='text' />

</div>
</div>
<div className='row'>
<div className='col-md-6'>

</div>
</div>
<div className='table-responsive'>
<table className='table'>
<thead>
<tr>
<th>
<button className='btn btn-primary'  onClick={clickHandler}>
{show ? 'Hide ':'Show ' }Image
</button>
</th>
<th>Product</th>
<th>Code</th>
<th>Available</th>
<th>Price</th>
<th>5 Star Rating</th>
</tr>
</thead>
<tbody>
                {productsList}
            
                </tbody>

</table>
</div>
</div>
</div>
</div>
    )
}


export default AvailableProducts
