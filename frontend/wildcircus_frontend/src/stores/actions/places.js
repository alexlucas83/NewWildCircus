import {
	FETCH_PLACES,	
	CREATE_PLACE,
	UPDATE_PLACE,
	DELETE_PLACE,
	ERROR_IN_PLACES
} from '../types/places';
import axios from 'axios'; 

export function fetchPlaces() { // on les récupère tous, pas besoin de params particulier
	console.log('hello')
	return async function (dispatch, getState) {
		function onSuccess(response) {
			dispatch({ type: FETCH_PLACES, payload: response.data.places })
		};

		function onError(error) {
			dispatch({ type: ERROR_IN_PLACES, payload: error })
		};

		try {
			const response = await axios.get(`/api/v1/place`)
			await console.log('ftftftftftftf',response)
	  onSuccess(response)
      return response
		}
		catch (err) {
	  onError(err)
	  console.log('error',err)

      return err.response
		} 
		finally {
			console.log('hello finally')
		}
	};
};

export function createPlace(placeFields) { // on a besoin des champs et des valeurs => placeFields = {name: 'Mon Place'}
	return async function (dispatch, getState) {
		function onSuccess(response) {
			dispatch({ type: CREATE_PLACE, payload: response.data.place })
			dispatch(fetchPlaces())
		};

		function onError(error) {
			dispatch({ type: ERROR_IN_PLACES, payload: error })
		};

		try {
			const response = await axios.post(`/api/v1/place/`, { ...placeFields })
      onSuccess(response)
      return response
		}
		catch (err) {
      onError(err)
      return err.response
		}
	};
};

export function updatePlace(placeFields, serId) { // on a besoin des champs et des valeurs => placeFields = {name: 'Mon nouveau place'} && On a aussi besoin de l'id pour savoir lequel mettre à jour
	return async function (dispatch, getState) {
		function onSuccess(response) {
			dispatch({ type: UPDATE_PLACE, payload: response.data.place })
			dispatch(fetchPlaces())
		};

		function onError(error) {
			dispatch({ type: ERROR_IN_PLACES, payload: error })
		};

		try {
			const response = await axios.put(`/api/v1/place/${serId}`, { ...placeFields });
      onSuccess(response)
      return response
		}
		catch (err) {
      onError(err)
      return err.response
		}
	};
};

export function deletePlace(serId) { // on a besoin de l'id pour savoir lequel supprimer
	return async function (dispatch, getState) {
		function onSuccess(response) {
			dispatch({ type: DELETE_PLACE, payload: response.data.place })
			dispatch(fetchPlaces())
		};

		function onError(error) {
			dispatch({ type: ERROR_IN_PLACES, payload: error })
		};

		try {
			const response = await axios.delete(`/api/v1/place/${serId}`)
      onSuccess(response)
      return response
		}
		catch (err) {
      onError(err)
      return err.response
		};
	};
};
