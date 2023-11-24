import React from 'react';
import './styles.css';


const SearchBar =  ({ value, changeInput }) => (
 
//     <div className="container">
//     <div className="row">
//         <div className="col-12">
//             <div className="input-group">
              
//                 <input className="form-control border-secondary py-2 head" type='text'  placeholder='search descriptive type, interpretation and country' value={value} onChange={changeInput} />
//                 <div class="input-group-append">
//                     <button className="btn btn-outline-dark" type="button">
//                         <i className="fa fa-search"></i>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
<div className="form-outline mb-4">
  <input type="search" class="form-control" id="datatable-search-input" placeholder="Type to search descriptive type, interpretation and country" value={value} onChange={changeInput}/>
  {/* <label className="form-label" for="datatable-search-input">Search</label> */}
</div>

  )
export default SearchBar



