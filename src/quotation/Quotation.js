// librairies

import React from 'react';
import _ from 'lodash';
import axios from 'axios';

// Components

import Btn from './Btn.js';
import Author from './Author.js';
import Quote from './Quote.js';
import Icon from '../Icon.js';

// Material ui

import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

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
    width: "55vw",
    height: "70vh",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
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
          quotes: res.data.quotes[_.random(0, res.data.quotes.length -1)]
        });
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="container">
      <Icon></Icon>
      <Card className={classes.card}>
        <Quote quote={this.state.quotes.quote}></Quote>
        <Author author={this.state.quotes.author}></Author>
        <Btn className={classes.btn} onClick={() => this.nextQuote()}></Btn>
      </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Quotation); 
