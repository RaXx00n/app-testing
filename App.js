// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login.tsx';
import Home from './Home.js';
import Settings from './Settings.js';
import Profile from './Profile.js';
import Chat from './Chat.js';
import Lobbies from './Lobbies.js';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Chat" component={Chat} />
        <Drawer.Screen name="Lobbies" component={Lobbies} />
        {/* Add more screens here */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;