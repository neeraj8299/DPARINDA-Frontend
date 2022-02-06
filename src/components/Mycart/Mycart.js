import React from "react";
import Navbar from "../navbar";

function Mycart() {
    return(
        <div>
      
     <Navbar/>





     <div class="container">
  <div class="row">
    <div class="col">
    <div class="vstack gap-3">
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Products</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col"> Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">

      <div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">product title.</p>
  </div>
</div>


      </th>
      <td>rate</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row"> <div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">product title.</p>
  </div>
</div></th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row"> <div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">product title.</p>
  </div>
</div></th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
      </div>
        </div>
    </div>
    <div class="col">
      2 of 2
    </div>
  </div>
</div>





      
    )
}


export default  Mycart