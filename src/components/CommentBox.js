import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {

  state = { comment: '' };

  // When component just gets rendered
  componentDidMount() {
    this.shouldNavigateAway();
  }

  // Any time component receives new props
  componentDidUpdate() {
    this.shouldNavigateAway();
  }

  shouldNavigateAway() {
    if (!this.props.auth) {
      this.props.history.push('/');
    }
  }

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  };



  render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea 
            value = {this.state.comment}
            onChange = {this.handleChange} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button 
          className="fetch-comments"
          onClick={this.props.fetchComments}>Fetch Comments</button>
        <button
          className="clear-comments"
          onClick={this.props.clearComments}>Clear All</button>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(CommentBox);