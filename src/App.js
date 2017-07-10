import React, { Component } from 'react';
import './App.css';

import CommentList from './comment/CommentList';

class App extends Component {
  render() {
    return (
      <div>
        <CommentList/>
      </div>
    );
  }
}

export default App;
