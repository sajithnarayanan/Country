import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './splash';
import Home from './src/screens/home';
import Log from './src/screens/login';
const Stack = createStackNavigator();
const App = () => {
    return (
          <NavigationContainer>
            <Stack.Navigator headerMode={false}>
           <Stack.Screen name="screen" component={Splash} />   
           <Stack.Screen name="Log" component={Log} />
           <Stack.Screen name="Home" component={Home} />
           </Stack.Navigator>
          </NavigationContainer>
    );
}

export default App;