
import { createSlice } from "@reduxjs/toolkit";

const colorSlice=createSlice({
    name:"mycolor",
    initialState:{
        color:"pink"
    },
    reducers:{
        colorChange:(state)=>{
            state.color="yellow"
        }

    }
})

export const {colorChange} = colorSlice.actions;
export default colorSlice.reducer;