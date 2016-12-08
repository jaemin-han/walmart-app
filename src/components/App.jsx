import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import About from './About/About';
import Chart_Container from './Chart_Container/Chart_Container';

import './reset.css';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

 componentDidMount() {
    this.getAllData();
  }

getAllData() {
    fetch('localhost:4000/')
        .then(r => r.json())
        .then((data) => {
          this.setState({
            data: data,
          });
        })
        .catch(err => console.log('getAllData', err));
  }

  render() {
    return (
      <div id="app-container">
        <Header />
        <Chart_Container data={this.state.data} />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;

