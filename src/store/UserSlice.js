import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    user_data: {}
}
// console.log("hhhhh", user_data)

const UserSlice = createSlice({
    name: "userData",
    initialState: initialState,
    reducers: {
        login(state, action) {
            // console.log("actions11 :", action);
            state.user = action.payload.user;
        },

        loginform(state, action) {
            // console.log("actions22 :", action);
            state.isLoggedIn = action.payload.isLoggedIn;


        },
        userlogin(state, action) {
            state.user_data = action.payload.user_data;
            // console.log("gggggg", action.payload.user_data)
        }
    }

})
export const loginActions = UserSlice.actions;
export default UserSlice.reducer;