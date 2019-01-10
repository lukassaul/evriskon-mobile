/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import Main from './Main'
import BusinessList from './BusinessList'
import Settings from './Settings'

const stack = createStackNavigator({
    Main:{screen: Main},
    BusinessList:{screen: BusinessList}
});

const AppNavigator = createBottomTabNavigator({
  Find: {
    screen: stack,
  },
  Settings: {
    screen: Settings,
  },
});


const AppC = createAppContainer(AppNavigator)

class AppContainer extends Component {
  render() {
    return (
      <AppC />
    )
  }
}



export default connect()(AppContainer);
