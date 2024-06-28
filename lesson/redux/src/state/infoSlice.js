import { createSlice } from "@reduxjs/toolkit";
export const infoSlice = createSlice({
    name :'info',
    initialState:{
        name:"",
        value:10,
        mode:'dark',
        year : 2024
    },
    reducers:{
        increment:state =>{
            state.value += 1;
        }
    }
})
export const {increment} = infoSlice.actions;
export default infoSlice.reducer;