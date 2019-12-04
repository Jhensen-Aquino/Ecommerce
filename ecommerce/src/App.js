import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from "./component/Login/Login";
import Product from './component/Product/Product';
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
          <Route path="/" exact component={Login} />
          <Route path="/client" exact component={Client} />
          <Route path="/login" exact component={Login}/>
          <Route path="/product" exact component={Product}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
