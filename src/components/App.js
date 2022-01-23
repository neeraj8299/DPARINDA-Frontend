import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import FirstPage from './FirstPage/FirstPage';
import SecondPage from './SecondPage/SecondPage';
import ThirdPage from './ThirdPage/ThirdPage';
function App() {
    
    
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={FirstPage} />
          <Route path="/first" exact component={FirstPage} />
          <Route path="/second" exact component={SecondPage} />
          <Route path="/third" exact component={ThirdPage} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
