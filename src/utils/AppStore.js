import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./appSlice";
import saveSearchResultSlice from "./saveSearchResultSlice";
import ChatSlice from "./ChatSlice";

const Appstore=configureStore({
    reducer:{
        sidebar:appSliceReducer,
        cache:saveSearchResultSlice,
        messages:ChatSlice
    }
})
export default Appstore