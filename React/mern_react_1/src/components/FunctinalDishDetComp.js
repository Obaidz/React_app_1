import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

// Components are independent and reusable bits of code. 
//They serve the same purpose as JavaScript functions, 
//but work in isolation and returns HTML via a render function.
  
  function RenderDish({dish}){              // can also use props RD(props)
    if (dish != null){
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt= {dish.name}  /> 
                    <CardBody>
                        <CardTitle heading> {dish.name} </CardTitle>
                        <CardText>{dish.description} </CardText>
                    </CardBody>
                </Card>
            </div>
            
        );
    }
    else {
        return(
            <div></div>         // if selected dish is null, return empty screen.
        )
    }
  }

  function RenderComments({comments}) {
      if(comments != null){
          return(
              <div className="col-12 col-md-5 m-1">
                  <h4>Comments</h4>
                  <ul className="list-unstyled">
                      {comments.map((comment) => {
                          return (
                              <li key={comment.id}>
                                  <p>{comment.comment}</p>
                                  <p>{comment.rate}</p>
                                  <p>{comment.author},{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format( new Date(Date.parse(comment.date)))}</p>
                              </li>
                          );
                      })}
                  </ul>
              </div>
          );
      }
      else {
          return (
              <div></div>
          );
      }
  }
  const DishDetails = (props) => {
      if (props.dish  != null) {
        return (
              <div className="container">
                    <h1>Func Dish Details Comp</h1>
                      <div className="row">
                            
                             <RenderDish dish={props.dish} />
                             <RenderComments comments = {props.dish.comments} />
                             
                      </div>
                      
              </div>

       
            
          );
      }
      else {
        return (
            <div></div>
        ); 
      }
    

      
    


    }



export default DishDetails;
              
