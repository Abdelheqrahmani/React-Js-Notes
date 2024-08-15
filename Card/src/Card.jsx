import PropTypes from 'prop-types'

const Card = (props) => {
    
    return ( 
        <div className="card">
            <img className="card-image" src="https://via.placeholder.com/150" alt="" />
            <h2>{props.name}</h2>
            <h3> {props.age}</h3>
            <p>{props.act}</p>
        </div>
     );
}
Card.prototype = { 
name : PropTypes.string , 
age : PropTypes.number , 
act : PropTypes.string,

}

Card.defaultProps={
    name : "guest" , 
    age: 0 , 
    act : "nothing " , 

}
  
export default Card;