import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState:{
        employee : null
    },
    reducers:{
        setEmployee: (state,action)=>{
            state.employee = action.payload;
        },
        removeEmloyee: (state)=>{
            state.employee = null;
        },
    }
});

export const {setEmployee, removeEmloyee} = authSlice.actions

export default authSlice.reducer;
