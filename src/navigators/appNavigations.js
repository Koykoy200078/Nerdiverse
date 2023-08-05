import * as React from 'react';
import {Easing} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import {Home, MovieDetails, ROUTES, Search} from '..';

const options = {
  headerShown: false,
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: {
      animation: 'spring',
      config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
      },
    },
    close: {
      animation: 'timing',
      config: {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      },
    },
  },
  cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
};

// const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

// function Auth() {
//   return (
//     <AuthStack.Navigator
//       initialRouteName={ROUTES.LOGIN}
//       screenOptions={options}>
//       <AuthStack.Screen name={ROUTES.WELCOME} component={Welcome} />
//     </AuthStack.Navigator>
//   );
// }

function Main() {
  return (
    <MainStack.Navigator initialRouteName={ROUTES.HOME} screenOptions={options}>
      <MainStack.Screen name={ROUTES.HOME} component={Home} />
      <MainStack.Screen name={ROUTES.SEARCH} component={Search} />
      <MainStack.Screen name={ROUTES.MOVIE_DETAILS} component={MovieDetails} />
    </MainStack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};
