// librairies

import React from 'react';

// CSS

import '../App.css';


// Material-ui

import { withStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

// Variables 

// const styles = theme => ( {
//   cardActions: {
//   },
//   btn: {
//     color: theme.palette.getContrastText(purple[500]),
//     backgroundColor: purple[500],
//     '&:hover': {
//       backgroundColor: purple[700], 
//     }, 
//   }
// })

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

