//Chat.js

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Chat = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Welcome to the Chat Screen!</Text>

    </View>
  );
};

export default Chat;
