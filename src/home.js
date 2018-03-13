import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'

class Home extends Component {

render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1 style= {{textAlign: 'center'}}>Landing Page.......</h1>
        <p style= {{textAlign: 'center'}}>
          <Link to="/projectList/1234">SignUp</Link>
        </p>
      </div>
    );
  }
}
export default Home
