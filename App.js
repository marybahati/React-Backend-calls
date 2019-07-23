import React from 'react';
import logo from './logo.svg';
import './App.css';
import Collapsible from 'react-collapsible'
import Products from './Products'
import Fruits from './Fruits';
import Vegetables from './Vegetables'


class App extends React.Component{

render(){
  return(
  <div>


  <h1 id="title">Welcome to Greens Kiosk</h1>
  <p>We sell fruits and vegetables</p>
 
  <h2>Products</h2>
  <ul id="products">
    <Collapsible trigger="Collapse-Products"> 
    <Products/>
    </Collapsible>  {/* Show products list from API */}    
  </ul>
  
  <h3>Fruits</h3>
  <ul id="fruList">
  <Collapsible trigger="Collapse-Fruits"> 
    <Fruits/>
        </Collapsible>{/* Show fruits from API */}
  
  </ul>
  <h3>Vegetables</h3>
  <ul id="vegList">
  <Collapsible trigger="Collapse-Vegetables"> 
    <Vegetables/>
      </Collapsible> {/* Show vegetables from API  */}
  </ul> 

          
  
  </div>
  )
}
}

export default App;
