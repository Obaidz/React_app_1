import React, {Component} from 'react';
import { Navbar, NavbarBrand , Jumbotron } from 'reactstrap';  // frist reactstrap componet we called.

class Header extends Component {
    render() {
        return (
            // react fragment, enables us to group a bunch of react eleemnts, it's like div, but div is one element more for DOM.
            <> 
               <Navbar dark>     {/* child component */}
                    <div className="container">
                    <NavbarBrand href="/"> Navbar brand Yo </NavbarBrand>
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