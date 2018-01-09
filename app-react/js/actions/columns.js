import Config from 'Config';
import { postWithParams, putWithParams } from '../common/async';
import { dispatchSetError } from './notifications';
import { fetchBoard } from './boards';

export function saveColumn(id, data, redirect) {
  return (dispatch) => {
    postWithParams(`${Config.apiUrl}/boards/${id}/columns`, data)
      .then((data) => {
        dispatch(fetchBoard(id));
        redirect();
      })
      .catch((error) => {
        error.text().then(msg => dispatchSetError(dispatch, JSON.parse(msg)));
      });
  };
}


export function updateColumnPosition(path, position) {
  return (dispatch) => {
    putWithParams(Config.apiUrl + path, { column: { sequence_position: position } })
      .catch((error) => {
        error.text().then(msg => dispatchSetError(dispatch, JSON.parse(msg)));
      });
  };
}
