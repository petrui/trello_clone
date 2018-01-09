const initialState = {
  boards: [],
  board: {},
  fetching: false,
};

export default function boards(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case 'SET_BOARDS':
      return { ...state, boards: payload };
    case 'SET_COLUMNS':
      console.log(payload);
      return { ...state, boards: payload };
    case 'SET_BOARD':
      return { ...state, board: payload };
    default:
      return state;
  }
}
