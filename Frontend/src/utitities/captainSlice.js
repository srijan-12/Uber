import {createSlice} from "@reduxjs/toolkit"

const captainSlice = createSlice({
    name : "captainSlice",
    initialState : null,
    reducers:{
        addUser : (state, payload)=>{
            return payload
        },
        removeUser : (state, payload)=>{
            return null
        }
    }
})
export const {addUser, removeUser} = captainSlice.actions
export default captainSlice.reducer;
