import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/users/userSlice";
import cartSlice from "./Slices/cart/cartSlice";

const reducers = combineReducers({
    user: userSlice,
    cart: cartSlice
})

const store = configureStore({
    reducer: reducers,
});

export default store;
