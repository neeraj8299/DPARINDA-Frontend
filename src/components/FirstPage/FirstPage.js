import React from 'react'
import {  useHistory } from "react-router-dom";
import ThirdPage from '../ThirdPage/ThirdPage';
import { BrowserRouter as Router ,  Switch , Route} from "react-router-dom";
function FirstPage  () {
    let history = useHistory();
    function handleClick() {
        history.push("/second");
    }
    function handleClick1()
        {
            history.push("/third");
        }
    
    return (
        <Router>

        
        <>
        <div className="Container px-8" >
        <div class="row gx-8">
    <div class="col">
    <div class="p-3 border bg-light">
            <br/>
            <h1> D-Parinda</h1><br/> 
                     <div class="card">
  <div class="card-header">
    CUSTOMER LOGIN
  </div>
  <div class="card-body"> 
            <p style={{color:'purple', font:'-moz-initial'}}>Please Enter Details</p>
            <input type="number" placeholder="Enter phone"/> <br/> <br/>
            <input type="text" placeholder="Enter Password"/> <br/> <br/>
            <button type="button" class="btn btn-primary"  >LOG IN</button> <br/>
             <br/>  <button type="button" class="btn btn-link" onClick={handleClick1}>forget password ?</button> <br/> 
             <p>Dont have an account? Click Below</p>
            <button type="button" class="btn btn-info" onClick={handleClick}>Register here</button>
            <br/>
            
  </div>
   
  </div>
  </div>
  
  </div>
</div>
</div>
 
  </ >
 
  <Switch>
    <Route path="/third" exact component ={ThirdPage} /> 
     </Switch>
   
        </Router>
    )
}

export default FirstPage
