import React, { Component } from 'react';
import DeleteButton from '../shared/delete_button';

export default class TaskCard extends Component {
  render() {
    const { boardId, columnId, task } = this.props;
    const taskPath = `/boards/${boardId}/columns/${columnId}/tasks/${task.id}`;

    return (
      <div className="card task-card white-bg">
        <header>
          <h4 className="is-marginless">&raquo; {task.title}</h4>
          <hr />
        </header>
        <p>{task.description}</p>
        <footer className="is-right">
          <DeleteButton path={taskPath} boardId={boardId} />
        </footer>
      </div>
    );
  }
}
