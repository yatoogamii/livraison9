// librairies

import React from 'react';
import _ from 'lodash';
import axios from 'axios';

// Components

import Btn from './Btn.js';
import Author from './Author.js';
import Quote from './Quote.js';

// CSS

import '../App.css';

////////////////////////////

export default class Quotation extends React.Component {

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
    author: ''
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
    return (
      <div className="Quotation">
        <Quote quote={this.state.quotes[_.random(0, this.state.quotes.length -1)]}></Quote>
        <Author author={this.state.author}></Author>
        <Btn onClick={() => this.nextQuote()}></Btn>
      </div>
    );
  }
}
