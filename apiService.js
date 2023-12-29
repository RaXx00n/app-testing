// apiService.js (or any utility file)

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const getStoredToken = async () => {
  try {
    const token = await AsyncStorage.getItem('jwtToken');
    return token;
  } catch (error) {
    // Handle errors
  }
};

export const fetchData = async () => {
  const token = await getStoredToken();

  // Include the token in the request headers
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.get('your_api_endpoint', { headers });
    // Handle the response
  } catch (error) {
    // Handle errors
  }
};
