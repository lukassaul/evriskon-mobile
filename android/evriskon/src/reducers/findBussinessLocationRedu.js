import createReducer from '../lib/createReducers'
import * as types from '../actions/types'
import Reactotron from 'reactotron-react-native'

export const businessLoc = createReducer({}, {
	[types.GET_BUSINESS_AND_LOCATION](state, action) {
		Reactotron.log(action.business)
	    return action.business;
	},
});