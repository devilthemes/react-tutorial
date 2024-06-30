import { createSlice } from "@reduxjs/toolkit";
export const infoSlice = createSlice({
    name :'info',
    initialState:{
        name:"",
        value:10,
        mode:'dark',
        year : 2024,
        student : {}
    },
    reducers:{
        increment:state =>{
            state.value += 1;
        },
        decrement:state =>{
            state.value -= 1;
        },
        changeStudent:(state,action)=>{
            state.student=action.payload
        },
        putUnique: (state,action) =>{
            console.log(action.payload)
            return {
                ...state,
                value:action.payload
            }
        }
    }
})
export const {increment,decrement,putUnique,changeStudent} = infoSlice.actions;
export default infoSlice.reducer;