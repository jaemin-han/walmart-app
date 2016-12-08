import React from 'react';
import './About.css';

const About = React.createClass({
  render: function() {
    return(
      <div className="about-container">
      <link href="https://fonts.googleapis.com/css?family=Nunito+Sans" rel="stylesheet" />
        <h2 id="about_h2">About</h2>
        <p id="about_p">You are provided with historical sales data for 45 Walmart stores
        located in different regions. Each store contains a number of departments,
        and you are tasked with predicting the department-wide sales for each store.
        <br />
        <br />
        *This is the historical training data, which covers to 2010-02-05 to 2012-11-01.
        <br />
        *Within this file you will find the following fields
        <br />
        *Store - the store number
        <br />
        *Dept - the department number
        <br />
        *Date - the week
        <br />
        *Weekly_Sales -  sales for the given department in the given store
        <br />
        *IsHoliday - whether the week is a special holiday week
        <br />
        <br />
        In addition, Walmart runs several promotional markdown events throughout the year.
        These markdowns precede prominent holidays, the four largest of which are the Super Bowl,
        Labor Day, Thanksgiving, and Christmas. The weeks including these holidays are weighted
        five times higher in the evaluation than non-holiday weeks. Part of the challenge presented by
        this competition is modeling the effects of markdowns on these holiday weeks in the absence of
        complete/ideal historical data.</p>
      </div>
    )
  }
});

export default About;
