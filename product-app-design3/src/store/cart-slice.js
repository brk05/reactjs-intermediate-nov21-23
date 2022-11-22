import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items:[],
        totalQuantity: 0,
        changed: false
    },
    reducers:{
        replaceCart(state,action){
            state.totalQuantity = action.payload.totalQuantity
            state.items = action.payload.items
        },
        addItemToCart(state,action){
            const newItem = action.payload
           const existingItem = 
        state.items.find(item => item.productId === newItem.productId )
       state.totalQuantity++
       state.changed=true
        let updatedItems
        if(!existingItem){
          
            state.items.push({
                productId: newItem.productId,
                price: newItem.price,
                quantity: 1,
                totalPrice: newItem.price,
                productName: newItem.productName
            })
        }else{
            existingItem.quantity++
            existingItem.totalPrice= existingItem.totalPrice+newItem.price
        }
        }

    }

})
export const cartActions = cartSlice.actions
export default cartSlice