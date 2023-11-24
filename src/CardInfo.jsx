import React from 'react'
import { useLocation } from 'react-router-dom';
import './card.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel';
// import { useState } from "react";
import NavbarHead2 from './components/Home/NavbarHead2';
import {Table} from 'react-bootstrap'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import "./App.css";
// const CardInfo = () => {
//   const location = useLocation();
//   return (
//     <div>
//       <div>{location.state.bb}</div>
//     </div>
//   )
// }
// export default CardInfo
function CardInfo() {
  const location = useLocation();
  // const [toggleState, setToggleState] = useState(1);
  // const toggleTab = (index) => {
  //   setToggleState(index);
  // };
  
  return (
<>
<NavbarHead2 />


  <div className="container py-4">


    {/* <div className="border-info p-5 mb-4 bg-light rounded-3 uppercase"> */}
     
      <Table>
  
    <tr>
      
      <th scope="col">Descriptive type</th>
      <th scope="col">Interpretation</th>
      <th scope="col">Country</th>
      <th scope="col">Admin Level 1</th>
      <th scope="col">Grid No</th>
      <th scope="col">Site Name</th>
      <th scope="col">Recorder Name</th>
      <th scope="col">Date of record creation</th>

    </tr>
  
  <tbody>
    <tr>
     
      <td>{location.state.bb}</td>
      <td>{location.state.dd}</td>
      <td>{location.state.cc}</td>
      <td>{location.state.ss}</td>
      <td>{location.state.qq}</td>
      <td>{location.state.rr}</td>
      
      <td>{location.state.reconame}</td>
      <td>{location.state.ii}</td>
      
      
      
    
    </tr>
	</tbody>
</Table> 
      
<Table>
  <thead>
    <tr>
      
     <th scope="col">Images</th>
     <th scope="col">Source of Image</th>
     <th scope="col">Date of the image</th>
     <th scope="col">Seasonal condition </th>
     <th scope="col">Other conditions</th>
     <th scope="col">Description</th>

    </tr>
  </thead>
  <tbody>
    <tr>
     
      {/* <td><img className="img-fluid" src={location.state.aa} /> </td> */}
      <td><Zoom>
    <img
      className="img-fluid"
      src={location.state.aa}
      
    />
  </Zoom>
  </td>
      <td>{location.state.tt}</td>
     <td>{location.state.ff}</td>
     <td>{location.state.kk}</td>
     <td>{location.state.oo}</td>
     <td align="justify">{location.state.dne}</td>
      
      
    
    </tr>
    <tr>
     
      {/* <td><img className="img-fluid" src={location.state.cl} /> </td> */}
      <td><Zoom>
    <img
      className="img-fluid"
      src={location.state.cl}
      
    />
  </Zoom>
  </td>
      <td>{location.state.uu}</td>
     <td>{location.state.gg}</td>
     <td>{location.state.ll}</td>
     <td>{location.state.pp}</td>
     <td align="justify">{location.state.dtw}</td>
      
      
    
    </tr>
    <tr>
     
      {/* <td><img className="img-fluid" src={location.state.zz} /> </td> */}
      <td><Zoom>
    <img
      className="img-fluid"
      src={location.state.zz}
      
    />
  </Zoom>
  </td>
     <td>{location.state.uu}</td>
     <td>{location.state.kl}</td>
     <td>{location.state.ll}</td>
     <td>{location.state.pp}</td>
     <td align="justify">{location.state.dht}</td>
      
      
    
    </tr>
    <tr>
     
      {/* <td><img className="img-fluid" src={location.state.zz} /> </td> */}
      <td  colspan="5"><Zoom>
    <img
      width="400" height="300"
      src={location.state.ee}
      
    />
  </Zoom>
  </td>
     {/* <td>{location.state.uu}</td>
     <td>{location.state.gg}</td>
     <td>{location.state.ll}</td>
     <td>{location.state.pp}</td>*/}
     <td align="justify">{location.state.hbr}</td>
       
      
    
    </tr>
	</tbody>
</Table> 



    </div>

    

    <footer class="pt-3 mt-4 text-muted border-top">
      &copy; MAEASaM 2023
    </footer>
  {/* </div> */}
</>


                
  );
}

export default CardInfo;

