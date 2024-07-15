import { useState } from 'react'
import './DigitalClock.css'
import { useEffect } from 'react'

const DigitalClock = () => {

     const [time,setTime] = useState(new Date());

     useEffect(()=>{
        const intervalId=setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
     },[]);

     function formatTime(){
        let hours = time.getHours();
        const mins = time.getMinutes();
        const secs = time.getSeconds();
        const zone = hours >= 12 ? "PM":"AM";

        hours = hours % 12 || 12 ;

        return `${padzero(hours)}:${padzero(mins)}:${padzero(secs)} ${zone}`;

     }

     function padzero(number){
             return (number < 10 ? "0":"") + number;
     }

  return (
    <div className='clock-container'>
        <div className="clock">
            <span>{formatTime()}</span>
        </div>
    </div>
  )
}

export default DigitalClock