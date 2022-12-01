import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {changeColor} from "../slices/com";

const LefIcon = (props) => {
  const dispatch=useDispatch();

    const [state,setState]=useState();

  const handleClick=()=>{
   // props.changeColor(state);
   dispatch(changeColor(state))

  }
  const handleChange=(event)=>{
    setState(event.target.value);

  }
  return (
    <div>
        
<input type={"text"} onChange={handleChange}/>

<button className='btn btn-info' onClick={handleClick}>

Change Color of RightsideBar
</button>

    </div>
  )
}

export default LefIcon