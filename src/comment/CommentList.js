import React, {Component} from 'react';

class CommentList extends Component {

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
      <ul>
        {this.state.comments.map( comment => (
          <li>{comment}</li>
        ))}
      </ul>
    );
  }

}

export default CommentList;
