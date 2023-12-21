//Profile.js

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Welcome to the Profile Screen!</Text>

    </View>
  );
};

export default Profile;
