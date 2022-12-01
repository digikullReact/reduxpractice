import { createSlice } from '@reduxjs/toolkit'

const state = {
    value: 0,
  }
  

  export const  ghSlice = createSlice({
    name: 'gh',
    initialState:state,
    reducers: {
        changeColor:(state,action)=>{

        }
   
    },
  })
  
  // Action creators are generated for each case reducer function
  export const {changeColor  } = ghSlice.actions
  
  export default ghSlice.reducer