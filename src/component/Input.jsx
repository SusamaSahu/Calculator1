import React, { useState } from 'react'

const Input = () => {
const [name,Setname]=useState("");

    const handlechange=(e)=>{
console.log(e.target.value)
    }
  return (
    <div>
    
      <input type="text" placeholder="Enter your name" onChange={handlechange} /><br/>
      <p>{name}</p>
      
    </div>
  )
}

export default Input
