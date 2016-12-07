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
        <Header />
      </div>
    );
  }
}

export default App;

