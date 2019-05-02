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
    quotes: [], 
  };

  componentDidMount() {
    axios.get(`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`)
      .then(res => {
        console.log(res);
        this.setState({
          quotes: res.data.quotes[_.random(0, res.data.quotes.length -1)]
        });
        console.log(typeof(this.state.quotes));
      });
  }

  render() {
    return (
      <div className="Quotation">
          <Quote quote={this.state.quotes.quote}></Quote>
          <Author author={this.state.quotes.author}></Author>
          <Btn></Btn>
      </div>
    );
  }
}
