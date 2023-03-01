import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    user_data: {},
    userAddress: [],
    otp: ''
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
        },
        useraddress(state, action) {
            state.userAddress = action.payload.userAddress;
            // console.log("gggggg", action.payload.userAddress)
        },
        remove(state, action) {
            state.userAddress.splice(action.payload.index, 1);
        },
        otp(state, action) {
            state.otp = action.payload.otp;
            // console.log('action', action)
        }
    }

})
export const loginActions = UserSlice.actions;
export default UserSlice.reducer;