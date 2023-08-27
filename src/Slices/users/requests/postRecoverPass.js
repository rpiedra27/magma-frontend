import { createAsyncThunk } from "@reduxjs/toolkit";

export const postRecoverPass = createAsyncThunk('usuarios/postRecoverPass', async (credentials) => {
    const recoverFetch = await fetch(`${process.env.REACT_APP_API_URL}/users/recover-password`, {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            email: credentials.email,
        }),
    });
    const userData = await recoverFetch.json();
    if (recoverFetch.status === 200) {
        return userData;
    } else {
        return {
            error: true,
            message: userData.error.message,
        }
    }
});

export const onPostRecoverPassFullfiled = (state, action) => {
    if (action.payload.error) {
        state.userIsLoggedIn = false;
        state.user = null;
        state.errorMessage = action.payload.message;
    } else {
        state.userIsRecoveringPass = true;
    }
};

export const onPostRecoverPassRejected = (state) => {
    state.userIsLoggedIn = false;
    state.user = null;
}