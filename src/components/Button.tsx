import React from 'react'
interface ButtonInterFace{
    label:string,
    handleClick:()=>void
}
const Button = ({label,handleClick}:ButtonInterFace) => {
  return <button onClick={handleClick}>{label}</button>
}

export default Button