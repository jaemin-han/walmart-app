import React from 'react';
import './Chart_Container.css';
import '../reset.css';
var LineChart = require("react-chartjs").Line;

const Chart_Container = props => (
  <div id="chart-container">
    <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet" />
    <input type="text" id="chart-input" placeholder="Input Store Number: 1 ~ 45" />
    {/*<LineChart data={chartData} options={chartOptions} width="600" height="250" />*/}
    <button id="chart-input-button">Enter</button>
  </div>
    );

export default Chart_Container;
