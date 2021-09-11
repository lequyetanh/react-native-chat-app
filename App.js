import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator, createStacknavigator } from 'react-navigation-stack';

import LoginScreen from './screens/LoginScreen';
import ChatScreen from './screens/ChatScreen';

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Chat: ChatScreen,
  },
  // {
  //   headerMode: "none"
  // }
)

export default createAppContainer(AppNavigator);
