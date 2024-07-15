import { useState } from "react"


const Component2 = () => {

     const [person,setPerson] = useState({name : "Sankee",
                                          age : 23,
                                          field : "IT"                
                                         })

    function handleChangeName(event){
        setPerson(p => ({...p,name: event.target.value}))
    }

    function handleChangeAge(event){
        setPerson(p => ({...p,age: event.target.value}))
    }

    function handleChangeField(event){
        setPerson(p => ({...p,field: event.target.value}))
    }

  return (
    <div>
        <p>Person Information : {person.name}  {person.age}  {person.field}</p>
        Name: <input type="text" value={person.name} onChange={handleChangeName} /><br />
        Age: <input type="number" value={person.age} onChange={handleChangeAge} /><br />
        Field: <input type="text" value={person.field} onChange={handleChangeField} /><br />
    </div>
  )
}

export default Component2