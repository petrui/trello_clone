import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ShowBoard from './board/show_board';
import ListBoards from './board/list_boards';
import NewBoard from './board/new_board';
import NewColumn from './column/new_column';
import NewTask from './task/new_task';

export default class MainContent extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ListBoards} />
          <Route exact path="/boards/new" component={NewBoard} />
          <Route exact path="/boards/:boardId/new-column" component={NewColumn} />
          <Route exact path="/boards/:boardId/columns/:columnId/new-task" component={NewTask} />
          <Route path="/boards/:id" component={ShowBoard} />
        </Switch>
      </main>
    );
  }
}
