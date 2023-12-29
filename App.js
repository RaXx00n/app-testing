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
import {Image, Text, View} from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation }) => (
  <View style={{ flex: 1, padding: 20}}>
    <DrawerItem
      label="Profile"
      onPress={() => navigation.navigate('Profile')}
    />
    <DrawerItem
      label="Chat"
      onPress={() => navigation.navigate('Chat')}
    />
    <DrawerItem
      label="Lobbies"
      onPress={() => navigation.navigate('Lobbies')}
    />
    <Text style={{ fontSize: 8, marginBottom: 10 }}>Seraphine is the best champion</Text>
    <Image
      source={require('./sera-apc.png')}
      style={{width: 163.5, height: 329.5, borderRadius: 5, marginBottom:20}}
    />
    <DrawerItem
      label="Settings"
      onPress={() => navigation.navigate('Settings')}
    />
  </View>
);


const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Chat" component={Chat} />
        <Drawer.Screen name="Lobbies" component={Lobbies} />
        {/* Add more screens here */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;