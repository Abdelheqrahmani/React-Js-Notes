import Liste from "./Liste.jsx"

function App() {
  const fruits = [ { id: 1 , name:"apple" , calories : 95 }, 

                 , {  id: 2  ,name:"pineapple" , calories :32 } ,

                   { id: 3 , name : "banana" , calories : 100 } , ] ;
                    
  const vegetables = [ { id: 4, name:"potato" , calories : 95 }, 

                 , {  id: 5  ,name:"carrots" , calories :32 } ,

                   { id: 6 , name : "onions" , calories : 100 } , ] ;
                    

  return (
    <>
  {fruits.length> 0 &&  <Liste items={fruits} category ="Fruits"/> }    
{vegetables.length > 0 &&  <Liste items={vegetables} category ="vegetables"/>}
    </>
  )
}

export default App
