import React from 'react'
import { useSelector } from 'react-redux'

const Rightsidebar = (props) => {
  const state=useSelector(state=>state.comSlice)
  console.log(state);
  return (
    <div>

   {/**
    *  <h1 style={{color:props.color}}>HEllo</h1>
    */}  
     <h1 style={{color:state.color}}>HEllo</h1>
    </div>
  )
}

export default Rightsidebar

// create one input field in LefIcon component
// enter font there -->
// change the font family in rightSiebar