import { useEffect } from "react";
import { useState } from "react"


const UseEffectPractice = () => {

       const [width,setWidth] = useState(window.innerWidth);
       const [height,setHeight] = useState(window.innerHeight);

       function windowResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
       }

       useEffect(()=>{
        window.addEventListener("resize",windowResize)
       },[width,height])

  return (
    <div>
        <p>Window Width : {width}px</p>
        <p>Window Height : {height}px</p>
    </div>
  )
}

export default UseEffectPractice