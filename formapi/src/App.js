// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./componants/navbar";
import car from './images/car.jpg';
import React, { useState } from 'react';
import axios from "axios";
// import Stringify from 'react-stringify'



function App() {
  const [email , setEmail] = useState('')
  const [password , setPasswoed] = useState('') 
  // console.log(email , password)
  const handleemail = (e) =>{
   setEmail(e.target.value)
  }
  const handlepassword = (e) =>{
    setPasswoed(e.target.value)
  }
  const headers = {
    'content-type': 'application/json',
    'Authorization': 'Token bba27954e46823f1f82ff2c89d19f5802e46fd3f'
  }
  
  const handleapi = () =>{
    const deta = (email , password)
    console.log({deta})
    const url = 'https://reqres.in/api/login' // API HAVEN`T WORK , API DOSENT POST MY DATA   // BUT THE ERROR PART IS WORKING 
      axios.post(url,{headers:headers},{
      name: email,
      id: password,
      
      
    })
    .then((result) =>{
      console.log(result.data)
      alert('login success')
    })
    .catch((error) =>{
      console.log(error)
      alert('Missing Password')
    })
  }
  return (
    <>
      <Navbar></Navbar>

      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-4 mv-1">
              <form className="center-1 align-self-center">
                <div className="mb-3">
                  <center>

                  <h1 className="center">
                    Welcome Back
                  </h1>
                  <div id="emailHelp" className="form-text">
                    Sub title text gose here
                  </div>
                  </center>
                  <label htmlFor="exampleInputEmail1" className="form-label" >
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange = {handleemail}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="EmailAdress"
                    required
                  />
                  
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                  value={password}
                  onChange = {handlepassword}
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    required
                  />
                </div>
                <button onClick={handleapi} className="btn btn-prim btn-2">
                  Submit
                </button>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Remember password

                  </label>
                  <label className="mx forget" htmlFor=""><a href="/">
                    forget password?
                    </a> 
                    </label>
                </div>
              </form>
            </div>
              <div className="col-sm-4 col-md-4 ">

              <img src={car} className = " image-1" alt="" />

              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
