import { useEffect } from "react";
import { useState } from "react";

const DigitalClock = () => {
    
    const [time, setTime] = useState(new Date());

        useEffect(() => {
            const intervalId = setInterval(()=>{
                setTime(new Date()) ; 

        } , 1000) ; 
        return () => { 
             clearInterval(intervalId) ; 

        }
        },[]) ; 
    

        function formatTime(){
            let hours = time.getHours()
            let minutes = time.getMinutes()
            let seconds = time.getSeconds()
            const meridiem = hours >= 12  ?"pm" : "am"  ; 

            hours = hours % 12  || 12 ; 

            return `${hours} : ${minutes} : ${seconds} ${meridiem}`
        }

    
    
    
    return (  <> 
        <div className="clock-containe">
            <div className="cloc">
                <span>{formatTime()}</span>
            </div>
        </div>
     </>);
}
 
export default DigitalClock;