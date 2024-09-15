import { createSlice } from "@reduxjs/toolkit";
import { Comment_Number } from "./constants";

const ChatSlice=createSlice({
    name:"chat",
    initialState:{
        message:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            state.message.splice(Comment_Number)
            state.message.unshift(action.payload)}
    }
})
export default ChatSlice.reducer
export const {addMessage}=ChatSlice.actions