import React, { Component } from 'react';
import { connect } from 'react-redux';
import reorder from '../../common/reorder';
import TaskCard from './task_card';
import { updateTaskPosition } from '../../actions/tasks';

class TaskList extends Component {
  componentDidMount() {
    this.reorder = reorder.bind(this);
    this.reorder(this.props.updateTaskPosition, 'js-drag-task')
  }

  taskList(column) {
    return (
      column.tasks.map((task, i) => (
        <TaskCard
          columnId={column.id}
          boardId={column.board_id}
          task={task}
          key={task.id}
          pos={i}
        />
      ))
    );
  }

  render() {
    return (
      <div>
        {this.taskList(this.props.column)}
      </div>
    );
  }
}

export default connect(null, { updateTaskPosition })(TaskList);
