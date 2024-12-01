import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name : "userSlice",
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
export const {addUser, removeUser} = userSlice.actions
export default userSlice.reducer;
