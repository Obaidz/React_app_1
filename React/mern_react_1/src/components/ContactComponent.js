import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';


class Contact extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email:'',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event){
        const target = event.target;            // whatever field it is.
        const value = target.type === 'checkbox' ? target.checked : target.value;           // if type is checkbox then retreive value from checked otherwise retrieve it from attribute value.
        const name = target.name;               // get the name, its the same as state name which are same as form name attribute

        this.setState({
            [name] : value                      // getting all names changing sate of these state name to values we updated. 
        })
    }
    handleSubmit(event){
        console.log("Current state is:" +JSON.stringify(this.state));
        alert("Current state is:" +JSON.stringify(this.state));
        event.preventDefault();        // default behaviour when you submit a form is it will take you to next page, we can prevent it by following.
    }                                   // to make use of it, go to Form (element you want to use it with) and use onSubmit.
    render(){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem> <Link to='/home'>Home </Link> </BreadcrumbItem>
                        <BreadcrumbItem active> Contact Us </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div children="col-12 col-sm-4 offset-sm-1">
                        <h5>Our address</h5>
                        <address>
                            121, something street,something else Road <br />
                            Miami Vice, California<br />
                            US of A <br />
    
                            <i className="fa fa-phone"></i>: +345 64533242 <br />
                            <i className="fa fa-fax"></i>: +345 64533242 <br />
                            <i className="fa fa-envelope"></i>: +345 64533242 <br />
                        </address>
                    </div>
    
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+353899834226"><i className="fa fa-phone"></i> Call </a>
                            <a role="button" className="btn btn-info"> <i className="fa fa-skype"></i>Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:obaidu467@gmail.com"> <i className="fa fa-envelope-o"></i>Email</a>
                        </div>
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-12">
                        <h3>FeedBack</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>     {/* FormGroup allows us to use bootstarp grid inside form, like defining a new row for form to layout form element like input box */}
                                <Label htmlFor="firstname" md={2}> FirstName</Label>  {/* md = 2 means for medium to extra large devices this will occupy 2 columns, as its JSX, we are using htmlFor instead of for */}
                                <Col md={10}>           {/* col in reactstarp is like saying div classNmae= col-md-10, short form  */}
                                    <Input type="text" id="firstname" name="firstname" placeholder="first name" value={this.state.firstname} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>


                            <FormGroup row>    
                                <Label htmlFor="lastname" md={2}> LastName</Label>  
                                <Col md={10}>           
                                    <Input type="text" id="lastname" name="lastname" placeholder="last name" value={this.state.lastname} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>    
                                <Label htmlFor="telnum" md={2}> Contact Tel.</Label>  
                                <Col md={10}>           
                                    <Input type="tel" id="telnum" name="telnum" placeholder="Telephone number" value={this.state.telnum} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>    
                                <Label htmlFor="email" md={2}> Email </Label>  
                                <Col md={10}>           
                                    <Input type="email" id="email" name="email" placeholder="email" value={this.state.email} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>       {/* checkbox */}
                                        <Label check>
                                            <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.handleInputChange} /> {' ' /** space */} <strong>May we contact you</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>               {/* This is telling that this will occupy six columns with offset of 2 columns, offset =2 is pushing it 2 columns right.*/}

                                <Col md={{size: 3, offset: 1}}>
                                    <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handleInputChange} >
                                        <option>
                                            tel
                                        </option>

                                        <option>
                                            Email
                                        </option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup row>    
                                <Label htmlFor="message" md={2}> Your FeedBack </Label>  
                                <Col md={10}>           
                                    <Input type="textarea" id="message" name="message" row="20"  value={this.state.message} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>


                            <FormGroup row>    
                                <Col md={{size: 10, offset:2}}>           
                                    <Button type="submit" color="primary">Send FeedBack</Button>
                                </Col>
                            </FormGroup>

                        </Form>
                    </div>
                </div>
            </div>
        );
    }
   
}

export default Contact;