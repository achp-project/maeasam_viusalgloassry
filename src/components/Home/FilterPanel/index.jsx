import React, { useState } from 'react';
// import { categoryList, ratingList} from '../../../Constants';
// import FilterListToggle from '../../common/FilterListToggle';
import './styles.css';
import CheckboxProton from '../../common/CheckboxProton';
import Checkboxdtype from '../../common/Checkboxdtype';
import Checkboxinterpret from '../../common/Checkboxinterpret';
// import Collapsible from 'react-collapsible';
// import { BsChevronDown } from "react-icons/bs"; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BsCaretDown } from "react-icons/bs";


import Accordion from 'react-bootstrap/Accordion';

import { Button, Offcanvas } from 'react-bootstrap';

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact'


const FilterPanel = ({
  // selectToggle, 
  // selectedRating, 
  // selectRating ,
  cuisines,
  descriptivetypes,
  changeChecked,
  changeCheckedDtype, 
  interpretations,
  changeCheckedinterpret,
  show,
  handleClose

}) => {

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (    
    <> 
     {/* <Button variant="primary" onClick={handleShow}>
        Open Filters
      </Button> */}

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Select Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Accordion defaultActiveKey="" flush>
      <Accordion.Item eventKey="0">
      
      <Accordion.Header><p className= 'fs'>Descriptive Type</p></Accordion.Header>
        <Accordion.Body>
        {descriptivetypes.map((descriptivetype) => (
                   <Checkboxdtype className = 'head'
                     key={descriptivetype.id}
                     descriptivetype={descriptivetype}
                     changeCheckedDtype={changeCheckedDtype}
                   />
               ))}      
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header><p className= 'fs' >Interpretation</p></Accordion.Header>
        <Accordion.Body>
        {interpretations.map((interpretation) => (
                 <Checkboxinterpret className = 'head'
                   key={interpretation.id}
                   interpretation={interpretation}
                 changeCheckedinterpret={changeCheckedinterpret}
               />
             ))}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><p className= 'fs' >Country</p></Accordion.Header>
        <Accordion.Body>
        {cuisines.map((cuisine) => (
                <CheckboxProton className = 'head'
                   key={cuisine.id}
                   cuisine={cuisine}
                   changeChecked={changeChecked}
               />
             ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default FilterPanel;
