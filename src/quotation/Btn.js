// librairies

import React from 'react';

// CSS

import '../App.css';


// Material-ui

import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

/////////////////////

export default class Btn extends React.Component {
  render() {
    return (
      <CardActions>
        <Button className={this.props.className} size="large" variant="contained" onClick={this.props.onClick}> Next </Button>
      </CardActions>
    );
  }
 }

