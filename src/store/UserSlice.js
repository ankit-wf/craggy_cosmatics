import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    user_data: {},
    user_address: false
}
const UserSlice = createSlice({
    name: "userData",
    initialState: initialState,
    reducers: {
        login(state, action) {
            state.user = action.payload.user;
        },
        loginform(state, action) {
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