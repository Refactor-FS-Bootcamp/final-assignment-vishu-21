import React, { Component } from "react";
import './AddComment.css'
export class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      comment: ""
    };
  }
  addComment = e => {
    e.preventDefault();
    if(this.state.userName === "" || this.state.comment === "")
    {
      alert("all foeee")
    }
    this.props.addCommentHandler(this.state)
    this.setState({
      userName: "",
      comment: ""
    })
  }
  render() {
    return (
      <div className="main">
        <h1>Comment Section</h1>
        <div className="addCmnt">
          <div className="field">
            <label htmlFor="username">USERNAME:</label>
            <input
              type="text"
              id="username"
              value={this.state.userName}
              onChange={e => this.setState({userName: e.target.value})}
            />
          </div>
          <div className="field">
            <label htmlFor="comment">COMMENT:</label>
            <input
              type="text"
              id="comment"
              value={this.state.comment}
              onChange={(e) => this.setState({comment: e.target.value})}
            />
          </div>
          <button onClick={this.addComment} type="submit">
            ADD
          </button>
        </div>
      </div>
    );
  }
}

export default AddComment;



