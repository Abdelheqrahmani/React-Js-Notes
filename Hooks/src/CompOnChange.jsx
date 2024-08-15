import { useState } from "react";

const CompOnChange = () => {

    const [name , setName ]= useState("user") ; 
    const [shipping , setShipping ]= useState("Delivery") ; 

    const HandleNameChange = (e) => {
        setName(e.target.value) ; 
    }
    const HandleRadioChange = (e) => {
        setShipping(e.target.value) ; 
    }
     

    return (
         <div>
            <input type="text" value={name} onChange={HandleNameChange} />
            <p>Nam: {name} </p>

            <label> 
                delivery
                <input type="radio" value="Delivery" 
                checked={shipping === "Delivery"} 
                onChange={HandleRadioChange} 
                />
            </label>
            <label htmlFor="">
                pick up 
            <input type="radio" value="Pick Up" 
            checked={shipping === "Pick Up"} 
                onChange={HandleRadioChange} />
            </label>
            <p>{shipping}</p>
         </div>
        );
}
 
export default CompOnChange;