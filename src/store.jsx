import { configureStore } from "@reduxjs/toolkit";
import myreducer from "./bgcolorSlice";

const store = configureStore({
    reducer:{

        mycolor :myreducer
    }
})
export default store;