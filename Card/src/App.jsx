import Card from "./Card.jsx"
import Button from "./Button/button.jsx"
import UserGreeting from "./UserGreeting.jsx"
function App() {

  return (
<>

 <Card name="Haythem" age={23} act="i play "/>
 <Card name="Abdelheq" age={23} act=" i m front end dev "/>
 <Card name="PoPo" age={23} act="im back end dev"/>
 
    <Card/>
    
       <Button/>
       <UserGreeting isLoggedIn ={true} username=" , this conditional rendering "/>

</>
  )
}

export default App
