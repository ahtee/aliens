import React, { Component } from 'react';
import './StaticColumn.css';
import believe from './images/believe.gif';

class StaticColumn extends Component {
    render() {
      return (
        <div className="column staticGif">
          <img src={believe} alt="believe" className="total-center-image" />
        </div>
      );
    }
  }
  
  export default StaticColumn;
  