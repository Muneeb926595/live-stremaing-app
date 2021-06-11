

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "../Login"
import SignUp from "../Signup"
import LiveStreams from "../LiveStreams"
import HostStreaming from "../HostStreaming"

const Stack = createStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name='Login'
          component={Login}
        />
        <Stack.Screen
          name='Signup'
          component={SignUp}
        />
        <Stack.Screen
          name='LiveStreams'
          component={LiveStreams}
        />
        <Stack.Screen
          name='HostStreaming'
          component={HostStreaming}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
