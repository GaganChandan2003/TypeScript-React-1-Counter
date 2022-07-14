import React,{useState} from 'react'
import Button from './Button';
import Header from './Header'

const Counter = () => {
  const [count, setcount] = useState(0);
  const handleClick=(value:number)=>
  {
    setcount(count+value);
  }
  return (
    <div>
        <Header/>
        <Header label={`${count}`}/>
        <Button label="Inc" handleClick={()=>handleClick(1)}/>
        <Button label="Dec" handleClick={()=>handleClick(-1)}/>
    </div>
  )
}

export default Counter