import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Dashboard from './Dashboard';
const Stack = createNativeStackNavigator();
const MainRoute = () => {
  return (
    <Stack.Navigator>
        {
            true ?
            <Stack.Screen name="login" component={Login} />
            :
            <Stack.Screen name="dashboard" component={Dashboard} />
        }
    </Stack.Navigator>
  )
}

export default MainRoute