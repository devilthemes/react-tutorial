import { createSlice } from "@reduxjs/toolkit";
export const studentSlice = createSlice({
    name :'student',
    initialState:{
        name:"Suraj",
        age:25,
        country : 'nepal'
    },
    reducers:{
       
    }
})

export default studentSlice.reducer;