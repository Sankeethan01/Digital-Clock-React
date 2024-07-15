
import { useState } from "react"


const Component3 = () => {
   
      const [colors,setColors] = useState(["Red","Blue","Black"])

      function handleAddColor(){
               const addColor = document.getElementById("colorInput").value
               document.getElementById("colorInput").value = ""
               setColors(f => [...f,addColor])
      }

      function handleRemoveColor(index){
                  setColors(colors.filter((_,i)=> i !== index));     
      }

  return (
    <div>
        <h2>Colors</h2>
        <ul>
         {colors.map((color,index)=> <li key={index} onClick={()=>handleRemoveColor(index)}>{color}</li>)}
        </ul>
        <input type="text" id="colorInput" placeholder="Input color name"/>
        <button onClick={handleAddColor}>Add</button>
    </div>
  )
}

export default Component3