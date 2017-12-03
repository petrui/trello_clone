import Config from 'Config';
import { getWithParams, postWithParams, deleteWithUrl } from '../common/async';
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
