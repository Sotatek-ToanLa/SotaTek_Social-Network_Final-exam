import React from 'react';
import logo from '../assets/Logo.png';
import avatar from '../assets/avatar.jpg'
// import './App.css';

function Home() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          
          <a className="navbar-brand" href="#"><img src={logo} alt="logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
              <li className="nav-item mx-3 d-flex align-items-center">
                <i className="bi bi-house-door d-inline"></i>
                <a className="nav-link d-inline" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item mx-3 d-flex align-items-center">
                <i className="bi bi-play-circle d-inline"></i>
                <a className="nav-link d-inline" href="#">Watch</a>
              </li>
              <li className="nav-item mx-3 d-flex align-items-center">
                <i className="bi bi-cart-dash d-inline"></i>
                <a className="nav-link d-inline" href="#">Marketplace</a>
              </li>
              <li className="nav-item mx-3 d-flex align-items-center">
                <i className="bi bi-people d-inline"></i>
                <a className="nav-link d-inline" href="#">Group</a>
              </li>
              <li className="nav-item mx-3 d-flex align-items-center justify-content-end">
                <img src={avatar} className="rounded-circle w-25 h-25 d-inline" alt="avatar" />
                <a className="nav-link d-inline" href="#">Toan La</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Home;
