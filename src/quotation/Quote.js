// librairies

import React from 'react';

// CSS

import '../App.css';


// Material-ui

import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

/////////////////////

class Quote extends React.Component {


  render() {

    return (
      <CardContent style={{padding: 10 + "rem"}} className={this.props.animated}>
        <Typography variant="h3" component="p">{this.props.quote}</Typography>
      </CardContent>
    );
  }
}

export default Quote
