import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapBoardsStateToProps } from '../../actions/boards';
import DeleteButton from '../shared/delete_button';

class ListBoards extends Component {
  boardList() {
    return this.props.boards.map(board => (
      <div className="col-2 card white-bg" key={board.id}>
        <div className="board-body is-vertical-align is-horizontal-align">
          <Link to={`/boards/${board.id}`}>{board.title}</Link>
        </div>

        <footer className="is-text-right">
          <DeleteButton path={`/boards/${board.id}`} />
        </footer>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <div className="is-horizontal-align"><h3>Projects:</h3></div>
        <div className="row is-horizontal-align">{this.boardList()}</div>
      </div>
    );
  }
}

export default connect(mapBoardsStateToProps)(ListBoards);
