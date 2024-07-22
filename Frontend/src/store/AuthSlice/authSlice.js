import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
        firstName: "John",
        lastName: "Doe",
        userName: "johndoe",
        email: "johndoe@example.com"
    },
    isAuthenticated: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
