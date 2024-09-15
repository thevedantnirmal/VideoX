import { createSlice } from "@reduxjs/toolkit";

const saveSearchSlice=createSlice({
    name:"saveSearch",
    initialState:{},
    reducers:{
        addCache:(state,action)=>{
            state=Object.assign(state,action.payload)
        }
    }
})
export default saveSearchSlice.reducer
export const{addCache}=saveSearchSlice.actions