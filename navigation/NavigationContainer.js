import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Colors from '../constants/Colors';
import SplashScreen from '../screens/SplashScreen';
import UserDetails from '../screens/UserDetails';
import UserOverview from '../screens/UserOverview';

const NavigationContainer = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    UserOverview: {
      screen: UserOverview,
    },
    UserDetails: {
      screen: UserDetails,
    },
  },
  {
    initialRouteName: 'Splash',
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTitleStyle: {
        fontFamily: 'OpenSans-Bold',
      },
      headerTintColor: 'white',
    },
  },
);

export default createAppContainer(NavigationContainer);
