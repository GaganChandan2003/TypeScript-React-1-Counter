import React from 'react'
interface HeaderData{
label?:string
}
const Header = ({label="Counter"}:HeaderData) => {
  return (
    <div>
        <h1>{label}</h1>
    </div>
  )
}

export default Header