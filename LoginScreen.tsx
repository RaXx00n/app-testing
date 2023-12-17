import React, { useState } from 'react';
import { View, Text, TextInput, Button, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      console.log('Attempting login...');
      const response = await axios.post('http://172.31.9.191:3000/login/', {
        username,
        password,
      });
      

      //for console debugging
      console.log('Reponse:', response.data);
      

       // Navigate to SuccessScreen upon successful login
      if (response.data.success) {
       
        navigation.navigate('Success');
      } else {
        setErrorMessage('Invalid credentials. Please try again.')
      }

    } catch (error) {
      console.error('Error during login:', error);
      if (error.response) {
        // The server responded with a status code outside of 2xx
        setErrorMessage('Invalid credentials. Please try again.');
      } else if (error.request) {
        // The request was made but no response was received
        setErrorMessage('Network error. Please check your connection.');
      } else {
        // Something happened in setting up the request that triggered an Error
        setErrorMessage('An error occurred. Please try again later.');
      }
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
          accessibilityLabel="Username Input"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          accessibilityLabel="Password Input"
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </KeyboardAvoidingView>
  );
};

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

export default LoginScreen;