import React, { Component } from 'react';
import './EmojiColumn.css';
import alienIcon from './images/ios-alien.png';

class EmojiColumn extends Component {
    render() {
      return (
        <div className="column">
            <img src={alienIcon} alt="alien" className="alien-center-image"/>
        </div>
      );
    }
  }
  
  export default EmojiColumn;
  