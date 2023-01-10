import React from 'react';
// import logo from './logo.svg';
import '../assets/styles/Login.css';

function Login() {
  return (
    <div className="Login d-flex align-items-center">
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
            <div className="col-4 form-login ">
                <h1>Sign in</h1>
                <p>Don't have an account? <a href="/signup">Sign up</a> </p>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleFormControlInput1"/>
                </div>
                <div className="mb-3">
                    <a href="/" className="btn btn-primary" role="button">Signin</a>
                </div>

            </div>
        </div>
        {/* <a href="/">Home</a> */}
      </div>
    </div>
  );
}

export default Login;
