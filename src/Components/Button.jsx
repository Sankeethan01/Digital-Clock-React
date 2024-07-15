import { useState } from "react"
import './Button.css'

const Button = () => {
  
    const[num,setNum] = useState(0)

    const decrementNum = ()=>{
        setNum(num - 1)
    }

    const resetNum = ()=>{
        setNum(0)
    }

    const incrementNum = ()=>{
        setNum(n => n + 1)
        setNum(n => n + 1)
        setNum(n => n + 1)
    }

   

  return (
    <div className="counter">
        <h2 className="display-num">{num}</h2>
        <button className="action-button" onClick={decrementNum}>Decrement</button>
        <button className="action-button" onClick={resetNum}>Reset</button>
        <button className="action-button" onClick={incrementNum}>Increment</button>
    </div>
  )
}

export default Button
