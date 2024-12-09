import { createSlice } from "@reduxjs/toolkit";

const pickupSlice = createSlice({
    name :  "pickupSlice",
    initialState : null,
    reducers:{
        addPickup : (state, action)=>{
            return action.payload
        },
        removePickup : (state, action)=>{
            return null;
        }
    }
}) 