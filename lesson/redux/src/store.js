import { configureStore } from "@reduxjs/toolkit";
import infoReducer from "./state/infoSlice";
import studentReducer from "./state/studentSlice";
export default configureStore({
    reducer:{
        info:infoReducer,
        student:studentReducer
    }
})