// Login.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();





  const handleLogin = async () => {
    try {
      console.log('Attempting login...');
      const response = await axios.post('http://172.31.9.191:3000/auth/login/', {
        username,
        password,
      });
  
      console.log('Response:', response);
  
      if (response && response.data && response.data.success) {
        // Use response.headers, not response.data.headers
        const token = response.headers['authorization']; // Adjust the header name if needed
        console.log('Received Token:', token);
  
        if (token) {
          await AsyncStorage.setItem('jwtToken', token);
          const storedToken = await AsyncStorage.getItem('jwtToken');
          console.log('Stored Token:', storedToken);
          navigation.navigate('Home');
        } else {
          setErrorMessage('Invalid token received from the server.');
        }
      } else {
        setErrorMessage('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      // ... (rest of the error handling)
    }
  };
  




  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          accessibilityLabel="Username Input" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          accessibilityLabel="Password Input" />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  innerContainer: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});

export default Login;