import React from 'react'
import { useLocation } from 'react-router-dom';

//import './card.css';


// import { useState } from "react";
import NavbarHead2 from './components/Home/NavbarHead2';

import "./App.css";

function RegisterForm() {
  const location = useLocation();

  
  return (
<>
<NavbarHead2 />
</>


                
  );
}

export default RegisterForm;

