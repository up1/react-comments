import React, { Component } from 'react';
import './App.css';

import CommentListContainer from './comment/CommentListContainer';

class App extends Component {
  render() {
    return (
      <div>
        <CommentListContainer/>
      </div>
    );
  }
}

export default App;
