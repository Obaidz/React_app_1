import React, {Component} from 'react';
import { Navbar, NavbarBrand , Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';  // frist reactstrap componet we called.
import { NavLink } from 'react-router-dom';
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this)       // binding this toogleNav method to be able to use. Syntax for react ,JSX.
    }

    toggleNav() {
        this.setState ({
            isNavOpen: !this.state.isNavOpen     // we are negating (inverse) the value of isNavOpen.
        });
    }
    render() {
        return (
            // react fragment, enables us to group a bunch of react eleemnts, it's like div, but div is one element more for DOM.
            <> 
               <Navbar dark expand="md">     {/* child component */}
                    <div className="container">
                        <NavbarToggler onClick = {this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/img/logo.png" height="30" width="41" alt="website"></img>
                        </NavbarBrand>
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/home">
                                            <span className="fa fa-home fa-lg"></span> Home
                                        </NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink className="nav-link" to="/aboutus">
                                            <span className="fa fa-info fa-lg"></span> About Us
                                        </NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink className="nav-link" to="/menu">
                                            <span className="fa fa-list fa-lg"></span> Menu
                                        </NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink className="nav-link" to="/contactus">
                                            <span className="fa fa-address-card fa-lg"></span> Contact Us
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>    
                    </div>
              </Navbar>
              <Jumbotron>
                <div className="container"> 
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Jumbotron content h1</h1>
                            <p>Jumbotron p, jbac acl bakc janclkna jckmdl cdknc; ckamcl;a kac;m jvnl vljnv nl svn;smlm knm; nmk kmsm kns snl svnskvnskn nsvnl kknkdnclka acnlkan cdlnc ancnal nalcnaklancka dncl,,.,.,,,</p>
                        </div>
                    </div>
                </div>
              </Jumbotron>
            </>        
        );
    }
}

export default Header;