import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TaskList from '../task/task_list';
import DeleteButton from '../shared/delete_button';
import Dragula from 'react-dragula';

export default class ColumnCard extends Component {
  addNewTaskCard(column) {
    return (
      <div className="card white-bg task-card-new">
        <Link to={`/boards/${column.board_id}/columns/${column.id}/new-task`}>
          Add a new task...
        </Link>
      </div>
    );
  }

  render() {
    const column = this.props.column;
    const columnPath = `/boards/${column.board_id}/columns/${column.id}`;

    return (
      <div className="col-3 card board">
        <header className="clearfix  is-full-width">
          <h5 className="pull-left">&#9776; {column.title}</h5>
          <div className="pull-right">
            <DeleteButton path={columnPath} boardId={column.board_id} />
          </div>
        </header>

        <TaskList column={column} />
        {this.addNewTaskCard(column)}
      </div>
    );
  }
}
