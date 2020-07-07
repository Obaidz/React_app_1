import React, {Component} from 'react';  // importing react and class Component from react
import { Media } from 'reactstrap';

class Menu extends Component {

    constructor(props){         // creating constructor with argument props
        super(props);           // I need to supply this props to my super class. So, I say super props.
        this.state = {          // What does the state. The state stores in. Properties related to this component that we can make use of
            dishes: [           // So, now I have this dishes property here which consists of four JavaScript objects and each JavaScript object has an ID, name, an image reference, a category, a label, and a price and a description here.
                {
                    id: 0,
                    name: 'pizza',
                    image: 'assets/img/logo1.png',
                    category: 'mains',
                    label: 'Hot',
                    price: '4.99',
                    description: 'its a pizza Furthermore, you can easily control what a component renders by supplying inputs to the component. Well explore this issue a little more in the next lecture after the exercise. And also '
                },

                {
                    id: 1,
                    name: 'pasta',
                    image: 'assets/img/logo.png',
                    category: 'appetizers',
                    label: 'Hot',
                    price: '1.99',
                    description: 'its not a pizza Furthermore, you can easily control what a component renders by supplying inputs to the component. Well explore this issue a little more in the next lecture after the exercise. And also'
                },

                {
                    id: 2,
                    name: 'icecream',
                    image: 'assets/img/logo1.png',
                    category: 'dessert',
                    label: 'cold',
                    price: '4.99',
                    description: 'its an ice cream Furthermore, you can easily control what a component renders by supplying inputs to the component. Well explore this issue a little more in the next lecture after the exercise. And also'
                },

                {
                    id: 3,
                    name: 'pizza 2',
                    image: 'assets/img/logo.png',
                    category: 'yummy',
                    label: 'Hot',
                    price: '3.00',
                    description: 'its a new pizza Furthermore, you can easily control what a component renders by supplying inputs to the component. Well explore this issue a little more in the next lecture after the exercise. And also'
                }
            ]
        }
    }
// So, the ''tag li'' says that each of these is going to act as a list item
// here. And notice that here I have already specified this as a media list 
//so that displays a list of items here. 
//So, when I say ''tag li'' and in here I can go ahead and lay out my items.
    render(){                   // any component in React, a class component should implement this method called render() which will turn the corresponding view for this component.
        const menu = this.state.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle> 
                            <Media object src={dish.image} alt= {dish.name}  />   
                        </Media>

                        <Media body className="ml-5">
                            <Media heading> {dish.name} </Media>
                            <p> { dish.description} </p>
                        </Media>
                    </Media>
                    
                </div>
            );
        });          // defining menu whiich consists of array dishes. So, these dishes that we have defined here is an array of JavaScript objects. 


        // we will use const menu here in Media list.
        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}              
                    </Media>
                </div>
            </div>
        );
    }    
}

export default Menu; // Also when you create the component, don't forget to export that component from this file, because we would need to import this component wherever we want to make use of it within our application.