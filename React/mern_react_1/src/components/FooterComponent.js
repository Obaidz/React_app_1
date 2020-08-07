import React from 'react';
import {Link} from 'react-router-dom';
function Footer(props){
    return(
        <div className="footer"> 
            <div className="container">
                <div className="row links justify-content-center">
                    <div className="col-4 offset-1 col-sm-2 align-self-center">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/aboutus">About Us</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/contactus">Content Us</Link></li>
                        </ul>
                    </div>

                    <div className="col-4 col-sm-3">
                        <i className="fa fa-phone fa-lg"></i> This is footer <br></br>
                        <i className="fa fa-fax fa-lg"></i> This is footer <br></br>
                        <i className="fa fa-envelope fa-lg"></i> This is footer <br></br>
                    </div>
                    
                    <div className="col-12 col-sm-4 ">
                        
                        <a className="btn btn-social-icon btn-google"><i className="fa fa-google-plus fa-lg"></i></a> <></>
                        <a className="btn btn-social-icon btn-twitter"><i className="fa fa-twitter fa-lg"></i></a> <></>
                        <a className="btn btn-social-icon btn-facebook"><i className="fa fa-facebook fa-lg"></i> </a><></>
                    </div>
                </div>
            </div>
        </div>
            
                
           
    );
}

export default Footer;