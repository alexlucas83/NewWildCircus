import { combineReducers } from 'redux';
import cartReducer from './carts';
import placeReducer from './places'

export default combineReducers({
  cart: cartReducer,
  place: placeReducer
});