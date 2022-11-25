import {createSlice} from '@reduxjs/toolkit';

const initialState = {
   value : []

}

export const likesSlice = createSlice ({
 name: "likes", 
 initialState, 
 reducers: {
    addlike: (state, action) => {
        state.value.push(action.payload)
    }, 
    removelike: (state, action) => {
        state.value = state.value.filter(like => like.message !==action.payload.message && like.date !==action.payload.date)
        console.log (action.payload )
    }, 

 }
})

export const { addlike, removelike} = likesSlice.actions; 
export default likesSlice.reducer