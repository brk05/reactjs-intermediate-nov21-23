import { cartActions } from "./cart-slice";
import {uiActions} from './ui-slice'
export const fetchCartData = () =>{
    return async (dispatch) => {

        const fetchData = async () => {
        const response = await fetch('http://localhost:4300/items')
        if(!response.ok){
            throw new Error('Could Not Fetch Cart data')
        }
        const data = await response.json()
        return data
    }
    try{
        const cartData = await fetchData()
        dispatch(cartActions.replaceCart({
            items: cartData.items || [],
            totalQuantity: cartData.totalQuantity
        }))
    }catch(error){
    dispatch(
        uiActions.showNotification({
            status: 'error',
            title: 'Error',
            message:'Fetching Cart Data Failed'
        })
    )
    }
    }
}

export const sendCartData = (cart) =>{
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending',
                message:'Sending Cart Data Failed'
            })
        )
    
    const sendRequest = async () =>{
        const response = await fetch('http://localhost:4300/items',{
            method:'POST',
            body: JSON.stringify({
                items: cart.items,
                totalQuantity: cart.totalQuantity
            })
        })
        if(!response.ok){
            throw new Error('Sending Cart Data Failed')
        }
        
    }
    
    try{
        await sendRequest()
        dispatch(
            uiActions.showNotification({
                status: 'success',
                title: 'Success',
                message:'Sent Cart Data Successfully'
            })
        )
    }catch(error){
        dispatch(
            uiActions.showNotification({
                status: 'error',
                title: 'Error',
                message:'Fetching Cart Data Failed'
            })
        )
    }
}
}