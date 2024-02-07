import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
// import viteLogo from './vite.svg'; // Assuming the path is correct
import './App.css';
// import Comp1 from "../public/comp/comp";


import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Comp1 from '../public/comp/comp'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Comp2 from '../public/comp/comp2'
import React, { Comp } from 'react';
import All from '../public/comp/all';

function App() {
console.log();
console.log('ssssss');
  return (
   
 <BrowserRouter>

 <Routes>
  <Route path='/' element={<Comp1/>} />
  <Route path='/quiz' element={<Comp2  />} />
  <Route path='/allquiz' element={<All/>}/>
 </Routes>
 
 </BrowserRouter>


  );
}

export default App;
