/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import Find from './Find'
import Settings from './Settings'


const AppNavigator = createBottomTabNavigator({
  Settings: {
    screen: Settings,
  },
  Find: {
    screen: Find,
  },
});

const AppContainer = createAppContainer(AppNavigator)

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapDispatchToProps)(AppContainer);
