import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { TextInput, Button, Avatar, Text } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';


const ProfileUpdateForm = () => {
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [email, setEmail] = useState('');
  const [avatarFile, setAvatarFile] = useState(null);

  const handleFileChange = async () => {
    try {
      const options = {
        mediaType: 'photo',
      };

      const response = await launchImageLibrary(options);

      if (!response.didCancel) {
        setAvatarFile(response.assets[0]);
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  const handleSubmit = async () => {
    // Perform the image upload and profile update logic here
    console.log('Name:', name);
    console.log('School:', school);
    console.log('Email:', email);
    console.log('Avatar:', avatarFile);

    // Add your logic to send the data to the server for profile update
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.avatarContainer}>
        {avatarFile && <Avatar.Image size={120} source={{ uri: avatarFile.uri }} />}
        <Button mode="outlined" onPress={handleFileChange}>
          Choose Image
        </Button>
      </View>

      <TextInput
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />
      <TextInput
        label="School"
        value={school}
        onChangeText={(text) => setSchool(text)}
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />

      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Update Profile
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});


export default ProfileUpdateForm;
