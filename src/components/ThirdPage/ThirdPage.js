import React, { Component } from 'react'
import { useHistory } from 'react-router';
import EnterOtp from '../EnterOtp/EnterOtp'; 
import Navbar from '../navbar';
export default function ThirdPage() {
    
    let history = useHistory();
   
    
    function handleClick4(){
        history.push("/enterotp")
    }
        
        return (
            <> 

                  
                  <div class="container px-4">
  <div class="row gx-5">
    <div class="col">
    <div class="p-3 border bg-light">
                      <h4>Reset Your Password</h4>
                       
                       <div>
                       </div>
                      <input type='number' placeholder='Enter Phone NO'/> <br/> <br/>
                      <button type="button" class="btn btn-info" onClick={handleClick4} >GET OTP</button> <br/> <br/>
                       
                  </div>
              </div>
              </div>
              </div>
             
                  </>
        
            
        )
        
    }



