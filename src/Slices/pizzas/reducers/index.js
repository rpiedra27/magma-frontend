export const pizzaReducers = {
    clearState: (state) => {
        state.pizza = null;
        state.success = false;
        state.errorMessage = "";
    }
};