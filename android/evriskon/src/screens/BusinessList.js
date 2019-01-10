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
import { connect } from 'react-redux';

import { Icon, List, ListItem } from 'native-base'

import { Col, Grid } from "react-native-easy-grid";
import Reactotron from 'reactotron-react-native'

HEADER_MAX_HIEGHT = 120
HEADER_MIN_HIEGHT = 40

const SCREEN_WIDTH = Dimensions.get("window").width

class BusinessList extends Component {

  constructor(props) {
        super(props)
        this.state = {
                    bussiness: this.props.businessLoc    
        }; 
    }

  componentDidMount(){
    Reactotron.log('from businessLoc:' +' '+ this.state.bussiness)
  }

  render() {  
    return (
      <View style={{flex:1}}>
          {this.state.business && this.state.bussiness.map( (buss) => {
            return <Text key={buss.id}>{buss.city}</Text>    
          })}
      </View> 
    );
  }
}

function mapStateToProps(state){
    return {
        businessLoc: state.businessLoc
    }
}

export default connect(mapStateToProps)(BusinessList);

