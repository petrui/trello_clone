import React, { Component } from 'react';
import { Link, Match } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBoards, mapBoardsStateToProps } from '../actions/boards';

class MainNavigation extends Component {
  componentDidMount() {
    this.props.fetchBoards();
  }

  boardList() {
    return this.props.boards.map((board) => {
      const truncatedTitle = board.title.length > 15 ? `${board.title.substring(0, 15)}...` : board.title;
      return <Link to={`/boards/${board.id}`} key={board.id}>{truncatedTitle}</Link>;
    });
  }

  render() {
    return (
      <nav id="navigation" className="nav">
        <div className="nav-left">
          <Link className="brand" to="/">Trello</Link>
          <div className="tabs">{this.boardList()}</div>
        </div>
        <div className="nav-right">
          <Link className="button primary" to="/boards/new">Create Board</Link>
        </div>
      </nav>
    );
  }
}

export default connect(mapBoardsStateToProps, { fetchBoards })(MainNavigation);
