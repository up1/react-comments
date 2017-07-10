import React, { Component } from 'react';
import CommentList from './CommentList';

class CommentListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { comments: [] };
  }

  componentDidMount() {
    //Call data from APIs
    var mockComment = ["Comment 01", "Comment 02"];
    this.setState({ comments: mockComment });
  }

  render() {
    return(
      <CommentList comments={this.state.comments}/>
    )
  }

}

export default CommentListContainer;
