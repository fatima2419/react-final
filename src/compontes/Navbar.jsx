import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logoo from './logoo.png';
import '../App.css';

export default function CustomNavbar() {
  const navigate = useNavigate();

  function handleLoginClick() {
    navigate('/Form');
  }

  const logoStyle = {
    marginRight: '10px',
    marginLeft: '10px',
  };

  const [navbarBackground, setNavbarBackground] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarBackground('white');
      } else {
        setNavbarBackground('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" bg={navbarBackground} variant="dark" className="text-center fixed-top">
      <Navbar.Brand as={Link} to="/Firstoage" className="text-dark">
        <img src={logoo} alt="Logo" width="30" height="30" style={logoStyle} />
        <span className="ml-2">COMPLEX.IQ</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" bg="dark">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/Firstoage" className="text-dark">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/About" className="text-dark">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/Top3" className="text-dark">
            Top
          </Nav.Link>
          <Nav.Link as={Link} to="/Complex" className="text-dark">
            Complex
          </Nav.Link>
          <Nav.Link as={Link} to="/Contacts" className="text-dark">
            Contacts
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link onClick={handleLoginClick} className="btn btn-light  custom-btn">
            CONTACT OUR SALES TEAM
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
