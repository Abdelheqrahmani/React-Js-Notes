import React ,{ useState } from "react";
 
const MyComponent = () => {
    const [count , setCount]=useState(0);
// c is the previous value its like file in this example 
 function decrement(){
    setCount(count - 1 ) ; 
    setCount(c => c - 1 ) ; 
    setCount(c => c - 1 ) ; 
    setCount(c => c - 1 ) ;  
 }
 
 function reset(){
        setCount(0) ; 
    }
   function increment(){
        setCount(c => c + 1 ) ; 
        setCount(c => c + 1 ) ; 
        setCount(c => c + 1 ) ; 
    }


    return ( 
    <>
    <h2>count {count}</h2> 
    <button onClick={decrement}>decrement</button>
    <button onClick={reset}>reset</button>
    <button onClick={increment}>increment</button>
</>

     );
}
 
export default MyComponent;