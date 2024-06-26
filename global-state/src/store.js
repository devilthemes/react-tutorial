import { configureStore } from '@reduxjs/toolkit'
import infoReducer from './state/infoSlice'

export default configureStore({
  reducer: {
    info: infoReducer
  }
})