import { FETCH_CARTS, ERROR_IN_CARTS } from '../types/carts';

const defaultStates = {
  carts: []
};

export default (state = defaultStates, action) => {
  switch (action.type) {
    case FETCH_CARTS:
      return { ...state, carts: [...action.payload] };
    case ERROR_IN_CARTS:
      return state;
    default:
      return state;
  };
};