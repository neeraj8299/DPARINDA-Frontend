import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from 'react-router';
import Navbar from '../navbar';
import axios from 'axios';



export default function Register() {
  
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const history=useHistory();
   async function signUp()
  {
    let item={name,email,password}
    console.warn(item)

    let result= await fetch("http://localhost:8000/api/register",{
      method:'POST',
      body:JSON.stringify(item),
      headers:{
        "Content-Type":'application/json',
        "Accept":'application/json'
      }
    })
       result= await result.json()
       localStorage.setItem("user-info",JSON.stringify(result))
       history.push("/homePage")
  }
  

  function handleClick3() {
    history.push("/");
  }
  function handleclick2() {
    history.push("/Login")
  }
  

  return (
    <Router>
      <> 
        <div class="card">
          <h2>D Parinda</h2> <br /> <br />
          <h4>ENTER DETAILS HERE</h4>
          <div className="Container px-8" >
            <div class="col">
              <div class="p-3 border bg-light">
                <div class="card-header">

                <h4>Registation Form</h4>  <br /> </div>
                <div class="card-body">
                  <form>
                    <h6>UserName</h6>
                   <input type="text"  value={name} onChange={(e)=>setName(e.target.value)} placeholder='UserName' /> <br />
                   <h6>enter Email</h6>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter email'></input> <br />
                    <h6>enter Address</h6>
                    <input type="text"   placeholder='enter address'></input> <br/>
<h6>GENDER</h6>
                    <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Male
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
    Female
  </label>
</div> <br/>

                    <h6>enter password here</h6>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}placeholder='password'></input> <br /> <br />
                    <h6>Re-Confirm Password</h6>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}placeholder='password'></input> <br /> <br />
                    <button type="submit" class="btn btn-success" onClick={signUp} >Sign Up</button> <br/>
                    
 
                  </form>
                  <Switch>
                    <Route path="/first" exact Component={"Login"} />

                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Router>

  )
}