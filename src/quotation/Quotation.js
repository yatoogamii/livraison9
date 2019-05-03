// librairies

import React from 'react';
import _ from 'lodash';
import axios from 'axios';

// Components

import Btn from './Btn.js';
import Author from './Author.js';
import Quote from './Quote.js';

// Material ui

import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import deepPurple from '@material-ui/core/colors/deepPurple';
import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';
import lightBlue from '@material-ui/core/colors/lightBlue';
import cyan from '@material-ui/core/colors/cyan';
import teal from '@material-ui/core/colors/teal';
import green from '@material-ui/core/colors/green';
import lightGreen from '@material-ui/core/colors/lightGreen';
import lime from '@material-ui/core/colors/lime';
import yellow from '@material-ui/core/colors/yellow';
import amber from '@material-ui/core/colors/amber';
import orange from '@material-ui/core/colors/orange';
import deepOrange from '@material-ui/core/colors/deepOrange';
import brown from '@material-ui/core/colors/brown';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';

// CSS

import '../App.css';

////////////////////////////

// Variables 

const styles = theme => ( {
  cardActions: {
  },
  btn: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700], 
    }, 
    fontSize: '3rem', 
  },
  card: {
    width: "70vw",
    height: "70vh",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})

class Quotation extends React.Component {

  state = {
    quotes: [
      " On attend pas kenny ?", 
      "C'est pas Vim way ça", 
      "Bon weekend", 
      "Répondez pas tous en même temps", 
      "je vais peut être être papa", 
      "On fait le pont vendredi ?", 
      "Une p'tite bière ?"
    ], 
    author: '',
  };

  componentDidMount() {
    this.getNewQuote();
  }

  nextQuote() {
    this.getNewQuote();
  }

  getNewQuote() {
    axios.get(`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`)
      .then(res => {
        this.setState({
          author: res.data.quotes[_.random(0, res.data.quotes.length -1)].author
        });
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <Quote quote={this.state.quotes[_.random(0, this.state.quotes.length -1)]}></Quote>
        <Author author={this.state.author}></Author>
        <Btn className={classes.btn} onClick={() => this.nextQuote()}></Btn>
      </Card>
    );
  }
}

export default withStyles(styles)(Quotation); 
