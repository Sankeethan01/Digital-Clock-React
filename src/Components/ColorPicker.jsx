import { useState } from 'react'
import './ColorPicker.css'

const ColorPicker = () => {

    const [color,setColor] = useState("#cccccc")

    const changeColor = (event)=>{
          setColor(event.target.value)
    }

  return (
    <div className='color-picker-component'>
        <h2>Color Picker</h2>
        <div className='color-display' style={{background : color}}>
            <p>Inputed Color : {color}</p>
        </div>
      
        <p>Change Color : </p> 
        <input type="color" value={color} onChange={changeColor} />
    </div>
  )
}

export default ColorPicker