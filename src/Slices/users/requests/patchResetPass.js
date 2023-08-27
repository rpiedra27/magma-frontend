import { createAsyncThunk } from "@reduxjs/toolkit";

export const patchResetPass = createAsyncThunk('usuarios/patchResetPass', async (credentials) => {
    const resetFetch = await fetch(`${process.env.REACT_APP_API_URL}/users/reset-password/`, {
        method: 'PATCH',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
            code: credentials.code
        }),
    });
    const userData = await resetFetch.json();
    if (resetFetch.status === 200) {
        return userData;
    } else {
        return {
            error: true,
            message: userData.error.message,
        }
    }
});

export const onPatchResetPassFullfiled = (state, action) => {
    if (action.payload.error) {
        state.userIsLoggedIn = false;
        state.user = null;
        state.errorMessage = action.payload.message;
    } else {
        state.userIsResetingPass = true;
    }
};

export const onPatchResetPassRejected = (state) => {
    state.userIsLoggedIn = false;
    state.user = null;
}