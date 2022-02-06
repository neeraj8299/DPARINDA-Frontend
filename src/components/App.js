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
import MyAccount from './LandingPage/myaccount';
import Mycart from './Mycart/Mycart';
import Categories from './Categories/Categories';
import Grocerries from './Grocerries/Grocerries';
import axios from 'axios'; 
import Myaccount from './myaccount/Myaccount';
export class App  extends Component {
 
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("https://gokonnectdev.beyond.ws/ ",  { 
      method: 'get', 
      headers: new Headers({

        apiKey : "dparinda@123"
    })})
        .then(res =>  console.log(res))
      .then(res => this.setState({ apiResponse: res }))
    
  }

componentWillMount() {
    this.callAPI();
}
render() { 

 return (
    
    <div>
      <p className="App-intro">;{this.state.apiResponse}</p>
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
          <Route path="/myaccount" exact component={Myaccount}/>
          
        </Switch>
      </Router>
    </div>
 
  )
 }
 
}
export default App