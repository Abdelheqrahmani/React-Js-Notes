import React , {useState , useEffect} from "react";


/* useEffect do some code when :  
-   - this comp re-renders 
    -this component mounts (mounting is addin component to the dom )
        -this state of value

*/ 
const MyComponent = () => {
    
    const [count , setCount] = useState(0)
    const [color , setColor] = useState("green"); 


    useEffect(()=>{
        document.title = `Count : ${count} ${color}` ;  
        return () => {
            // some clean up code 
        }
    } , [count , color]) ; 



    function addCount(){
        setCount(c=> c + 1 ) ; 
    }
    function Subtract(){
        setCount(c=> c - 1 ) ; 
    }
    function changeColor(){
        setColor(c=> c === "green" ? "red" : "green") ; 
    }

    
    return ( <>

        <p style={{color: color}}> Count :  {count}</p>
        <button onClick={addCount}>add </button>
        <button onClick={Subtract}>subtract </button> <br />
        <button onClick={changeColor}> change color </button>
        
    
     
    </> );
}
 
export default MyComponent;