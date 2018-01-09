import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveBoard } from '../../actions/boards';
import Form from '../shared/form';

class NewBoard extends Component {
  handleRedirect() {
    this.props.history.push('/');
  }

  save(data) {
    this.props.saveBoard(data, this.handleRedirect.bind(this));
  }

  render() {
    return (
      <Form title="Board" save={this.save.bind(this)} />
    );
  }
}

export default connect(null, { saveBoard })(NewBoard);
