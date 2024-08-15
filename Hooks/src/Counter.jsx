import React , {useState} from "react";
const Counter = () => {
   let [count , setCount] = useState(0); 
    
    const increment =()=> {
        setCount (count +1 )
    }
    
    const decrement =()=> {
        setCount (count - 1  )
    }
    
    const reset =()=> {
        setCount (0)
    }


    return (
    
    <>
    <h1>{count}</h1>
    <button onClick={decrement}>decrement</button>
    <button onClick={reset}>reset </button>
    <button onClick={increment}> increment </button>
    </>
      );
} 

export default Counter;