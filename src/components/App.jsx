import React, { Component } from 'react';
import Header from './Header/Header';
import './reset.css';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  render() {
    return (
      <div id="app-container">
        <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Megrim" rel="stylesheet" />
        <Header />
      </div>
    );
  }
}

export default App;

