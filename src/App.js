import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Navbar />  
      <h1>CS 230L</h1>
      <h2>Section - 01</h2>
      <p>WVU ID: 800356480</p>
      <p>Hi I am Mustafa Al-Shebeeb</p>
      <Card />
      
    </div>
  );
}

export default App;
