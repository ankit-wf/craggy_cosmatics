import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    user: [
        {
            userName: '',
            password: '',
        },
    ]
}

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
        }
    }

})
export const loginActions = UserSlice.actions;
export default UserSlice.reducer;