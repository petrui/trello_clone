import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteWithPath } from '../../actions/boards';

class DeleteButton extends Component {
  handleClick(e) {
    this.props.deleteWithPath(this.props.path, this.props.boardId);
  }

  render() {
    return (
      <button
        className="button small-button red clickable"
        onClick={this.handleClick.bind(this)}
      >
        &times;
      </button>
    );
  }
}

export default connect(null, { deleteWithPath })(DeleteButton);
