import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Chart_Container from './Chart_Container/Chart_Container';

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
        <Chart_Container />
        <Footer />
      </div>
    );
  }
}

export default App;

