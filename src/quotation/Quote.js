// librairies

import React from 'react';

// CSS

import '../App.css';


// Material-ui

import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';

// Variables 

const styles = {
  cardContent: {
    padding: "10rem",
  }
}

/////////////////////

class Quote extends React.Component {


  render() {

    const { classes } = this.props;

    return (
      <CardContent className={classes.cardContent}>
        <Typography variant="h3" component="p">{this.props.quote}</Typography>
      </CardContent>
    );
  }
}

export default withStyles(styles)(Quote);
