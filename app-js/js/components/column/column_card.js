import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TaskCard from '../task/task_card';
import DeleteButton from '../shared/delete_button';

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

  taskList(column) {
    return (
      column.tasks.map(task => (
        <TaskCard
          columnId={column.id}
          boardId={column.board_id}
          task={task}
          key={task.id}
        />
      ))
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
        {this.taskList(column)}
        {this.addNewTaskCard(column)}
      </div>
    );
  }
}
