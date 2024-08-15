import PropType from "prop-types" ; 


const UserGreeting = (props) => {
    if(props.isLoggedIn) {
         return (
              <h2 className="welcome-message">welcome {props.username}</h2> );
}else{
    return(
        <h2 className="login-prompt">haythm</h2>
    ); 
}
}
 
UserGreeting.prototype={
     isLoggedIn : PropType.bool , 
     username : PropType.string 
}


UserGreeting.defaultProps={
 isLoggedIn : false , 
 username : "guset"
}
export default UserGreeting;