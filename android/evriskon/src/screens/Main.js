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
import {Icon} from 'native-base'

import { Col, Grid } from "react-native-easy-grid";
import Reactotron from 'reactotron-react-native'
import { findBusinessLocAction } from '../actions'

HEADER_MAX_HIEGHT = 120
HEADER_MIN_HIEGHT = 40

const SCREEN_WIDTH = Dimensions.get("window").width

class Main extends Component {
  static navigationOptions = {
        header: null
    }

  constructor(props) {
        super(props)
        this.state = {
                    bussiness: '', 
                    county: '',
        }; 
    }

  componentWillMount(){

      this.headerHeight = new Animated.Value(HEADER_MIN_HIEGHT)
  }

  increaseHeaderSize = () => {

      Animated.timing(this.headerHeight, {
        toValue: HEADER_MAX_HIEGHT,
        duration: 100
      }).start(() => {
        this.refs.textInputFind.focus()
      })

  }

  decreaseHeaderSize = () => {
      Keyboard.dismiss()
      Animated.timing(this.headerHeight, {
        toValue: HEADER_MIN_HIEGHT,
        duration: 100
      }).start()
  }

  getSeachListBusiness = async () => {
    const { dispatch } = this.props
    data = {
            'bussiness': this.state.bussiness,
            'county': this.state.county
        }
    dispatch(findBusinessLocAction.getBusinessLoc(data)).then( () => {
      this.props.navigation.navigate('BusinessList')
    })
  }

  countyInputClear = () => {
    this.setState({'county': ''})
  }

  bussinessInputClear = () => {
    this.setState({'bussiness': ''})
  }

