import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SongDetailScreen from './screens/SongDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Hides the default header on HomeScreen
        />
        <Stack.Screen
          name="SongDetail"
          component={SongDetailScreen}
          options={{ title: 'Rate Song' }} // Title for the rating screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
