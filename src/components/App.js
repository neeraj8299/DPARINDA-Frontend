import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import FirstPage from './FirstPage/FirstPage';
import SecondPage from './SecondPage/SecondPage';
import ThirdPage from './ThirdPage/ThirdPage';
import EnterOtp from './EnterOtp/EnterOtp';
import ChangePassword from './ChangePassword/ChangePassword'
import Mycart from './Mycart/Mycart';
import Categories from './Categories/Categories';
import Grocerries from './Grocerries/Grocerries';
import MyAccount from './LandingPage/myaccount';
 
export class App  extends Component {
  
render() { 

 return (
    
    <div  class="p-3 mb-2 bg-warning text-dark">
       
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/first" exact component={FirstPage} />
          <Route path="/second" exact component={SecondPage} />
          <Route path="/third" exact component={ThirdPage} />
          <Route path="/landing" exact component={LandingPage}/>
          <Route path="/enterotp" exact component={EnterOtp}/>
          <Route path="/changepassword" exact component={ChangePassword}/>
           <Route path="/myaccount" exact component={MyAccount}/>
          <Route path="/Mycart" exact component={ Mycart}/>
          <Route path="/categories" exact component={Categories}/>
          <Route path="/grocerries" exact component={ Grocerries}/>
          
          
        </Switch>
      </Router>
    </div>
 
  )
 }
 
}
export default App