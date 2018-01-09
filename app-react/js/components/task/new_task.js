import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveTask } from '../../actions/tasks';
import Form from '../shared/form';

class NewTask extends Component {
  handleRedirect() {
    this.props.history.push(`/boards/${this.props.match.params.boardId}`);
  }

  save(data) {
    const { boardId, columnId } = this.props.match.params;
    this.props.saveTask(boardId, columnId, data, this.handleRedirect.bind(this));
  }

  render() {
    return (
      <Form title="Task" save={this.save.bind(this)} />
    );
  }
}
export default connect(null, { saveTask })(NewTask);
