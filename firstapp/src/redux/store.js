import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice'; // userSlice'ı burada isim değiştirerek userReducer olarak kullandım
import { thunk } from 'redux-thunk';

export const store = configureStore({
    reducer:{
        user: userReducer
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware({serializableCheck:false})
})