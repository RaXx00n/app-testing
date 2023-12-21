//Lobbies.js

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Lobbies = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Welcome to the Lobbies Screen!</Text>

    </View>
  );
};

export default Lobbies;
