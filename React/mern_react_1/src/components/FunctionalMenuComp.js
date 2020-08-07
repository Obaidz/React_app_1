import React from 'react';  // importing react and class Component from react
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
function RenderMenuItem({dish}){
    return(
        <Card>

            {/** This dish ID is the one that I want to pass. But then this link allows me 
             * to only specify the URL to which I navigate. Now, how do I make use of this dish ID? 
             * This is where I can use back quotes. So a back quote means whatever is enclosed inside here, 
             * so if I put a JavaScript value there that could be evaluated and then replace that value there. 
             * So when I say back quote, 
             * and inside the back quote I will say, menu slash dollar dish ID. That's it.  */}
            
            <Link to={`/menu/${dish.id}`} >
                <CardImg width="100%" src={dish.image} alt= {dish.name}  />   
                       
                <CardImgOverlay >
                <CardTitle> {dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>      

        </Card>
    );
}                  // or function RenderMenuItem(props),Now, if you know what you are going to be receiving to your props, so instead of just typing props, I can simply go in and instead type within braces. Because the process is JavaScript object, so I can even easily specify the various properties that are going to come in as part of the JavaScript object there. So I'll simply say "dish, onClick," 
        

const Menu = (props) => {                   // can also make a method this way
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                
                <RenderMenuItem dish={dish} />              {/** RenderMenuItem takes two parameters. dish */}
            </div>
        );
    });          // defining menu whiich consists of array dishes. So, these dishes that we have defined here is an array of JavaScript objects. 

    console.log("Menu component render is invoked");
    // we will use const menu here in Media list.
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem> <Link to='/home'>Home </Link> </BreadcrumbItem>
                    <BreadcrumbItem active> Menu </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {menu}       
            </div>
            
        </div>
    );
}
        

export default Menu; // Also when you create the component, don't forget to export that component from this file, because we would need to import this component wherever we want to make use of it within our application.