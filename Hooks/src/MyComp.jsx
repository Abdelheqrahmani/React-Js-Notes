import React,{useState} from "react";

const MyComp = () => {
const [name, setName] = useState("guest") ; 

let updateName = () => {
 setName("Haythem")
}
    return ( 
        <>
        <div>
            <p>Name : {name}</p>
            <button onClick={updateName}> Set Name  </button>
        </div>
        </>
     );
}
 
export default MyComp;