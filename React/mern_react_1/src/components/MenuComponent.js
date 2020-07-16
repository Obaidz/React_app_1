import React, {Component} from 'react';  // importing react and class Component from react
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Menu extends Component {

    constructor(props){         // creating constructor with argument props
        super(props);           // I need to supply this props to my super class. So, I say super props.
                                // What does the state. The state stores in. Properties related to this component that we can make use of
   

        console.log("Menu component constructor is invoked");
    }

    
// So, the ''tag li'' says that each of these is going to act as a list item
// here. And notice that here I have already specified this as a media list 
//so that displays a list of items here. 
//So, when I say ''tag li'' and in here I can go ahead and lay out my items.
// any component in React, a class component should implement this method called render() which will turn the corresponding view for this component.


    
    

    render(){                   
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick= { () => this.props.onClick(dish)} >
                     
                        <CardImg width="100%" src={dish.image} alt= {dish.name}  />   
                       

                        <CardImgOverlay body className="ml-5">
                            <CardTitle heading> {dish.name}</CardTitle>
                        </CardImgOverlay>

                    </Card>
                    
                </div>
            );
        });          // defining menu whiich consists of array dishes. So, these dishes that we have defined here is an array of JavaScript objects. 

        console.log("Menu component render is invoked");
        // we will use const menu here in Media list.
        return (
            <div className="container">
           
                <div className="row">
                    {menu}       
                </div>
                
            </div>
        );
    }    
}

export default Menu; // Also when you create the component, don't forget to export that component from this file, because we would need to import this component wherever we want to make use of it within our application.