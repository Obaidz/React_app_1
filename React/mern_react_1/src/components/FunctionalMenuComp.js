import React from 'react';  // importing react and class Component from react
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
    
function RenderMenuItem({dish, onClick}){
    return(
        <Card onClick= { () => onClick(dish)} >
                     
            <CardImg width="100%" src={dish.image} alt= {dish.name}  />   
                       

            <CardImgOverlay body className="ml-5">
                <CardTitle heading> {dish.name}</CardTitle>
            </CardImgOverlay>

        </Card>
    );
}                  // or function RenderMenuItem(props),Now, if you know what you are going to be receiving to your props, so instead of just typing props, I can simply go in and instead type within braces. Because the process is JavaScript object, so I can even easily specify the various properties that are going to come in as part of the JavaScript object there. So I'll simply say "dish, onClick," 
        

const Menu = (props) => {                   // can also make a method this way
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                
                <RenderMenuItem dish={dish} onClick={props.onClick} />              {/** RenderMenuItem takes two parameters. dish and Onclick */}
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
        

export default Menu; // Also when you create the component, don't forget to export that component from this file, because we would need to import this component wherever we want to make use of it within our application.