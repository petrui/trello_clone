import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveColumn } from '../../actions/columns';
import Form from '../shared/form';

class NewColumn extends Component {
  handleRedirect() {
    this.props.history.push(`/boards/${this.props.match.params.boardId}`);
  }

  save(data) {
    this.props.saveColumn(
      this.props.match.params.boardId,
      data,
      this.handleRedirect.bind(this),
    );
  }

  render() {
    return (
      <Form title="Column" save={this.save.bind(this)} />
    );
  }
}

export default connect(null, { saveColumn })(NewColumn);
