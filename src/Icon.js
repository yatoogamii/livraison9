// librairies

import React from 'react';

// CSS

import './App.css';

// Material-ui

import { withStyles } from '@material-ui/core/styles';

// Variables 

/////////////////////

export default class Icon extends React.Component {
  render() {
    return (
      <div className="icons">
        <a href="https://www.linkedin.com/in/elias-bracaval-517678174/" target="no_blank">
          <img src="https://img.icons8.com/carbon-copy/200/000000/linkedin.png" />
        </a>
        <a href="https://twitter.com/BracavalE" target="no_blank">
          <img src="https://img.icons8.com/carbon-copy/200/000000/twitter.png" />
      </a>
      </div>
    );
  }
 }

