import PropTypes from  "prop-types"

const Liste = (props) => {
    
    const itemList = props.items ; 
    const category  = props.category ; 
    //    fruits.sort((a,b) => a.name.localeCompare(b.name)) ;  alpha compare
        // fruits.sort((a,b) => b.name.localeCompare(a.name)) ;  // reverse alpha compare
      
  // fruits.sort((a,b) => a.calories - b.calories) ; // calories 

      // const lowCalFruit = fruits.filter (fruit => fruit.calories < 100 ) ; 


    const  listItems =itemList.map(itemList => <li key={itemList.id}>
        {itemList.name} have <b> {itemList.calories}</b> calories</li>) ; 
    return ( <>

    <h3>{category}</h3>
    <ol>{listItems}</ol> 
       </>);
}
Liste.PropTypes= {
    category : PropTypes.string , 
    items : PropTypes.arrayOf(PropTypes.shape({id : PropTypes.number , 
                                                  name : PropTypes.string , 
                                            calories : PropTypes.number
                                                     })) 
}
 Liste.defaultProps = { 
 category :"category",
 items : [] 
 }
export default Liste;