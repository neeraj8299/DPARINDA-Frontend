import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch , Link } from 'react-router-dom/cjs/react-router-dom.min'
import Navbar from '../navbar'
import { useHistory } from 'react-router';
import Mycart from '../Mycart/Mycart';
 function LandingPage () {
  
   
      
    let history = useHistory();
    function CartClick(){
      history.push("/Mycart")
    }

    return (

   <>
    <Navbar/>
<br/> <br/>
<div>

<div class="col-sm-6 col-md-8">
    <div class="container">
        <div class="row">
            <div class="col">

                <img src="https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?" height={"400px"} width={"400px"} class="img-fluid" alt="Something To Show"></img>
            </div>

            <div>
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
            </div>
        </div>
    </div>
</div>
</div>
 
</>










 
    )
  }


export default LandingPage
