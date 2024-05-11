import React, { useState } from 'react'

import style from './App.module.css';
import Button from './component/Button';

const value=["c","=","%","/","+","-","*",".",0,9,8,7,6,5,4,3,2,1]
const App = () => {
const [Input,setInput]=useState("")
const handleclick=(button)=>{
  if(button==="c"){
    setInput("")

  }
  else if(button=== "="){
    setInput(eval(Input))

  }
  else{
    setInput(Input + button)
  }
}

  return (
    <div className={style.main  }>
    <div className={style.container}>
      <div className="input">
        <input type="text" id='input' className={style.display} value={Input}  readOnly/> 
      </div>
      <Button value={value} handleclick={handleclick}/>
    </div>
      
    </div>
    
  )
}

export default App
