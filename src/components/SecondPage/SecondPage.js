import React from 'react'
import { BrowserRouter as Router ,  Switch , Route} from "react-router-dom";
import { useHistory } from 'react-router';
import Navbar from '../navbar';


 

 export default function SecondPage (){
  let history = useHistory();
  function handleClick3() {
      history.push("/first");
  }
  function handleclick2(){
    history.push("/landing")
}

        return (
          <Router>
            <>
            <Navbar/>
            <div class="card">
            <br/> <br/>
            <h4>ENTER DETAILS HERE</h4>
       <div className="Container px-8" >
       <div class="col"> 
       <div class="p-3 border bg-light">
       <div class="card-header">
       
         <h4>Registation Form</h4>  <br/> </div>
         <div class="card-body">
         <form>
           <h6>UserName</h6>
           <input type="text" placeholder='UserName'/> <br/>
           <div class="form-check">
<h6>GENDER</h6>
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    MALE
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
    FEMALE
  </label>
</div>

           <h6>Enter Phone Number</h6>
           <input type="number" placeholder='phone No'/>  <br/> 
           <h6>enter email here</h6>
           <input  type="text"placeholder='enter email'></input> <br/> 
           <h6>Address</h6>
           <input  type="text"placeholder='Address'></input> <br/> 
           <h6>enter password here</h6>
           <input type="password" placeholder='password'></input> <br/> <br/>
           <button type="button" class="btn btn-success" onClick={handleclick2}>Sign In</button>
         </form>
<Switch>
  <Route path="/first" exact Component={"FirstPage"}/>

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



