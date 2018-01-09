import Config from 'Config';
import { postWithParams, putWithParams } from '../common/async';
import { dispatchSetError } from './notifications';
import { fetchBoard } from './boards';

export function saveTask(boardId, columnId, data, redirect) {
  return (dispatch) => {
    postWithParams(`${Config.apiUrl}/boards/${boardId}/columns/${columnId}/tasks`, data)
      .then((data) => {
        dispatch(fetchBoard(boardId));
        redirect();
      })
      .catch((error) => {
        console.log(['errr', error]);
        error.text().then(msg => dispatchSetError(dispatch, JSON.parse(msg)));
      });
  };
}

export function updateTaskPosition(path, position) {
  return (dispatch) => {
    putWithParams(Config.apiUrl + path, { task: { sequence_position: position } })
      .catch((error) => {
        error.text().then(msg => dispatchSetError(dispatch, JSON.parse(msg)));
      });
  };
}
