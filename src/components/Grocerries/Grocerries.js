import React from "react";
import {useHistory} from "react-router-dom";
import { BrowserRouter as Router ,  Switch , Route} from "react-router-dom";
import Navbar from "../navbar";
function Grocerries(){
  let history = useHistory();
  function CartClick(){
    history.push("/Mycart")
  }
    return(
<Router>  
<> 
   
<div class="card">
  <div class="card-header">
    <h4>get fresh and healthy</h4>
  </div>
  <div class="card-body"> 
<div className="Container px-8" >
        <div class="row gx-8">
<div class="container">
  <div class="row">
    <div class="col">
    <div>
<div class="card" style={{width: "80%"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text"> product</p>
   <br/> <a href="#" class="btn btn-primary" onClick={CartClick} >Add to Cart</a>
  </div>
</div>
        </div>
    </div>
    <div class="col">
    <div class="card" style={{width: "80%"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">product </p>
    <br/> <a href="#" class="btn btn-primary"  onClick={CartClick}>Add to Cart</a>
  </div>
</div>
    </div>
    <div class="col">
    <div>
<div class="card" style={{width: "80%"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text"> product </p>
    <br/> <a href="#" class="btn btn-primary"  onClick={CartClick}>Add to Cart</a>
  </div>
</div>
        </div>
    </div>
  </div>
 <br/> <br/>
  <div class="container">
  <div class="row">
    <div class="col">
    <div class="card" style={{width: "80%"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text"> product </p>
    <br/> <a href="#" class="btn btn-primary"  onClick={CartClick}>Add to Cart</a>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" style={{width: "80%"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text"> product </p>
    <br/> <a href="#" class="btn btn-primary"  onClick={CartClick}>Add to Cart</a>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" style={{width: "80%"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">product </p>
    <br/> <a href="#" class="btn btn-primary"  onClick={CartClick}>Add to Cart</a>
  
  </div>
</div>
    </div>
  </div>
</div>

<br/> <br/>
<div class="container">
  <div class="row">
    <div class="col">
    <div class="col">
    <div class="card" style={{width: "80%"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text"> product </p>
    <br/> <a href="#" class="btn btn-primary"  onClick={CartClick}>Add to Cart</a>
  </div>
</div>
    </div>
    </div>
    <div class="col">
    <div class="col">
    <div class="card" style={{width: "80%"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">product </p>
    <br/> <a href="#" class="btn btn-primary"  onClick={CartClick}>Add to Cart</a>
  </div>
</div>
    </div>
    </div>
    <div class="col">
    <div class="col">
    <div class="card" style={{width: "80%"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text"> product </p>
    <br/> <a href="#" class="btn btn-primary"  onClick={CartClick}>Add to Cart</a>
  </div>
</div>
    </div>
    </div>
  </div>
</div>


</div>


</div>
</div>

</div>
<Switch>
  <Route to path="/Mycart" exact component={"Mycart"}/>
</Switch>

       
        </div>
       
        </>
        </Router>
    )
}


export default  Grocerries