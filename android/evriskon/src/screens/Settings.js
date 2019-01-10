import React, {Component} from 'react';
import {Platform, 
  StyleSheet, 
  Text, 
  View, 
  Button,
  Alert, 
  Animated,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

import {Icon} from 'native-base'

import { Col, Grid } from "react-native-easy-grid";
import Reactotron from 'reactotron-react-native'

HEADER_MAX_HIEGHT = 120
HEADER_MIN_HIEGHT = 40

const SCREEN_WIDTH = Dimensions.get("window").width

export default class Settings extends Component {


  render() {  
    return (
      <View style={{flex:1}}>
        <Text>Test</Text>
      </View> 
    );
  }
}

