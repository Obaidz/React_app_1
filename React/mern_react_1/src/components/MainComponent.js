import React, { Component } from 'react';
import Menu from './FunctionalMenuComp';      // component for menu list taht we made.
import { DISHES } from '../shared/dishes';
import DishDetails from './FunctinalDishDetComp';
import  { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom';

// Components are independent and reusable bits of code. 
//They serve the same purpose as JavaScript functions, 
//but work in isolation and returns HTML via a render function.
class Main extends Component {    // parent component 
  
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,        // making dishes file attributes available to all child components (Navbar, menu)
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }




  render() {

    const HomePage = () => {
        return(
            //we extract out this one from the dishes array? So, this is where we will make use of the filter all the filtered operation in JavaScript to extract that out. 
            <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
            leader={this.state.leaders.filter((leader) => leader.featured)[0]}/>
        );
    }

    const DishWithID =({match}) => {
        return(
            <DishDetails dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
            />
        );
    }
    console.log("Main component render is invoked");
      if (this.state.dishes  != null) { 
        return (
            <div>
              <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path ="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Route path="/menu/:dishId" component= {DishWithID} />
                    <Route exact path ="/contactus" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
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
