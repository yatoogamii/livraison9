// librairies

import React from 'react';

// Material ui

import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// CSS

import '../App.css';

////////////////////////////

// Variables 

const styles = {
  cardContent: {
    marginLeft: 'auto',
    width: "30%",
  }
}

class Author extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{'- ' + this.props.author }</Typography>
      </CardContent>
    );
  }
}

export default withStyles(styles)(Author);
