import React from 'react';
import '../App.css';

export default class Author extends React.Component {
  render() {
    return (
      <div className="Quotation__author">
        <p>{this.props.author}</p>
      </div>
    );
  }
}
