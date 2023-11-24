import React, { useEffect, useState } from 'react';
import EmptyView from '../../components/common/EmptyView';
import FilterPanel from '../../components/Home/FilterPanel';
import List from '../../components/Home/List';
// import SearchBar from '../../components/Home/SearchBar';
import { dataList } from '../../Constants';
import './styles.css';
import NavbarHead from '../../components/Home/NavbarHead';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from 'react-bootstrap';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 // const [startDate, setStartDate] = useState(1326240000000);

 const [filtereddate, setFilteredData] = useState([]); // Filtered cards based on applied filters
 const [startDate, setStartDate] = useState(null); // Start date for the range filter
 const [endDate, setEndDate] = useState(null); // End date for the range filter
  
  const [descriptivetypes, setDtype] = useState([
    { id: 1, checked: false, label: 'Enclosure' },
    { id: 2, checked: false, label: 'Structure' },
    { id: 3, checked: false, label: 'Cairns' },
    
    { id: 4, checked: false, label: 'Tumuli' },
    { id: 5, checked: false, label: 'Surface Deposit' },
    { id: 6, checked: false, label: 'Pond'},
    { id: 7, checked: false, label: 'Rockshelter'},
    { id: 8, checked: false, label: 'Grass'},
    { id: 9, checked: false, label: 'Terracing'},
    { id: 10, checked: false, label: 'Soil'},
    { id: 11, checked: false, label: 'Mound'},
    

    
  ]);
  const [cuisines, setCuisines] = useState([
    { id: 1, checked: false, label: 'Botswana' },
    { id: 2, checked: false, label: 'Sudan' },
    { id: 3, checked: false, label: 'Tanzania' },
    { id: 4, checked: false, label: 'Zimbabwe' },
    { id: 5, checked: false, label: 'Kenya' },
    { id: 6, checked: false, label: 'Senegal' },
    { id: 7, checked: false, label: 'Mali' },

  ]);
  const [interpretations, setInterpret] = useState([
    { id: 1, checked: false, label: 'Settlement' },
    { id: 2, checked: false, label: 'Mosque' },
    { id: 3, checked: false, label: 'Cemetery' },
    { id: 4, checked: false, label: 'Burial' },
    { id: 5, checked: false, label: 'Fort' },
    { id: 6, checked: false, label: 'Agiculture' },
    { id: 7, checked: false, label: 'Habitation' },
    { id: 8, checked: false, label: 'Terracing' },
    { id: 9, checked: false, label: 'Cattle Pen' },
    
    

  ]);

  const [list, setList] = useState(dataList);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [datepicker, serDatePicker] =useState('');

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangeChecked = (id) => {
    const cusinesStateList = cuisines;
    const changeCheckedCuisines = cusinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisines(changeCheckedCuisines);
  };


  const handleChangeCheckedDtype = (id) => {
    const cusinesStateListDtype = descriptivetypes;
    const changeCheckedCuisinesDtype = cusinesStateListDtype.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setDtype(changeCheckedCuisinesDtype);
  };

  const handleChangeCheckedInterpret = (id) => {
    const cusinesStateListInterpret = interpretations;
    const changeCheckedCuisinesInterpret = cusinesStateListInterpret.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setInterpret(changeCheckedCuisinesInterpret);
  };
  const handleRangeFilter = (startDate, endDate) => {    
    const filteredlist = dataList.filter(record =>{
        const recorddate = new Date(record.daterecord);
        const fimage = new Date(record.dateofimageione);
        //console.log(xx);
        if((startDate && (startDate  <= recorddate ) && !endDate) || (startDate && (startDate  <= fimage ) && !endDate))
          return true
        if((endDate && (endDate  >= recorddate ) && !startDate) || (endDate && (endDate  >= fimage ) && !startDate))
          return true  
        if((endDate && startDate && ((endDate  >= recorddate) && (startDate  <= recorddate))) || (endDate && startDate && ((endDate  >= fimage) && (startDate  <= fimage))))
          return true 
          return false 
          
    });
    // const filteredlist = list.filter(record =>{
    //   return true 
      
    // });
    //console.log(filteredlist)
    //.log(new Date(filteredlist[0].daterecord))
    //setFilteredData(filteredlist);
    setList(filteredlist);
    !filteredlist.length ? setResultsFound(false) : setResultsFound(true);
  };
  
  
  const handleDateChange = (startDate, endDate) => {
    setStartDate(startDate);
    setEndDate(endDate);
    handleRangeFilter(startDate, endDate);
    // console.log("startdate ",startDate);
    // console.log("enddate ", typeof endDate);
    //console.log("compare", startDate > endDate)

  };

