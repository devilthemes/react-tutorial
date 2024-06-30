import { createSlice } from '@reduxjs/toolkit'

export const infoSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    mode : "dark"
  },
  reducers: {
    increment: state => {
       state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    setCounter : (state,action) => {
      console.log(action.payload);
      return {
        ...state,
        value:action.payload,
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement,setCounter } = infoSlice.actions

export default infoSlice.reducer