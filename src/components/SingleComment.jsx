import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class SingleComment extends Component {
  render() {
    return (
      <ListGroup.Item>
        {this.props.commentObj.comment} - rate {this.props.commentObj.rate}/5
      </ListGroup.Item>
    );
  }
}

export default SingleComment;
