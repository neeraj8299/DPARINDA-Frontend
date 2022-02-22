import React from "react";
import Navbar from "../navbar";
import { useHistory } from "react-router";
function Mycart() {
  let history= useHistory()
  function handleclick2(){
    history.push("/landing")
}
  return (

<>
    <div class="container">
      <div class="row">
        <div class="col-md-4"> <table class="table">
          <thead>
            <tr>
              <th scope="col">PRODUCT</th>
              <th scope="col">PRICE</th>
              <th scope="col">QUANTITY</th>
              <th scope="col">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><div class="card" style={{ width: "18rem" }}>
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text"> DESCRRIPTION.</p>
                </div>
              </div></th>
              <td> $$$</td>
             <td> <div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-danger">-</button>
  <button type="button" class="btn btn-warning">1</button>
  <button type="button" class="btn btn-success">+</button>
</div></td>
             <td>$$</td>
            </tr>
            <tr>
              <th scope="row"><div class="card" style={{ width: "18rem" }}>
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text"> DESCRRIPTION.</p>
                </div>
              </div></th>
              <td> $$$</td>
              <td> <div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-danger">-</button>
  <button type="button" class="btn btn-warning">1</button>
  <button type="button" class="btn btn-success">+</button></div></td>
              <td>$$</td>
            </tr>
            <tr>
              <th scope="row"><div class="card" style={{ width: "18rem" }}>
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text"> DESCRRIPTION.</p>
                </div>
              </div></th>
              <td > $$</td>
              <td> <div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-danger">-</button>
  <button type="button" class="btn btn-warning">1</button>
  <button type="button" class="btn btn-success">+</button></div></td>
              <td>$$$</td>
            </tr>
          </tbody>
        </table>

          <button type="button" class="btn btn-secondary" onClick={handleclick2}>Continue Shopping</button>
          <button type="button" class="btn btn-success">Update Cart </button>
        </div>
        <div class="col-md-4 offset-md-4">
          <div class="card">
            <div class="card-header">
              CART TOTAL
            </div>
            <div class="card-body">
              
              <table>
                <tbody>  
                  <tr>  <th>Sub Total</th>
                 <br/> <br/> <th> $$$$</th> </tr> <br />
                  <tr>    <th>Shipping Charge </th>  <br />
                       <th>$$$</th>
                    </tr> <br />
                  <tr>  <th> Grand Total

                  </th> <th>$$$</th> </tr> <br /> <br/>
                </tbody> 
              </table>
              
              <a href="#" class="btn btn-primary"> Proceed to Payment</a>
            </div>
            
            <br/>
<div>
<h5>COUPON</h5> 
<input type="text" placeholder="ENTER COUPON CODE"/> <br/> <br/>
<div class="d-grid gap-1 col-12 mx-auto">
  <button class="btn btn-primary" type="button">APPLY COUPON</button>
</div>
</div>
          </div></div>
      </div>
      
    </div>

 
</>
  )
}


export default Mycart