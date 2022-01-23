import React from 'react'
import { BrowserRouter as Router ,  Switch , Route} from "react-router-dom";

 export default function SecondPage (){
        return (
          <Router>
            <>
            <div class="card">
            <h2>D Parinda</h2> <br/> <br/>
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
           <h6>Enter Phone Number</h6>
           <input type="number" placeholder='phone No'/>  <br/> 
           <h6>enter email here</h6>
           <input  type="text"placeholder='enter email'></input> <br/> 
           <h6>enter password here</h6>
           <input type="password" placeholder='password'></input> <br/> <br/>
           <button type="button" class="btn btn-success">Sign In</button>
         </form>
<Switch>
  <Route/>

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



