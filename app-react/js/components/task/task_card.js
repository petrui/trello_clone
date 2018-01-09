import React, { Component } from 'react';
import DeleteButton from '../shared/delete_button';

export default class TaskCard extends Component {
  render() {
    const { boardId, columnId, task, pos } = this.props;
    const taskPath = `/boards/${boardId}/columns/${columnId}/tasks/${task.id}`;

    return (
      <div className="card task-card white-bg" data-pos={pos} data-path={taskPath}>
        <header>
          <h4 className="is-marginless js-drag-task draggable">&#8645; {task.title}</h4>
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
