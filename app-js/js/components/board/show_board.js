import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBoard } from '../../actions/boards';
import ColumnCard from '../column/column_card';

class ShowBoard extends Component {
  constructor(params) {
    super(params);
    this.state = { id: this.props.match.params.id };
  }

  componentDidMount() {
    this.props.fetchBoard(this.state.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id == this.state.id) { return; }

    this.setState({ id: nextProps.match.params.id });
    this.props.fetchBoard(nextProps.match.params.id);
  }

  columns() {
    if (this.props.board.columns) {
      return this.props.board.columns.map(col => <ColumnCard column={col} key={col.id} />);
    }
  }

  render() {
    return (
      <div>
        <div className="row row-no-wrap">
          <h1 className="col is-text-center">Project: {this.props.board.title}</h1>
          <div className="col-2">
            <Link className="button primary pull-right mr10" to={`/boards/${this.state.id}/new-column`}>
              Create Column
            </Link>
          </div>
        </div>

        <div className="row">{this.columns()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    board: state.boards.board,
  };
}
export default connect(mapStateToProps, { fetchBoard })(ShowBoard);
