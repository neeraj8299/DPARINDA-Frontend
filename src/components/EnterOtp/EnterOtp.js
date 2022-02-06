import React from "react";
import {useHistory} from "react-router-dom";
import ChangePassword from "../ChangePassword/ChangePassword";
function EnterOtp(){
    let history = useHistory();
    function handleClick5() {
        history.push("/changepassword");
    }
    return(
         
            <div className="Container px-6" >
        <div class="row gx-8">
    <div class="col">
    <div class="p-3 border bg-light"> 
    <div class="card">
  <div class="card-header">
    <h5>OTP sent.  VERIFY here!!! </h5>
  </div>
  <div class="card-body">
        <input type='number' placeholder='ENTER OTP'/>     <br/>   <br/>  
                      <button type="button" class="btn btn-primary" onClick={handleClick5}>VERIFY OTP</button> <br/> <br/>
                      
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>  
    )

}

export default EnterOtp