import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class SingleComment extends Component {
  state = {
    commentObj: this.props.commentObj,
  };
  render() {
    return (
      <ListGroup.Item>
        {this.state.commentObj.comment} - rate {this.state.commentObj.rate}/5
      </ListGroup.Item>
    );
  }
}

export default SingleComment;