  render() {

    const cameraIconOpacity = this.headerHeight.interpolate({
        inputRange:[HEADER_MIN_HIEGHT, HEADER_MAX_HIEGHT],
        outputRange:[0,-50]
    })

    const secondSearchbarOpacity = this.headerHeight.interpolate({
        inputRange:[HEADER_MIN_HIEGHT, HEADER_MAX_HIEGHT],
        outputRange:[0,1]
    })

    const cameraIconZIndex = this.headerHeight.interpolate({
        inputRange:[HEADER_MIN_HIEGHT, HEADER_MAX_HIEGHT],
        outputRange:[0,-10]
    })

    const buttonZIndex = this.headerHeight.interpolate({
        inputRange:[HEADER_MIN_HIEGHT, HEADER_MAX_HIEGHT],
        outputRange:[-100,100]
    })

    const firstinputtop = this.headerHeight.interpolate({
        inputRange:[HEADER_MIN_HIEGHT, HEADER_MAX_HIEGHT],
        outputRange:[-100,-25]
    })

    const secondinputtop = this.headerHeight.interpolate({
        inputRange:[HEADER_MIN_HIEGHT, HEADER_MAX_HIEGHT],
        outputRange:[-100,-12]
    })

    return (
      <View style={{flex:1}}>
        <Animated.View style={{position:'absolute', 
                      top:0, right:0, left:0, backgroundColor:'blue', 
                      height: this.headerHeight}}>
          <View style={{flex:1, flexDirection:"row"}}>
            <Animated.View style={{paddingVertical:5, paddingHorizontal:10, top:cameraIconOpacity}}>
              <Icon name="camera" style={{color:"white"}}/>
            </Animated.View>
            <Animated.View style={{flex:1, backgroundColor:'white', margin:5, 
                        height:HEADER_MIN_HIEGHT - 10, borderRadius:10, top:cameraIconOpacity}}>
              <TouchableOpacity onPress = {() => this.increaseHeaderSize()}>
                <View style={{flexDirection:"row"}} pointerEvents="none">
                  <Icon name="md-search" style={{fontSize:20, padding:5}}/>
                  <TextInput style={{flex:1, padding:5 
                    }} placeholder="Bugers, Atm's, Flowers..."></TextInput>
                </View>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{paddingVertical:5, paddingHorizontal:10, top:cameraIconOpacity}}>
              <TouchableOpacity onPress = {() => Alert.alert("test this")}>
                <Icon name="globe" style={{color:"white", opacity:1}}/>
              </TouchableOpacity>
            </Animated.View>
          </View>
          <Animated.View style={{flex:1,marginHorizontal:5, 
                           opacity:secondSearchbarOpacity,
                          top:firstinputtop, zIndex:100, flexDirection:"row",
                        height:HEADER_MIN_HIEGHT, borderRadius:15,
                       backgroundColor:'white'}}>
                <Icon name="md-search" style={{fontSize:20, padding:10}}/>
                <TextInput 
                ref="textInputFind"
                style={{flex:1, padding:5 
                  }} placeholder="Bugers, Atm's, Flowers..."
                  returnKeyType = { "next" }
                  onSubmitEditing={() => { this.textInputFindSec.focus(); }}
                  blurOnSubmit={false}
                  onChangeText={(bussiness) => this.setState({'bussiness': bussiness})}
                  value={this.state.bussiness} />
                  {this.state.bussiness ? <Icon name="md-close" style={{fontSize:20, padding:10}}
                  onPress = {() => this.bussinessInputClear()}/> : null}
          </Animated.View>
          <Animated.View style={{flex:1,marginHorizontal:5, 
                           opacity:secondSearchbarOpacity,
                          top:secondinputtop, zIndex:100, flexDirection:"row",
                        height:HEADER_MIN_HIEGHT, borderRadius:15,
                       backgroundColor:'white'}}>
                <Icon name="md-search" style={{fontSize:20, padding:10}}/>
                <TextInput 
                  ref={(input) => { this.textInputFindSec = input; }}
                  style={{flex:1, padding:5 
                    }} placeholder="Enter your locations..."
                    onChangeText={(county) => this.setState({'county': county})}
                  value={this.state.county} />
                {this.state.county ? <Icon name="md-close" style={{fontSize:20, padding:10}} 
                onPress = {() => this.countyInputClear()}/> : null}
          </Animated.View>
          {/*<Animated.View style={{flex:1,marginHorizontal:5, 
                                 opacity:secondSearchbarOpacity,
                                top:-55, zIndex:100}}>
                        <View style={{flexDirection:"row",height:HEADER_MIN_HIEGHT, borderRadius:10,
                       backgroundColor:'white'}}>
                          <Icon name="md-search" style={{fontSize:20, padding:10}}/>
                          <TextInput 
                          ref="textInputFind"
                          style={{flex:1, padding:5 
                            }} placeholder="Bugers, Atm's, Flowers..."
                            returnKeyType = { "next" }
                            onSubmitEditing={() => { this.textInputFindSec.focus(); }}
                            blurOnSubmit={false}></TextInput>
                        </View>
                        <View style={{flexDirection:"row", marginTop:10, height:HEADER_MIN_HIEGHT, 
                        borderRadius:10,  backgroundColor:'white',}}>
                          <Icon name="md-search" style={{fontSize:20, padding:10}}/>
                          <TextInput 
                          ref={(input) => { this.textInputFindSec = input; }}
                          style={{flex:1, padding:5 
                            }} placeholder="Enter your locations..."></TextInput>
                        </View>
                        <View style={{flex:2, flexDirection:"row"}}>
                          <View>
                            <Button onPress = {() => this.decreaseHeaderSize()}
                            title="Cancel" />
                          </View>
                          <View>
                            <Button onPress = {() => Alert.alert("Clicked")}
                            style={{fontSize:15, color:"white", alignSelf:"flex-end", padding:5, right:10}}
                            title="Find"/>
                          </View>
                        </View>
                    </Animated.View>*/}
        </Animated.View>
        <Animated.View style={{flex:1, position:"absolute", 
                           opacity:secondSearchbarOpacity,
                          zIndex:buttonZIndex, flexDirection:"row", top:HEADER_MAX_HIEGHT}}>
                <Grid>
                  <Col style={{alignItems:'center'}}>
                    <Button onPress = {() => this.decreaseHeaderSize()}
                                title="Cancel" />
                  </Col>
                  <Col style={{alignItems:'center'}}>
                    <Button onPress = {() => this.getSeachListBusiness()}
                                style={{fontSize:15, color:"white", alignSelf:"flex-end", padding:5, right:10}}
                            title="Find"/>
                  </Col>
                </Grid>
        </Animated.View>
      </View> 
    );
  }
}

export default connect()(Main);

