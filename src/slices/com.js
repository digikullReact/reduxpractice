import { createSlice } from '@reduxjs/toolkit'

const state = {
    color: "purple",
  }
  

  export const  comSlice = createSlice({
    name: 'counter',
    initialState:state,
    reducers: {
        changeColor:(state,action)=>{
         // debugger;
         state.color=action.payload

        }
   
    },
  })
  
  // Action creators are generated for each case reducer function
  export const {changeColor  } = comSlice.actions
  
  export default comSlice.reducer