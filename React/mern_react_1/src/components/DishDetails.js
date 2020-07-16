import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

// Components are independent and reusable bits of code. 
//They serve the same purpose as JavaScript functions, 
//but work in isolation and returns HTML via a render function.
class DishDetails extends Component {    // parent component 
  


  componentDidUpdate(){
    console.log("Menu component constructor did update is invoked");
  }

  componentDidMount(){
    console.log("Menu component constructor did Mount is invoked");
  }
  renderDish(dish){
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

  renderComments(comments) {
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
  render() {
      if (this.props.dish  != null) {
        return (
              <div className="container">
      
                      <div className="row">
                     
                             {this.renderDish(this.props.dish)}
                             {this.renderComments(this.props.dish.comments)}
                             
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

}

export default DishDetails;
              
