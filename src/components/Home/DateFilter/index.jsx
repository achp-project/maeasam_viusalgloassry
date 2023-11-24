import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Offcanvas } from 'react-bootstrap';
import FilterPanel from "../FilterPanel";
import './styles.css';

function DateFilter({  }) {


  return (
    <>
    <DatePicker 
      selected={startDate}
      onChange={(date) => handleDateChange(date, endDate)}
      //startDate={startDate}
      //endDate={endDate}
      placeholderText="Start Date"
      // className="w-100"
      className="form-control  "
      wrapperClassName="form-control "
    />
     &nbsp;
    <DatePicker 
      selected={endDate}
      onChange={(date) => handleDateChange(startDate, date)}
      //selectsEnd
      //startDate={startDate}
      //endDate={endDate}
     // minDate={startDate}
      placeholderText="End Date"
      className="form-control"
      wrapperClassName="form-control"
    />
    </>
  );
}

export default DateFilter;