import React from "react";
import { useHistory } from "react-router";
 import Grocerries from "../Grocerries/Grocerries";
import Navbar from "../navbar";
function Categories() {
    let history = useHistory();
    function  handleClick01(){
        history.push("/grocerries")
    }
    return (

        <div>
            <Navbar/>
            <div class="card" class="card card-dark bg-warning">
  <div class="card-header" style={{alignContent: "center"}}>
   <h3 >CATEGORIES </h3>  
  </div>
  
  <div class="card-body"  >
            <div className="Container px-8" >
        <div class="row gx-8">
    <div class="col">
    <div class="p-3 border bg-light">   

<div class="container">
  <div class="row">
    <div class="col">
    <div class="card">
                <img src="https://www.moneycrashers.com/wp-content/uploads/2018/08/grocery-delivery-1068x713.jpg" class="card-img-top" alt="GROCERRIES" />
                <div class="card-body">
                    <h5 class="card-title">GROCERRIES</h5>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary" onClick={handleClick01}>Click here!!</a>
                </div>

            </div>
            <br />
    </div>
    <div class="col">
    <div class="card" >
                <img src="https://th.bing.com/th/id/R.daaa0bfa56361584e64cef76856cd29f?rik=zxuiFmTMhAc%2fyQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-iCWLv2hDiXM%2fUM6yuDEIsQI%2fAAAAAAAAAHk%2fv2IFZwwqxUE%2fs1600%2fFruits%2band%2bVegetables%2b(1).jpg&ehk=XcnHCYznnRUt5bob%2bhjO3vEm1gPO0mVNLp6ioSjWHtk%3d&risl=&pid=ImgRaw&r=0" class="card-img-top" alt="VEGETABLES & FRUITS" />
                <div class="card-body">
                    <h5 class="card-title">VEGETABLES & FRUITS</h5>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary" onClick={handleClick01}>Click here!!</a>
                </div>
            </div> <br />
    </div>
  
  <div class="row">
    <div class="col">
    <div class="card">
                <img src="https://isteam.wsimg.com/ip/cc897551-99e6-4130-a6dd-467fb469ee1b/ols/13858_original" class="card-img-top" alt="CLOTHING" />
                <div class="card-body">
                    <h5 class="card-title">CLOTHING</h5>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary" onClick={handleClick01}>Click here!!</a>
                </div>
            </div> <br />
    </div>
    <div class="col">
    <div class="card"  >
                <img src="https://ourstore.in/assets/images/blog/school-stationary.png" class="card-img-top" alt="STATIONARY" />
                <div class="card-body">
                    <h5 class="card-title"> STATIONARY</h5>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary" onClick={handleClick01}>Click here!!</a>
                </div>
            </div> <br />
    </div>
    <div class="col">
    <div class="card"  >
                <img src="https://th.bing.com/th/id/OIP.1Xy_uMpDPGVm7U5SfNYJ7gHaGn?pid=ImgDet&rs=1" class="card-img-top" alt="ELECTRICAL APPLIANCES" />
                <div class="card-body">
                    <h5 class="card-title">ELECTRICAL APPLIANCES</h5>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary" onClick={handleClick01} >Click here!!</a>
                </div>
            </div> <br />
    </div>
    <div class="col">
    <div class="card"  >
                <img src="https://th.bing.com/th/id/OIP.0kmXchkDDLTl6jOGTtxNSwHaEP?pid=ImgDet&rs=1" class="card-img-top" alt="FOOD & BEVERAGES" />
                <div class="card-body">
                    <h5 class="card-title">FOOD & BEVERAGES </h5>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary" onClick={handleClick01}>Click here!!</a>
                </div>
            </div> <br />
    </div>
    <div class="col">
    <div class="card"  >
                <img src="" class="card-img-top" alt="DECORATIVE ITEMS" />
                <div class="card-body">
                    <h5 class="card-title">DECORATIVE ITEMS </h5>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary" onClick={handleClick01}>Click here!!</a>
                </div>
            </div> <br />
    </div>
  
  <div class="row">
    <div class="col">
    <div class="card" >
                <img src="https://th.bing.com/th/id/OIP.W9Ga2xHiRUVhdd6sMtKVpgHaEK?pid=ImgDet&rs=1" class="card-img-top" alt="SWEETS & BAKERY" />
                <div class="card-body">
                    <h5 class="card-title">SWEETS & BAKERY </h5>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary" onClick={handleClick01}>Click here!!</a>
                </div>
            </div> <br />
    </div>
    <div class="col">
    <div class="card"  >
                <img src="https://www.atlanticbridge.com/wp-content/uploads/2020/09/male-pharmacist-1.jpg " class="card-img-top" alt="pharmacy" />
                <div class="card-body">
                    <h5 class="card-title">pharmacy</h5>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary" onClick={handleClick01}>Click here!!</a>
                </div>
            </div> <br />
    </div>
    <div class="col">
      
    <div class="card"  >
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">MORE..</h5>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary" onClick={handleClick01}>Click here!!</a>
                </div>
            </div> <br />
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
    )
}


export default Categories