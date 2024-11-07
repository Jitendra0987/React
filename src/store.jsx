import { configureStore } from "@reduxjs/toolkit";
import changeReducer from "./bgcolorslice";

const store = configureStore({

    reducer : {
        mycolor:changeReducer
    }
})
export default store;