import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logoo from './logoo.png';

export default function CustomNavbar() {
  const navigate = useNavigate();

  function handleLoginClick() {
    navigate('/login');
  }
  
  const logoStyle = {
    marginRight: '10px', 
    marginLeft: '10px', // Adjust the margin as needed
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" className="text-center fixed-top">
      <Navbar.Brand as={Link} to="/Firstoage" className="text-dark">
        <img src={logoo} alt="Logo" width="30" height="30" style={logoStyle}/>
        <span className="ml-2">COMPLEX.IQ</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" bg="dark"> {/* Set the bg attribute to "dark" */}
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/Firstoage" className="text-dark">Firstoage</Nav.Link>
          <Nav.Link as={Link} to="/About" className="text-dark">About</Nav.Link>
          <Nav.Link as={Link} to="/Top3" className="text-dark">Top</Nav.Link>
          <Nav.Link as={Link} to="/Complex" className="text-dark">Complex</Nav.Link>
          <Nav.Link as={Link} to="/Contacts" className="text-dark">Contacts</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link onClick={handleLoginClick} className="text-dark">LOGIN</Nav.Link>
          <Nav.Link className="text-dark"> | </Nav.Link>
          <Nav.Link className="text-dark">SIGN UP</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
