export function dispatchSetError(dispatch, data) {
  dispatch(setNotification(data));
  setTimeout(() => { dispatch(clearNotifications()); }, 2500);
}

export function setNotification(data) {
  return {
    type: 'SET_NOTIFICATION',
    payload: data,
  };
}

export function clearNotifications() {
  return { type: 'CLEAR_NOTIFICATIONS' };
}
