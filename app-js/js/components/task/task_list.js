import React, { Component } from 'react';
import ReactDom from 'react-dom';
import TaskCard from './task_card';
import Dragula from 'react-dragula';
import { connect } from 'react-redux';
import { updateTaskPosition } from '../../actions/tasks';

class TaskList extends Component {
  componentDidMount() {
    const dragula = Dragula([ReactDom.findDOMNode(this)]);

    dragula.on('drop', (el, target, source, sibling) => {
      const pos = sibling ? parseInt(sibling.dataset.pos) : target.childNodes.length;
      this.props.updateTaskPosition(el.dataset.path, pos);
      target.childNodes.forEach((el, i) => { el.dataset.pos = i; });
    });
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
