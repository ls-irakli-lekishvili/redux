import {createSlice} from "@reduxjs/toolkit";
import {SliceCaseReducers} from "@reduxjs/toolkit/src/createSlice";

export interface State {
    name: string;
    email: string;
}

export const userSlice = createSlice<State, SliceCaseReducers<State>>({
    name: "user",
    initialState: {
        name: "test",
        email: 'lek@gmail.com'
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        updateName: (state, action) => {
            state.name = action.payload.name;
        }
    }
});

export const {update, updateName} = userSlice.actions;
export default userSlice.reducer;