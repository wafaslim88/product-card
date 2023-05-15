import React from "react";
import ItemList from "./components/ItemList";
import './App.css';


function App() {
 //To use the ItemList component we can define an array of item objects and pass it as the items prop to ItemList component
const items= [
  {
    name:'New Balance Shoes 574',
    price: 389 ,
    image: "new-balance-chaussures-574.jpg"
  },
  {
    name:'New Balance Shoes 327',
    price: 429 ,
    image: "new-balance-chaussures-327.jpg"
  },
  {
    name:'New Balance Shoes U574Lgbn',
    price: 499 ,
    image: "new-balance-chaussures-u574.jpg"
  }  
];
//the alertProduct function is defined in the App component 
const alertProduct = (name) => {
  alert(`You clicked on ${name}`);}

  return (
    <div className="App">
      <h1>LIST OF PRODUCTS BY BRAND NEW BALANCE</h1>
      <ItemList items={items} alertProduct={alertProduct} />
    </div>
  );
};

export default App;

