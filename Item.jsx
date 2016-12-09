import React from 'react';

class Item extends React.Component {
	render(){
	 return(
       	<tr><td>{this.props.item.name}</td><td>{this.props.item.price}</td></tr>   
	  )	  
	}
}

export default Item;