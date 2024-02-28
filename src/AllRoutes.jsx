import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import SelectProject from './Components/SelectProject';
import Todo from './Components/Todo';
import BmiCalculator from './Components/BmiCalculator';
import Contact from './Components/Contact';

const AllRoutes = () => {
  return (
    
    <Routes>
    <Route exact path='/' element={<Home />} />
    <Route exact path='/about' element={<About />} />
    <Route exact path='/contact' element={<Contact />} />
    {/* <Route exact path='/selectProject' element={<SelectProject />} /> */}
    <Route exact path='/todo' element={<Todo />} />
    <Route exact path='/bmiCalculator' element={<BmiCalculator />} />
    

  </Routes>
  )
}

export default AllRoutes