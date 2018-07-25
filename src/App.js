import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './MyComponents/UserInput/UserInput';
import UserOutput from './MyComponents/UserOutput/UserOutput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput />
        <UserOutput />
      </div>
    );
  }
}

export default App;
