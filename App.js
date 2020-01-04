import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import searchScreen from './src/screens/searchScreens';

const navigator=createStackNavigator({
Search:searchScreen
},
{
initialRouteName:'Search',
defaultNavigationOptions:{
  title:'BuisinessSearch'
}
}
);

export default createAppContainer(navigator);