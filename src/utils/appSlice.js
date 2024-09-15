import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"appSlice",
    initialState:{
        isSideBarShow:true
    },
    reducers:{
    toggleSidebar:(state)=>{
        state.isSideBarShow=!state.isSideBarShow
    }
    }
})
export default appSlice.reducer
export const{toggleSidebar}=appSlice.actions