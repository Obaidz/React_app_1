import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';  // frist reactstrap componet we called.
import Menu from './components/MenuComponent';      // component for menu list taht we made.
import './App.css';


// Components are independent and reusable bits of code. 
//They serve the same purpose as JavaScript functions, 
//but work in isolation and returns HTML via a render function.
class App extends Component {     
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/"> Navbar brand </NavbarBrand>
          </div>
        </Navbar>
        <Menu />

        {/*
          Now, my menu component will be rendered below the nav bar in my app component. 
          So now, you can see how I have subdivided my UI into two parts. 
          There is this one menu component. And then on top,
          you have the Navbar component, which is enclosed inside the app component, 
          which is then rendered by the index.js file here as a single component. 
          So you can see how one component can be imported into another component 
          and then made use of in the other component in order to construct 
          the overall user interface. 
        */}
 
      </div>
    );
  }

}

export default App;
