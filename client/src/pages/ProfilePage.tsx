import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Navbar from '../components/Navbar';

function Home() {
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
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col-3 profile">
            <p>La Minh Toan</p>
            <p>Hanoi</p>
            <hr />
            <p>10k follows</p>
            <p>600 following</p>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
            <hr />
            <p>MY PAGE</p>
            <p>Toan La 12</p>
            <p>Toan La 12</p>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Edit
            </button>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <p>hheheh</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div> 
        </div>

    </div>
  );
}

export default Home;
