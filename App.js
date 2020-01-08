import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import searchScreen from './src/screens/searchScreens';
import resultsShowScreen from './src/screens/resultsShowScreen';

const navigator=createStackNavigator(
  {
    Search:searchScreen,
    ResutsShow:resultsShowScreen
  },
  {
    initialRouteName:'Search',
    defaultNavigationOptions:{
    title:'BuisinessSearch'
  }
}
);


export default createAppContainer(navigator);