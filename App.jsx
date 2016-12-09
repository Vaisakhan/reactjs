import React from 'react';
import SearchItems from'./SearchItems.jsx';

class App extends React.Component {
   constructor(){
    super();
    this.state= {
      search : ''      
    };
    
   }
  doSearch(event){	  
	 this.setState({search: event.target.value});
  };

  resetSearch(event){
    console.log('hi'+event.target.value);
  	this.setState({search: ''});
  };
   searchClick(event){   
  	var searchParam = this.state.search;
  	this.setState = ({ search :searchParam});
  };



   render() {
   console.log(this.props.items);
    var header = {
         width: '100%',       
         background: 'linear-gradient(to right, #080817, #1c6496)',
         color: '#ffffff',
         height: '15%',
         'text-align':'center',
         padding:'1%',
         'font-family': 'cursive',
         'font-sixe': 'larger',
      },	

	  searchInput = {
	    height: '3%',
	    'border-radius': '2em',
	    'margin-top': '2%',    	
    	height: '36px',
    	'border-radius': '2em',
    	width: '35%',
    	margin:'3%'
	  },

	  footer = { 
	    width: '100%',
	    bottom: '0px',
	    'margin-bottom':'0px',
	    position: 'fixed',
	    padding: '2%',
	    background: 'linear-gradient(to right, #080817, #1c6496)',
	    'font-size': 'small',
	    color: '#ffffff'
	  },


     searchBtn = {
      'margin-left': '3%',
      'border-radius': '11px',
    	background: 'linear-gradient(to right, #080817, #1c6496)',
	    height: '37px',
	    width: '35%',
    	color: 'white'
	  },
	  menu = {
	   width : '15%',
	   height: '400px',
	   float: 'left',
	   color : '#FFFFFF',
	   'font-size': 'medium',
	   'border-radius': '23px',
	   'list-style-type': 'none',
	   background: 'linear-gradient(to bottom, #ff7301, yellow)'
	  }, 

	  menuList = {
	   'text-decoration' : 'none',
	    color : '#FFFFFF',
	    'padding-top': '20%',	
	    'font-size'   : 'large',
	    'padding-left': '25%'

	  },

	  content ={
	   'padding-left': '18%',
       'padding-top': '2%'
	  };
      
      
	  let sortedItems = this.props.items.sort('name');

      let filteredItems = this.props.items.filter(
      (item) => {
       return this.state.search && item.name.toLowerCase().startsWith(
         this.state.search.toLowerCase())
      	}
      );



      return (
      <div>
     <header style = {header}>
       <h1>Sample App</h1>
     </header>         
         <div style={menu}>
           
             <li style = {menuList} ><a style = {menuList} href="#"> Menu1 </a></li>
             <li style = {menuList} ><a style = {menuList} href="#"> Menu2 </a></li>
             <li style = {menuList} ><a style = {menuList} href="#"> Menu3 </a></li>
             <li style = {menuList} ><a style = {menuList} href="#"> Menu4 </a></li>
             <li style = {menuList} ><a style = {menuList} href="#"> Menu5 </a></li>
             <li style = {menuList} ><a style = {menuList} href="#"> Menu6 </a></li>
             
          
         </div>
         <div style={content}>
	         <div> <h3>Please enter your query to search</h3></div>
	         <input type="text" style ={searchInput} value={this.state.search} onChange={this.doSearch.bind(this)}></input>
	         <div>
	         	
	         	<span><button style = {searchBtn} onClick={this.resetSearch.bind(this)}>reset</button></span>
	          </div>
	         
	          <SearchItems items={filteredItems}/>
              
	          <div>
               <span ></span>
	          </div>
         </div>
     <footer>
      <p style={footer}>This is a sample app </p>
     </footer>
</div>

      );
   }
}


export default App;