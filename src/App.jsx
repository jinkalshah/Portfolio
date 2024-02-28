import React from 'react'
import {BrowserRouter, BrowserRouter as Router} from 'react-router-dom'
import AllRoutes from './AllRoutes';
import Navigation from './Components/Navigation';


function App() {

  
  return (
    <>
    <Router>
    <Navigation />
        <AllRoutes />
      </Router>
    </>

      
    
  
  );
}

export default App;
