import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';

import QuestionsOverviewScreen from '../screens/QuestionsOverviewScreen';
import UserAuthScreen from '../screens/UserAuthScreen';
import AdminScreen from '../screens/AdminScreen';

const Navigator = createStackNavigator(
  {
    UserAuth: UserAuthScreen,
    Admin: AdminScreen,
    QuestionsOverview: QuestionsOverviewScreen
    
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? 'red' : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : 'red'
    }
  }
);

export default createAppContainer(Navigator);
