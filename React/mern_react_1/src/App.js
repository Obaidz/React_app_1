import React, { Component } from 'react';
                                              // frist reactstrap componet we called.
import Main from './components/MainComponent';      // component for menu list taht we made.
import './App.css';


// Components are independent and reusable bits of code. 
//They serve the same purpose as JavaScript functions, 
//but work in isolation and returns HTML via a render function.
class App extends Component {    // parent component 
  
  render() {
    return (
      <div>

        <Main />     {/* child component , Menu is class here which is from MenuComponent, 
                                                     in class itself it had no state (attributes), 
                                                      but now here we are 
                                                      assignning it the state of dishes*/}

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
