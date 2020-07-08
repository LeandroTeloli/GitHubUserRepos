import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './pages/App'
import Repositories from './pages/Repositories'

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{ headerStyle: {backgroundColor: '#333'}}}
      >
        <Stack.Screen
          name="App"
          component={App}
          options={{ title: 'Users', headerTintColor: '#FFF'}}        
        />
        <Stack.Screen
          name="Repositories"
          component={Repositories}
          options={{ title: 'Repositories', headerTintColor: '#FFF'}}          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
