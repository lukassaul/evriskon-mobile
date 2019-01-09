import './ReactotronConfig'
import Reactotron from 'reactotron-react-native'
import React, { Component } from 'react';
import AppContainer from './src/screens/AppContainer';
import { Provider, connect } from 'react-redux'
import { applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducer from './src/reducers'
import { ActionCreators } from './src/actions'
import { bindActionCreators } from 'redux'

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

/*function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, 
      loggerMiddleware,
    ),
  );
  return Reactotron.createStore(reducer, initialState, enhancer);
}*/
const middleware = applyMiddleware(thunkMiddleware, loggerMiddleware)

const store = Reactotron.createStore(reducer, compose(middleware))


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}



export default App;

