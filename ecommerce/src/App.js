import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from "./component/Login/Login";
import Client from "./component/Client";
import './App.css';

class App extends React.Component {
  state = {
    username: '',
    password: '',
    userType: '',
    isLoggedIn: false
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login}></Route>
            <Route path="/client" component={Client} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
