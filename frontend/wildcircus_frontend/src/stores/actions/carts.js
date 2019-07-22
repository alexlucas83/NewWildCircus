import {
	FETCH_CARTS,	
	CREATE_CART,
	UPDATE_CART,
	DELETE_CART,
	ERROR_IN_CARTS
} from '../../stores/types/cart';
import axios from 'axios'; 

export function fetchCarts() { // on les récupère tous, pas besoin de params particulier
	return async function (dispatch, getState) {
		function onSuccess(response) {
			dispatch({ type: FETCH_CARTS, payload: response.data.carts })
		};

		function onError(error) {
			dispatch({ type: ERROR_IN_CARTS, payload: error })
		};

		try {
			const response = await axios.get(`/api/v1/cart`)
      onSuccess(response)
      return response
		}
		catch (err) {
      onError(err)
      return err.response
		}
	};
};

export function createCart(cartFields) { // on a besoin des champs et des valeurs => cartFields = {name: 'Mon Cart'}
	return async function (dispatch, getState) {
		function onSuccess(response) {
			dispatch({ type: CREATE_CART, payload: response.data.cart })
			dispatch(fetchCarts())
		};

		function onError(error) {
			dispatch({ type: ERROR_IN_CARTS, payload: error })
		};

		try {
			const response = await axios.post(`/api/v1/cart/`, { ...cartFields })
      onSuccess(response)
      return response
		}
		catch (err) {
      onError(err)
      return err.response
		}
	};
};

export function updateCart(cartFields, serId) { // on a besoin des champs et des valeurs => cartFields = {name: 'Mon nouveau cart'} && On a aussi besoin de l'id pour savoir lequel mettre à jour
	return async function (dispatch, getState) {
		function onSuccess(response) {
			dispatch({ type: UPDATE_CART, payload: response.data.cart })
			dispatch(fetchCarts())
		};

		function onError(error) {
			dispatch({ type: ERROR_IN_CARTS, payload: error })
		};

		try {
			const response = await axios.put(`/api/v1/cart/${serId}`, { ...cartFields });
      onSuccess(response)
      return response
		}
		catch (err) {
      onError(err)
      return err.response
		}
	};
};

export function deleteCart(serId) { // on a besoin de l'id pour savoir lequel supprimer
	return async function (dispatch, getState) {
		function onSuccess(response) {
			dispatch({ type: DELETE_CART, payload: response.data.cart })
			dispatch(fetchCarts())
		};

		function onError(error) {
			dispatch({ type: ERROR_IN_CARTS, payload: error })
		};

		try {
			const response = await axios.delete(`/api/v1/cart/${serId}`)
      onSuccess(response)
      return response
		}
		catch (err) {
      onError(err)
      return err.response
		};
	};
};
