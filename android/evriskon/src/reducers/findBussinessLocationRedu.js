import createReducer from '../lib/createReducers'
import * as types from '../actions/types'

export const businessLoc = createReducer({}, {
	[types.GET_BUSINESS_AND_LOCATION](state, action) {
	    return action.business;
	},
});