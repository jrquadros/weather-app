import React from 'react';
import { Weatherinfo } from '../components/weatherStack/screens/WeatherInfoScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const WeatherStack = () => {
  return (
    <Stack.Navigator initialRouteName="WeatherInfoScreen">
      <Stack.Screen
        name="WeatherInfoScreen"
        component={Weatherinfo}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
