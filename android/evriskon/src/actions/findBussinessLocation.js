import * as types from './types'
import { Alert } from 'react-native'

export function getBusinessLoc(data){

	return (dispatch, getState) => {
		fetch(CONFIG.server_url + '/' + info + '/api/category/', {
			method: 'Get',
			headers: {
					'Accept': 'application/json', 
		    		'Content-Type': 'application/json' 
			}
		})
		.then((response) => response.json())
		.then((responseData) => {
			dispatch(setBusiness({business: responseData}));			
		}).catch( (error) => {
			Alert.alert("There is an error")
		});
	}

}

export function setBusiness({ business }) {
	return {
		type: types.GET_BUSINESS_AND_LOCATION,
		business,
	}
}