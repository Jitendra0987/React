
import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name:"todo",
    initialState:{
        task:[]
    },

    reducers:{
        addData:(state,actions)=>{
            state.task.push(actions.payload)
        }
    }
})
export const {addData}=todoSlice.actions;
export default todoSlice.reducer;