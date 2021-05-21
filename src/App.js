import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import Main from "./components/Main/Main"
import { FooterContainer } from './containers/Footer'
import './App.css';
import JumpStart from "./components/Jumpstart"

function App() {
  return (
    <div className="App">
      <Navbar />
      <JumpStart/>
      <Main/>
      <FooterContainer/>

      
    </div>
  );
}

export default App;
