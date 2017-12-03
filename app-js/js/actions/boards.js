import Config from 'Config';
import { getWithParams, postWithParams, deleteWithUrl } from '../common/async.js';
import { dispatchSetError } from './notifications';

export function setBoards(boards) {
  return {
    type: 'SET_BOARDS',
    payload: boards,
  };
}

export function fetchBoards() {
  return (dispatch) => {
    getWithParams(`${Config.apiUrl}/boards`)
      .then(data => dispatch(setBoards(data)));
  };
}

export function setBoard(board) {
  return {
    type: 'SET_BOARD',
    payload: board,
  };
}

export function fetchBoard(id) {
  return (dispatch) => {
    getWithParams(`${Config.apiUrl}/boards/${id}`)
      .then(data => dispatch(setBoard(data)));
  };
}

export function saveBoard(data, redirect) {
  return (dispatch) => {
    postWithParams(`${Config.apiUrl}/boards`, data)
      .then((data) => {
        dispatch(fetchBoards());
        redirect();
      })
      .catch((error) => {
        error.text().then(msg => dispatchSetError(dispatch, JSON.parse(msg)));
      });
  };
}

export function deleteWithPath(path, boardId) {
  const dispatchAction = boardId ? fetchBoard(boardId) : fetchBoards();

  return (dispatch) => {
    deleteWithUrl(Config.apiUrl + path)
      .then(data => dispatch(dispatchAction))
      .catch((error) => {
        error.text().then(msg => dispatchSetError(dispatch, JSON.parse(msg)));
      });
  };
}

export function mapBoardsStateToProps(state) {
  return {
    boards: state.boards.boards,
  };
}
