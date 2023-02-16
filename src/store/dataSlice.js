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
            // console.log("actionsss", action.payload)
            state.cart = action.payload.cart
            //   console.log('state.cart', state.cart) 
        },
        quantity(state, action) {
            // storeData
            state.cart[action.payload.itemId].itemQuantity = action.payload.itemQuantity
            // console.log('state.cart', state.cart)storeData
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