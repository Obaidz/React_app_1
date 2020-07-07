import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';  // frist reactstrap componet we called.
import './App.css';


// Components are independent and reusable bits of code. 
//They serve the same purpose as JavaScript functions, 
//but work in isolation and returns HTML via a render function.
class App extends Component {     
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/"> Navbar brand </NavbarBrand>
          </div>
        </Navbar>
  
      </div>
    );
  }

}

export default App;
