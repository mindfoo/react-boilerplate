// components/Header.js
 
import React from 'react';
const logo =  '../assets/images/logo.svg'; // importing logo from src folder
import "./Header.css";
 
const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Transferências de Loja</h1>
    </header>
  );
}
 
export default Header;