import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    cart: [],
    name: ''
}
// console.log("carttt", )
const dataSlice = createSlice({
    name: "cartData",
    initialState: initialState,
    reducers: {
        price(state, action) {
            state.cart = action.payload.cart
            //   console.log('state.cart', state.cart) 
        },
        quantity(state, action) {
            state.cart[action.payload.id].quantity = action.payload.quantity
            // console.log('state.cart', state.cart)storeData
            // const {id} = payload;
            // const doesItemExist = state.find((item) => item.id === id);
            // if(doesItemExist){
            //     return state.map((item) => {
            //     if(item.id === id){
            //     return {
            //         ...item,
            //         quantity: item.quantity + 1
            //     } 
            //     }
            //     return item;
            //     })                    
            // } else {
            //     state.push({
            //     ...payload, quantity: 1
            //     })
            // }
        },
        remove(state, action) {
            state.cart.splice(action.payload.index, 1);
        },
        name(state, action) {
            state.name = action.payload.name
        },
    }
})
export const submitActions = dataSlice.actions;
export default dataSlice.reducer;