import React from 'react';
import '../App.css';

export default class Btn extends React.Component {
  render() {
    return (
      <div className="Quotation__btn">
        <button onClick={this.props.onClick}> Next </button>
      </div>
    );
  }
}
