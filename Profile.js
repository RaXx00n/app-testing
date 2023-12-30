//Profile.js

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import ProfileUpdateForm from './ProfileUpdateForm.js';

const Profile = () => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const handleUpdateFormToggle = () => {
    setShowUpdateForm(!showUpdateForm);
  };

  return (
    <View>
      <Text>This is the Profile Screen</Text>
      <Button title="Update Profile" onPress={handleUpdateFormToggle} />

      {showUpdateForm && <ProfileUpdateForm />}
    </View>
  );
};

export default Profile;
