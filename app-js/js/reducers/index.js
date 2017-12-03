import { combineReducers } from 'redux';
import boards from './boards';
import notifications from './notifications';

export default combineReducers({
  boards,
  notifications,
});
