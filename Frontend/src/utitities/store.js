import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice.js"
import captainReducer from './captainSlice.js'

export const appStore = configureStore({
    reducer:{
        user : userReducer,
        captain : captainReducer
    }
})