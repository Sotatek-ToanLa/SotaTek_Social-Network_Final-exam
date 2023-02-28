import React from 'react';
// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import ProfilePage from './pages/ProfilePage'
import './assets/styles/App.css';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ProfilePage" element={<ProfilePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
