import {configureStore, Reducer} from "@reduxjs/toolkit";
import userReducer, {State} from './userSlice';

export default configureStore<Reducer<State>>({
    reducer: {
        user: userReducer,
    }
});