import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './styles.css';



function NavbarHead({ value, changeInput }) {
  return (
    <>
    {['md'].map((expand) => (
      <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand>Visual Glossary</Navbar.Brand>
         
        </Container>
      </Navbar>
    ))}
     </>
  );
  
}

export default NavbarHead;