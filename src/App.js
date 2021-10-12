
import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
function App(){
  return (
    <div>
  <Header></Header>
  <Shop></Shop>

    </div>
  );
}
export default App;
/*
import { buildQueries } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import './App.css';
function App() {
  const Products=[
  {name:'laptop',price:'$10'},
  {name:'sumsung',price:'$20'},
  {name:'tv',price:'$90'}
] 
//person
const persons=['nadi','him','abdullah']

  return ( 
<div classname="app">
<header classname="app-header">
<p>I am react person</p>

<Nayok></Nayok>

<ul>
  {
    persons.map(Person=><li>{Person}</li>)
  }
</ul>

<Counter></Counter>
<Users></Users>
{
Products.map(Pd=><Product Product={Pd}></Product>)
}
{/*
<Product Product={Products[0]}></Product>
<Product Product={Products[1]}></Product>



   </header>
   </div>
  );
}
//person function
function Person(props){
  return(
    <div personStyle='border:2px solid'>
      <h1>name:{props.Persons}</h1>
      <h3>hero of the year</h3>
    </div>
  )
}
function Nayok() {
  const nayokStyle={border:'2px solid purple'}
return <div style={nayokStyle}><h1>hey this is me</h1><h5>ok don not mind</h5></div>
}

function Counter(){
  const [count, SetCount]= useState(0);
  const handleIncrease= () =>{SetCount(count+1);
  
  };
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onMouseMove={()=>SetCount(count-1)}> Decrease </button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}
function Users(){
  const [Users,SetUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>SetUsers(data));
  },[])
return(
    <div>  
      <h3>dynamic user:{Users.length}</h3>
      
    <ul>
      {
      Users.map(User=><li>{User.name}</li>)
      }
      </ul>
      </div>
       )

      }
//Product function using style
function Product(props){
const ProductStyle={
border:'1px solid gray',
borderRadius:'5px',
backgroundColor:'lightgray',
height:'200px',
width:'200px',
float:'left'
  }

  const{name,price}=props.Product;
  console.log(name,price)
return(
<div style={ProductStyle}>
   <h2>{props.Product.name}</h2>
   <h1>{props.Product.price}</h1>
   <button>Buy now</button>
</div>
  )
  }
export default App;

*/
