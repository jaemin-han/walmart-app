import React from 'react';
import './Header.css';
import '../reset.css';
import walmart from './walmart.jpg';

const Header = props => (
  <div id="header-container">
    {<img src={walmart} alt="walmart" id="walmart-logo" />}
  </div>
    );

export default Header;
