const initialState = {
  notifications: {},
};

export default function notifications(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case 'SET_NOTIFICATION':
      return { ...state, notifications: payload };
    case 'CLEAR_NOTIFICATIONS':
      return initialState;
    default:
      return state;
  }
}
