import {createSlice} from '@reduxjs/toolkit';

const initialState = {
   value : []

}

export const tweetsSlice = createSlice ({
 name: "tweets", 
 initialState, 
 reducers: {
    addtweet: (state, action) => {
        state.value.push(action.payload)
    }, 
    removetweet: (state, action) => {
        state.value = state.value.filter(like => like.message !==action.payload.message && like.date !==action.payload.date)
        console.log (action.payload )
    }, 

 }
})

export const { addtweet, removetweet} = tweetSlice.actions; 
export default tweetsSlice.reducer