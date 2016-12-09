import React from 'react';
import Item from'./Item.jsx';

class SearchItems extends React.Component {
	render(){
	var tablestyle = {	   
	   border: '1px solid black'
	   },
	thead = {     
     background: 'linear-gradient(to bottom, #ff7301, yellow)',
     color: '#FFFFFF'
    };
	
	let filteredItems = this.props.items;
	  return(
        <div>
        <table>
	     <tr>
	       <td><h4>Name</h4></td>
	       <td><h4>Price</h4></td>
	      </tr>
	      {filteredItems.map((item)=>{
	        return <Item item={item} key={item.id}/>
	      })    
	      }   
	     </table>
	    </div>
	  ) 
	  
	}
}

export default SearchItems;