import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
	Reactotron
	  .configure({ host: '192.168.254.8' })
	  .useReactNative()
	  .use(reactotronRedux()) //  <- here i am!
	  .connect() //Don't forget about me!
}