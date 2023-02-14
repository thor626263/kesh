import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const { REACT_APP_API_BASE_URL: apiBaseURL } = process.env;

const homeApiSlice = createSlice({
    name: 'homeApi',
    initialState: {
        value: null
    },
    reducers: {
        homeApi: (state, action) => {
            state.value = action.payload;
        },
    },
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        value: false,
    },
    reducers: {
        showAuth: (state, action) => {
            state.value = action.payload;
        }
    }
});

const authPageSlice = createSlice({
    name: 'authPage',
    initialState: {
        value: 'login',
    },
    reducers: {
        authPage: (state, action) => {
            state.value = action.payload;
        }
    }
});

const cartShowSlise = createSlice({
    name: 'showCart',
    initialState: {
        value: false,
    },
    reducers: {
        showCart: (state, action) => {
            state.value = action.payload;
        }
    }
})

const { homeApi } = homeApiSlice.actions;
export const { showAuth } = authSlice.actions;
export const { authPage } = authPageSlice.actions;
export const { showCart } = cartShowSlise.actions;

export const homeApiReducer = homeApiSlice.reducer;
export const authReducer = authSlice.reducer;
export const authPageReducer = authPageSlice.reducer;
export const showCartReducer = cartShowSlise.reducer;

export const fetchHomeApi = () => {
    return async function fetchHomeApiThunk(dispatch) {
        try {
            let data = await axios.get(apiBaseURL + 'home');
            data = data.data;
            dispatch(homeApi(data));
        }
        catch (err) {
            console.log(err);
        }
    }
}