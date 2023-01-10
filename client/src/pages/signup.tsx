import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import '../assets/styles/Signup.css';

function Signup() {
  return (
    <div className="Signup d-flex align-items-center">
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
      {/* <img src="../assets/Sign_In-Sign_Up.png" alt="" /> */}
      <div className="container">
        <div className="row d-flex justify-content-end">
            <div className="col-4 form-signup ">
                <h1>Sign up</h1>
                <p>Have an account? <a href="/login">Sign in</a> </p>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleFormControlInput1"/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleFormControlInput1"/>
                </div>
                <div className="mb-3">
                    <a href="/login" className="btn btn-primary" role="button">Create Account</a>
                </div>

            </div>
        </div>
        {/* <a href="/">Home</a> */}
      </div>
    </div>
  );
}

export default Signup;
