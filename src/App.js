import React from 'react';
import NavBar from './components/NavBar';
import AppRoutes from './AppRoutes';
import './App.css';


function App() {


  return (
    <div className="App">
      <NavBar />
      <div className='ui center aligned container'>
        <h1 className='header'>Shoply - where you can buy great stuff!</h1>
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
