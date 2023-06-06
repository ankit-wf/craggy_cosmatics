import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    review: [],
}
const ReviewSlice = createSlice({
    name: "reviewData",
    initialState: initialState,
    reducers: {
        reviews(state, action) {
            state.review = action.payload.review
        }
    }
})
export const reviewActions = ReviewSlice.actions;
export default ReviewSlice.reducer;