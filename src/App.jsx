import React from 'react'
import './App.css';
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom';
import CardInfo  from './CardInfo';

const App = () => {
    return (
        <>
        <Routes>
            <Route exact path='/'  element={<Home />}  />
            <Route path='/CardInfo' element={<CardInfo />} />
        </Routes>
        </>
    )
} 
export default App
