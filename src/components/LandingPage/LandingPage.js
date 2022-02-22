import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch , Link } from 'react-router-dom/cjs/react-router-dom.min'
import Navbar from '../navbar'
import { useHistory } from 'react-router';
import Mycart from '../Mycart/Mycart';
import MyAccount from './myaccount';
 function LandingPage () {
  
   
      
    let history = useHistory();
    function CartClick(){
      history.push("/Mycart")
    }

    return (

   <>
     
 <div>  
<form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>
<br/> <br/>
<div class="col-sm-4 col-md-12">
    <div class="container">
        <div class="row">
        <div class="card">
  <div class="card-body">
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src=" https://th.bing.com/th/id/OIP.xUSaGwcL5AxrbliWbQHBFgHaEo?pid=ImgDet&rs=1  " class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="  https://th.bing.com/th/id/R.3d88a927f8529dcba03364b09d98adbe?rik=JYmQaMVSULpYQg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images.jpg&ehk=BNPsuSOUR7ATZ3EpRwxx1xFl7LUbO3tYlu1wFLCBrCE%3d&risl=&pid=ImgRaw&r=0" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://th.bing.com/th/id/OIP.oONTG4n0OaI0NCZvZXXupQHaEo?pid=ImgDet&rs=1" class="d-block w-100" alt="..."/>
    </div> 
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>

  </div>
</div>
<div class="card">
  <div className= "p-3 mb-2 bg-info text-dark"> 
  <div class="card-body">
        <br/> <br/> 
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
</div>
 
 
</>










 
    )
  }


export default LandingPage
