import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./colorSlice"

const store=configureStore({
    reducer:{
        mycolor:colorReducer
    }
})

export default store;