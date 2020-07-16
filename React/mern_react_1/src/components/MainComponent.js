import React, { Component } from 'react';
import Menu from './FunctionalMenuComp';      // component for menu list taht we made.
import { DISHES } from '../shared/dishes';
import DishDetails from './FunctinalDishDetComp';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
// Components are independent and reusable bits of code. 
//They serve the same purpose as JavaScript functions, 
//but work in isolation and returns HTML via a render function.
class Main extends Component {    // parent component 
  
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,        // making dishes file attributes available to all child components (Navbar, menu)
      selectedDish: null
    };
  }

  onDishSelect(dish){
      this.setState({
          selectedDish: dish
      });
  }



  render() {
    console.log("Main component render is invoked");
      if (this.state.dishes  != null) {
        return (
            <div>
              <Header />
              <Menu dishes = {this.state.dishes}
              
                  onClick={(dish) => this.onDishSelect(dish)} 
                  />
              <DishDetails dish= {this.state.dishes.filter((dish) => dish === this.state.selectedDish)[0]} />
              <Footer />
                  
                       {/* child component , Menu is class here which is from MenuComponent, 
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

      else {
          return (
              <div></div>
          );
      }
    


  }

}

export default Main;
