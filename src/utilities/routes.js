import { createStackNavigator } from 'react-navigation';
import {Home, ResultScreen} from '../screens';

const RootNavigator =  createStackNavigator({
  Home: {
    screen: Home
  },
  ResultScreen: {
    screen: ResultScreen
  }
},{
  initialRouteName: 'Home',
  headerMode: 'none'
});
export {RootNavigator};
