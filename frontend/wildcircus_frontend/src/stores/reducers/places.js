import { FETCH_PLACES, ERROR_IN_PLACES } from '../types/places';

const defaultStates = {
  places: []
};

export default (state = defaultStates, action) => {
  switch (action.type) {
    case FETCH_PLACES:
      return { ...state, places: [...action.payload] };
    case ERROR_IN_PLACES:
      return state;
    default:
      return state;
  };
};