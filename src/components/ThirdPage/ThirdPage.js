import React, { Component } from 'react'

class ThirdPage extends Component {
    render() {
        return (
            <> 

                  <div>
                  <div class="container px-4">
  <div class="row gx-5">
    <div class="col">
    <div class="p-3 border bg-light">
                      <h4>Reset Your Password</h4>
                       
                       <div>
                       </div>
                      <input type='number' placeholder='Enter Phone NO'/> <br/> <br/>
                      <button type="button" class="btn btn-info">GET OTP</button> <br/> <br/>
                      <input type='number' placeholder='ENTER OTP'/>     <br/>   <br/>  
                      <button type="button" class="btn btn-primary">VERIFY OTP</button> <br/> <br/>
                      <input type='text' placeholder='ENTER NEW PASSWORD'/> <br/> <br/>
                       
                      <input type='text' placeholder='CONFIRM NEW PASSWORD'/> <br/> <br/>
                      <button type="button" class="btn btn-success">Save Changes</button>
                  </div>
              </div>
              </div>
              </div>
              </div>
                  </>
        
            
        )
        
    }
}

export default ThirdPage
