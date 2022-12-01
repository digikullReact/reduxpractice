import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import Leftsidebar from './components/Leftsidebar';
import Rightsidebar from './components/Rightsidebar';
import { useState } from 'react';

function App() {
const [color,setcolor]=useState("blue");

const changeColor=(colorParam)=>{
  setcolor(colorParam);
  
}

  return (
    <div className="container">
      <div className='row'>
        <div className='col-6'>
          <Leftsidebar changeColor={changeColor}/>

        </div>

        <div className='col-6'>
          <Rightsidebar color={color}/>

</div>

      </div>
     
     
    </div>
  );
}

export default App;
