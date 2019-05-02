import React from 'react';
import '../App.css';

export default class Quote extends React.Component {


  render() {
    return (
      <div className="Quotation__quote">
        <p>{this.props.quote}</p>
      </div>
    );
  }
}
