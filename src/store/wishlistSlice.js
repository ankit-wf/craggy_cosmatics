import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    addWish: [],
}

const WishListSlice = createSlice({
    name: "wishListdata",
    initialState: initialState,
    reducers: {
        addtoWish(state, action) {
            state.addWish = action.payload.wishdata
            console.log("gggggg", state.addWish)
        },
        remove(state, action) {
            state.addWish.splice(action.payload.index, 1);
        },

    }
})
export const addWishActions = WishListSlice.actions;
export default WishListSlice.reducer;