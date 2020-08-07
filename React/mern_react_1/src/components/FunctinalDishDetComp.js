import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom'; 

// Components are independent and reusable bits of code. 
//They serve the same purpose as JavaScript functions, 
//but work in isolation and returns HTML via a render function.

  function RenderDish(props){              // can also use props RD(props)
    if (props != null){
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={props.image} alt= {props.name}  /> 
                    <CardBody>
                        <CardTitle> {props.name} </CardTitle>
                        <CardText>{props.description} </CardText>
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
      if(comments != null)
          return(
              <div className="col-12 col-md-5 m-1">
                  <h4>Comments</h4>
                  <ul className="list-unstyled">
                      {comments.map((comment) => {
                          return (
                              <li key={comment.id}>
                                  <p>{comment.comment}</p>
                                  <p>{comment.rate}</p>
                                  <p>-- {comment.author},{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format( new Date(Date.parse(comment.date)))}</p>
                              </li>
                          );
                      })}
                  </ul>
              </div>
          );
      
      else 
          return (
              <div></div>
          );
      
  }
  const DishDetails = (props) => {
      if (props.dish  != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem> <Link to='/menu'>Menu </Link> </BreadcrumbItem>
                        <BreadcrumbItem active> {props.dish.name} </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                            
                    <RenderDish dish={props.dish} />
                    <RenderComments comments = {props.comments} />
                             
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
              
