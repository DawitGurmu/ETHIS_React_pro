import React from 'react';
import {Navbar,NavDropdown,Badge,Nav} from 'react-bootstrap';

function navigationbar(){
  return (
   <div className="fixed-top">
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
   <Badge variant="success">EHISTORY</Badge>
   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
   <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="mr-auto">
       <Nav.Link  href="/">Home</Nav.Link>
   
       <Nav.Link  href="News">News</Nav.Link>
       
       <Nav.Link  href="Biography">Biography</Nav.Link>
      
       <Nav.Link  href="City">Citys</Nav.Link>
        
       <Nav.Link  href="Volunteer">Volunteer</Nav.Link>
        
       <Nav.Link  href="Comments">Comments</Nav.Link>
        
       
       </Nav>

    </Navbar.Collapse>
  </Navbar>
     </div>
    
  );
}
export default navigationbar;