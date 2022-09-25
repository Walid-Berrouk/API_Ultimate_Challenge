import axios from 'axios';
import React, { useState } from 'react'
import { baseUrl } from '../shared/baseUrl';

export default function SignUp() {

  const [account, setAccount] = useState({
    firstname: "",
    lastname: "",
    job: "",
    age: "",
    codeName: "",
    email: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post(`${baseUrl}/profiles`,
      {
        body: {
            profile: account
        }
      }
    )
    // Take a look at the console and see the res.data attribute
    .then(res => {
      console.log(res)
      alert(res.statusText)
    })
    .catch(error => {
      console.log(error)
      alert(error.message)
    })

  }

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
    <div className="row align-items-center g-lg-5 py-5">
      <div className="col-lg-7 text-center text-lg-start">
        <h1 className="display-4 fw-bold lh-1 mb-3">Vertically centered hero sign-up form</h1>
        <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
      </div>
      <div className="col-md-10 mx-auto col-lg-5">
        <form className="p-4 p-md-5 border rounded-3 bg-light" onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="John"
                  value={account.firstname} onChange={(event) => setAccount({...account, firstname: event.target.value})}/>
            <label htmlFor="floatingInput">First Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="Doe"
                  value={account.lastname} onChange={(event) => setAccount({...account, lastname: event.target.value})} />
            <label htmlFor="floatingInput">Last Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="Doe"
                  value={account.job} onChange={(event) => setAccount({...account, job: event.target.value})} />
            <label htmlFor="floatingInput">Job</label>
          </div>
          <div className="form-floating mb-3">
            <input type="number" className="form-control" id="floatingInput" placeholder="Doe" 
                  value={account.age} onChange={(event) => setAccount({...account, age: event.target.value})}/>
            <label htmlFor="floatingInput">Age</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="Doe"
                  value={account.codeName} onChange={(event) => setAccount({...account, codeName: event.target.value})} />
            <label htmlFor="floatingInput">Code Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                  value={account.email} onChange={(event) => setAccount({...account, email: event.target.value})} />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" 
                  value={account.password} onChange={(event) => setAccount({...account, password: event.target.value})} />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
          <hr className="my-4" />
          <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
        </form>
      </div>
    </div>
  </div>
  )
}