const applyFilters = () => {
   let updatedList = dataList;
    // Rating Filter
    if (selectedRating) {
       updatedList = updatedList.filter(
         (item) => parseInt(item.rating) === parseInt(selectedRating)
       );
     }
     // Cuisine Filter
    const cuisinesChecked = cuisines
     .filter((item) => item.checked)
     .map((item) => item.label.toLowerCase());

   if (cuisinesChecked.length) {
     updatedList = updatedList.filter((item) =>
       cuisinesChecked.includes(item.cuisine)
     );
   }

   const cuisinesCheckedDtype = descriptivetypes
   .filter((item) => item.checked)
   .map((item) => item.label.toLowerCase());

 if (cuisinesCheckedDtype.length) {
   updatedList = updatedList.filter((item) =>
     cuisinesCheckedDtype.includes(item.descriptivetype)
   );
 }
 const cuisinesCheckedinterpret = interpretations
 .filter((item) => item.checked)
 .map((item) => item.label.toLowerCase());

if (cuisinesCheckedinterpret.length) {
 updatedList = updatedList.filter((item) =>
 cuisinesCheckedinterpret.includes(item.interpretation)
 );
}
   if (searchInput) {
    updatedList = updatedList.filter(
      (item) =>
        item.descriptivetype.toLowerCase().search(searchInput.toLowerCase().trim()) !==
        -1 || item.interpretation.toLowerCase().search(searchInput.toLowerCase().trim()) !==
        -1 || item.cuisine.toLowerCase().search(searchInput.toLowerCase().trim()) !==
        -1  || item.stateregion.toLowerCase().search(searchInput.toLowerCase().trim()) !== 
        -1  || item.daterecord.toLowerCase().search(searchInput.toLowerCase().trim()) !== -1
    ) 
  }
  // const filteredDateItems = updatedList.filter(item => {
  //   return item.daterecord >= startDate && item.daterecord <= endDate;
  // });  filtereddate


  if (filtereddate) {
    updatedList = updatedList.filter(
      (item) =>
        item.daterecord.toLowerCase()
    ) 
  }
  

     setList(updatedList);
     !updatedList.length ? setResultsFound(false) : setResultsFound(true);
    };
    
useEffect(() => {
    applyFilters();
}, [selectedRating, cuisines, descriptivetypes, descriptivetypes, interpretations, searchInput]);


  return (
    
    <div className='home'>
      
      <NavbarHead
        
        value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
        onSelectFilter={handleShow}
      /> 
       <div>
        
          <FilterPanel
            selectedCategory={selectedCategory}
            selectCategory={handleSelectCategory}
            selectedRating={selectedRating}
            //selectedPrice={selectedPrice}
            selectRating={handleSelectRating}
            cuisines={cuisines}
            changeChecked={handleChangeChecked}
            descriptivetypes={descriptivetypes}
            changeCheckedDtype={handleChangeCheckedDtype}
            interpretations={interpretations}
            changeCheckedinterpret={handleChangeCheckedInterpret}
            handleClose={handleClose} 
            show={show}
            />
            
           
        </div>    
      <div className='home_panelList-wrap'> 
      
        {/* Filter Panel */}
       
       
        {/* List & Empty View */}
        <div className='home_list-wrap'> 
    

          <div className="input-group">
            <span className="input-group-text" wrapperClassName="form-control border">Select date filter </span>
            &nbsp;  
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
  </div>
    
        {/* <NavbarHead
        value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      /> */}
          {resultsFound ? <List list={list} /> : <EmptyView />}
        </div>
      </div>

    </div>
  );
};

export default Home;
