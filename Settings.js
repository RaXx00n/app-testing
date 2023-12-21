//Settings.js

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Welcome to the Settings Screen!</Text>

    </View>
  );
};

export default Settings;
