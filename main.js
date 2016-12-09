import React from 'react';
import ReactDOM from 'react-dom';
import Request from 'superAgent';
import App from './App.jsx';
 

 // Tried to fetch the json value using superAgent , it was not working . Hence hardcoded the value 			 
/*Request.get('/items.json').then((response)=>{
	items = response.body.items;
});*/

/*let items =    [{id:'1',name:'milk',price:'$20'},
			   {id:'2',name:'water',price:'$12'},
			   {id:'3',name:'meat',price:'$25'},
			   {id:'4',name:'grocery',price:'$30'},
			   {id:'4',name:'sugar',price:'$20'},
			   {id:'6',name:'rice',price:'$12'},
			   {id:'7',name:'fish',price:'$13'},
			   {id:'8',name:'matches',price:'$20'},
			   {id:'9',name:'apple',price:'$12'},
			   {id:'10',name:'grapes',price:'$13'},
			   {id:'11',name:'banana',price:'$20'},
			   {id:'12',name:'Candle',price:'$12'},
			   {id:'13',name:'Dress',price:'$13'},
			   {id:'14',name:'Eggplant',price:'$20'},
			   {id:'15',name:'Flower',price:'$12'},
			   {id:'16',name:'Glass',price:'$13'},
			   {id:'17',name:'Hat',price:'$13'},
			   {id:'18',name:'Ice-Cream',price:'$12'}

   			 ];*/

let items = function(){
	var items
	Request.get('/items.json').then((response)=>{
	 items = response.body.items;
	 return items;
   });
}
ReactDOM.render(<App items = {items()} />, document.getElementById('app')); 