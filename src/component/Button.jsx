import React from 'react'
import style from './Button.module.css'
const Button = ({value,handleclick}) => {
  return (
    <div className={style.btn}>
      {value.map((item,i)=>{
        return <button key={i} onClick={()=>handleclick(item)}>{item}</button>
      })

      }
    </div>
  )
}

export default Button
