import { useState } from "react"


const Component4 = () => {

    const [cars,setCars] = useState([])
    const [year,setYear] = useState(new Date().getFullYear())
    const [make,setMake] = useState("")
    const [model,setModel] = useState("")

    function handleAddCar (){
          const newCar = {carYear : year,
                          carMake : make,
                          carModel : model
                         }

         setCars(c=>[...c,newCar])

         setYear(new Date().getFullYear())
         setMake("")
         setModel("")

     
    }

      function handleRemove(index){
          setCars(c => c.filter((_, i) => i !== index))
      }
  

    function handleChangeYear(event){
        setYear(event.target.value)

    }

    function handleChangeMake(event){
         setMake(event.target.value)
    }

    function handleChangeModel(event){
          setModel(event.target.value)
    }

  return (
    <div>
        <h2>Car Details</h2>
        <ul>
            {cars.map((car,index)=><li key={index} onClick={handleRemove(index)}>{car.carYear} {car.carMake} {car.carModel}</li>)}
        </ul>
        <input type="number" value={year} onChange={handleChangeYear}/><br />
        <input type="text" value={make} onChange={handleChangeMake}/><br />
        <input type="text" value={model} onChange={handleChangeModel}/><br />
        <button onClick={handleAddCar}>Add Detail</button>
    </div>
  )
}

export default Component4