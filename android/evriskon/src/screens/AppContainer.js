/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Find from './Find'
import Settings from './Settings'


const AppNavigator = createBottomTabNavigator({
  Find: {
    screen: Find,
  },
  Settings: {
    screen: Settings,
  },
});


export default createAppContainer(AppNavigator)
