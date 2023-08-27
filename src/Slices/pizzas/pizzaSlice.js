import { createSlice } from "@reduxjs/toolkit";
import { pizzaReducers } from "./reducers";
import { getPizzas, onGetPizzasFullfiled, onGetPizzasRejected  } from "./requests/getPizzas";

const pizzasSlice = createSlice({
    name: 'pizza',
    initialState: {
        pizza: null,
        success: false,
        errorMessage: "",
    },
    reducers: pizzaReducers,
    extraReducers(builder) {
        builder
            .addCase(getPizzas.fulfilled, onGetPizzasFullfiled)
            .addCase(getPizzas.rejected, onGetPizzasRejected)
    }
});

export const { clearState } = pizzasSlice.actions;

export default pizzasSlice.reducer;