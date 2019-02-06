import React, { Component } from 'react';
import './App.css';
import StaticColumn from './StaticColumn';
import EmojiColumn from './EmojiColumn';
import Footer from './Footer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <StaticColumn />
          <EmojiColumn />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
