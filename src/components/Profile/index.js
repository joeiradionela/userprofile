// src/components/Profile.js
import React from 'react';
import { View, Text } from 'react-native';
import componentStyles from '../../style/componentStyles'; // Import shared styles

const Profile = ({ darkMode }) => {
  return (
    <View style={[componentStyles.profile, { backgroundColor: darkMode ? '#000' : '#fff' }]}>
      <Text style={[componentStyles.profileName, { color: darkMode ? '#fff' : '#000' }]}>
        Joeira Dionela
      </Text>
      <Text style={[componentStyles.profileAddress, { color: darkMode ? '#fff' : '#000' }]}>
        Zone 5, Bugo Cagayan de Oro City
      </Text>
    </View>
  );
};

export default Profile;
