import React from 'react';
import Login from "./component/Login/Login";
import Product from './component/Product/Product'
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
        <Login />
        <Product />
      </div>
    );
  }
}

export default App;
