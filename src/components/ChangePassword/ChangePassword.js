import React from "react";
import { useHistory } from "react-router";
import LandingPage from "../LandingPage/LandingPage";

function ChangePassword(){
    let history = useHistory();
    function handleclick2(){
        history.push("/landing")
    }

    return(
<div class="card">
<div className="Container px-6" >
        <div class="row gx-4">
    <div class="col">
    <div class="card-header">
   <h4> ChangePassword Here!! </h4>
  </div>
  <div class="card-body"> 
<input type='text' placeholder='ENTER NEW PASSWORD'/> <br/> <br/>
                       
                       <input type='text' placeholder='CONFIRM NEW PASSWORD'/> <br/> <br/>
                       <button type="button" class="btn btn-success" onClick={handleclick2} >Save Changes</button>
</div> </div> </div> </div> </div>
    )
}
export default ChangePassword