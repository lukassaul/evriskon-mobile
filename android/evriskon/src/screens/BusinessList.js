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
import Mapbox from '@mapbox/react-native-mapbox-gl';
import { Icon, List, ListItem } from 'native-base'
import { Col, Grid } from "react-native-easy-grid";
import Reactotron from 'reactotron-react-native'

Mapbox.setAccessToken('pk.eyJ1Ijoic3R1ZmYwNTc3IiwiYSI6ImNqcXl1dG1ubDA3MWg0M3BvbDZxN2ptZ2IifQ.WRfS6IeFZDAaBoC4lts0Nw');

HEADER_MAX_HIEGHT = 120
HEADER_MIN_HIEGHT = 40

const SCREEN_WIDTH = Dimensions.get("window").width

class BusinessList extends Component {

  constructor(props) {
        super(props)
        this.state = {
                    bussiness: null    
        }; 
    }

  componentWillMount(){
    this.setState({ bussiness: this.props.businessLoc })
  }

  componentDidMount(){
    Reactotron.log(this.state.bussiness.results.lat)
  }


  render() {  
    return (
      <View style={{flex:1}}>
          
           
              <Mapbox.MapView
                          styleURL={Mapbox.StyleURL.Street}
                          zoomLevel={15}
                          centerCoordinate={[-122.5388687, 45.5031395]}
                          style={styles.container}>
                      </Mapbox.MapView>
               
      
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function mapStateToProps(state){
    return {
        businessLoc: state.businessLoc
    }
}

export default connect(mapStateToProps)(BusinessList);

