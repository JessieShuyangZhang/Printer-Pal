import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation'
import HomeScreen from './components/MapScreen'
import LoginScreen from './components/LoginScreen'


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AuthenticationNavigator = createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen
});

const AppNavigator = createSwitchNavigator({
  Auth: AuthenticationNavigator,
  Home: HomeScreen,
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00cec9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
