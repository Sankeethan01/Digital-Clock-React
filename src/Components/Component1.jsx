import { useState } from "react"


const Component1 = () => {

        const [name,setName] = useState("Guest")
        const [num,setNum] = useState(1)
        const [para,setPara] = useState("")
        const [payment,setPayment] = useState("")
        const [check,setCheck] = useState("")


        const changeName = (event)=>{
            setName(event.target.value)
        }

        const changeNumber = (event)=>{
            setNum(event.target.value)
        }

        const changePara =(event)=>{
             setPara(event.target.value)
        }

        const changePayment = (event) =>{
              setPayment(event.target.value)
        }

        const changeChecking = (event) =>{
              setCheck(event.target.value)
        }
  return (
    <div>
        <input type="text" value={name} onChange={changeName} />
        <p>Text : {name}</p>

        <input type="number" value={num} onChange={changeNumber} />
        <p>Number : {num}</p>

        <textarea value={para} rows={5} onChange={changePara} placeholder="Type a text here..."></textarea>
        <p>Para : {para}</p>

        <select value={payment} onChange={changePayment}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Master Card">Master Card</option>
            <option value="Credit Card">Credit Card</option>
        </select>
        <p>Payment Method : {payment}</p>

        <label htmlFor="">
            <input type="radio" value="pick up" checked={check === "pick up"} onChange={changeChecking}/>
            Pick up
        </label><br />
        <label htmlFor="">
            <input type="radio" value="delivery" checked={check === "delivery"} onChange={changeChecking} />
            Delivery
        </label><br />
        <p>Option : {check}</p>
    </div>
  )
}

export default Component1