import * as types from './types'
import { Alert } from 'react-native'
let CONFIG = require('../lib/config.json')
import Reactotron from 'reactotron-react-native'

export const findBusinessLocAction = {
	getBusinessLoc
}

export function getBusinessLoc(data){

	return (dispatch, getState) => {
		return fetch(CONFIG.server_url + '/search/business/', {
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
			Reactotron.log(error.message)
		});
	}

}

export function setBusiness({ business }) {
	return {
		type: types.GET_BUSINESS_AND_LOCATION,
		business,
	}
}