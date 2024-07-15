import { useEffect } from "react"
import { useState } from "react"


const UseEffect = () => {

   const [count,setCount] = useState(0);
   const [color,setColor] = useState("green")

   function addCount(){
       setCount(c => c+1)
   }

   function changeColor(){
    setColor(c => c === "green" ? "red":"green")


   }

   function subtractCount (){
    setCount(c => c - 1);
   }

   useEffect(()=>{
     document.title = `Counter Program : ${count} ${color}`
   },[count,color])


  return (
    <div>
        <h2 style={{color : color}}>Count : {count}</h2>
        <button onClick={addCount}>Add</button>
        <button onClick={changeColor}>Change Color</button>
        <button onClick={subtractCount}>Subtract</button>
    </div>
  )
}

export default UseEffect