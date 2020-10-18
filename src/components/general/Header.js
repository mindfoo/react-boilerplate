// components/Header.js
 
import React from 'react';
const logo =  '../assets/images/logo.svg'; // importing logo from src folder
import "./Header.scss";
 
const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2 className="App-title">Transferências de Loja</h2>
    </header>
  );
}
 
export default Header;