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
<<<<<<< HEAD
          {this.props.children && React.cloneElement(this.props.children, {
          state: this.state })}
        <Footer />
=======
        <Chart_Container />
>>>>>>> master
      </div>
    );
  }
}

export default App;

