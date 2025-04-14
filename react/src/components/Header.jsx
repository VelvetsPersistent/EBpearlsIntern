import React from 'react';
import '../styles/header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-wrapper">
      <img src="/assets/logo.png" alt="Logo" className="logo" />
      </div>
      <nav className="menu">
        
          <li className="menu-item">Products</li>
          <li className="menu-item">Solutions</li>
          <li className="menu-item">Help center</li>
          <li className="menu-item">Get started</li>
        
      </nav>
      <div className="login-area">
        <button className="login-btn">Login</button>
        <button className="demo-btn">Request a Demo</button>
      </div>
    </header>
  );
}

export default Header;
