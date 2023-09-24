import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MainStack from './src/stacks/MainStack';
import UserContextProvider from './src/contexts/UserContext';
import { NavigationContainer } from '@react-navigation/native';


export default () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
          <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  );
}