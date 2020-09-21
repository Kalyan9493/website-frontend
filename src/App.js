import React from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import Registration from './components/auth/Registration';
import Login from './components/auth/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Registration/>
    </div>
  );
}

export default App;
