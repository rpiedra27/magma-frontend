import { createSlice } from "@reduxjs/toolkit";
import { userReducers } from "./reducers";
import { onPostLoginFullfiled, onPostLoginRejected, postLogin } from "./requests/postLogin";
import { onPostRecoverPassFullfiled, onPostRecoverPassRejected, postRecoverPass } from "./requests/postRecoverPass";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        userIsLoggedIn: false,
        errorMessage: "",
        users: null,
        userIsRecoveringPass: false
    },
    reducers: userReducers,
    extraReducers(builder) {
        builder
            .addCase(postLogin.fulfilled, onPostLoginFullfiled)
            .addCase(postLogin.rejected, onPostLoginRejected)
            .addCase(postRecoverPass.fulfilled, onPostRecoverPassFullfiled)
            .addCase(postRecoverPass.rejected, onPostRecoverPassRejected)
    }
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
