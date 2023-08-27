import { createAsyncThunk } from "@reduxjs/toolkit";
import Mixpanel from "../../../Services/mixpanel";

export const postCreateUser = createAsyncThunk('usuarios/postCreateUser', async (credentials) => {
    const createUserFetch = await fetch(`${process.env.REACT_APP_API_URL}/users/`, {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            name: credentials.name,
            email: credentials.email,
            password: credentials.password,
        }),
    });
    const userData = await createUserFetch.json();
    if (createUserFetch.status === 200) {
        return userData;
    } else {
        return {
            error: true,
            message: userData.error.message,
        }
    }
});

export const onPostCreateUserFullfiled = (state, action) => {
    if (action.payload.error) {
        state.userIsLoggedIn = false;
        state.user = null;
        state.errorMessage = action.payload.message;
    } else {
        Mixpanel.identify(action.payload.id);
            Mixpanel.people.set({
            $name: action.payload.name,
            $email: action.payload.email,  
        });
        state.userIsLoggedIn = true;
        state.user = action.payload;
    }
};

export const onPostCreateUserRejected = (state) => {
    state.userIsLoggedIn = false;
    state.user = null;
}