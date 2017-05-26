import HomeScreen from '../component/lucky_component/home';
import {
    addNavigationHelpers,
    StackNavigator,
} from 'react-navigation';

const stackNavigatorConfiguration = {
    initialRouteName: 'Home'
}

export const RootRouterContainer = StackNavigator({
    Home: { screen: HomeScreen }
},stackNavigatorConfiguration)