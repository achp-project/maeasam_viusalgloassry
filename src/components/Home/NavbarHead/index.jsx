import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Offcanvas } from 'react-bootstrap';
import FilterPanel from "../FilterPanel";
import './styles.css';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import RegisterForm from "../../../RegisterForm";

function NavbarHead({ value, changeInput, onSelectFilter }) {

  function refreshPage() {
    window.location.reload(false);
  }
  const navigate  = useNavigate()
  function handleClick() {
    navigate("/RegisterForm");
  }  
  return (
//     <Navbar bg="light" expand="lg">
//       <Container fluid>
 
//         <Navbar.Brand>Visual Glossary</Navbar.Brand>
        
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link href="">Home</Nav.Link>
//             <Nav.Link href="https://maeasam.org/">MAEASaM</Nav.Link>
//           </Nav>
        
     
//           <div className="form-group has-search">
//             <span className="fa fa-search form-control-feedback"></span>
//             <input type="text" className="form-control search-query" placeholder="Search descriptive type, interpretation country, state/region" value={value} onChange={changeInput} />
//           </div>
//           &nbsp;
//           <Button variant="primary" onClick={onSelectFilter}>
//         {/* Open Filters */}
//         Advanced Search
//       </Button>
//       &nbsp;
//       <Button variant="primary" onClick={refreshPage}>
//         Reset Filters
//       </Button> 
//       &nbsp;
//       <Button variant="primary" onClick={handleClick}>
//         Login
//       </Button> 
//     </Navbar.Collapse>
//     </Container>
//     </Navbar>
//   );
// }

  <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Visual Glossary</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 Select Options
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="https://maeasam.org/">MAEASaM</Nav.Link>
                  
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    className="col-xs-4"
                    placeholder="Search descriptive type, interpretation country, state/region"
                    aria-label="Search"
                    value={value} 
                    onChange={changeInput}
                    
                  />
                  &nbsp;
                  <Button variant="outline-success" className=" btncolor" onClick={onSelectFilter}>Filters</Button> &nbsp;
                  <Button variant="outline-success"className=" btncolor"  onClick={refreshPage}>Reset</Button>
              
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarHead;