import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './MyComponents/UserInput/UserInput';
import UserOutput from './MyComponents/UserOutput/UserOutput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserOutput username="Fadi">we are using the content </UserOutput>
        <UserOutput username="another user">Another Text </UserOutput>
        <UserOutput username="another username goes here">The Best Text </UserOutput>
      </div>
    );
  }
}

export default App;
