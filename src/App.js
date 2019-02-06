import React, { Component } from 'react';
import './App.css';
import StaticColumn from './StaticColumn';
import EmojiColumn from './EmojiColumn';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <StaticColumn />
          <EmojiColumn />
        </div>
      </div>
    );
  }
}

export default App;
