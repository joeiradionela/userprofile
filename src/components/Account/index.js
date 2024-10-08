// src/components/Account.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import componentStyles from '../../style/componentStyles'; // Import your component styles

const Account = () => {
  return (
    <View style={componentStyles.accsection}>
      <Text style={componentStyles.accsectionTitle}>Account</Text>

      {/* Edit Profile */}
      <TouchableOpacity style={componentStyles.accrow}>
        <View style={[componentStyles.accrowIcon, { backgroundColor: '#007afe' }]}>
          <FeatherIcon color="#fff" name="user" size={20} />
        </View>
        <Text style={componentStyles.accrowLabel}>Edit Profile</Text>
        <View style={componentStyles.accrowSpacer} />
        <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
      </TouchableOpacity>

      {/* Privacy */}
      <TouchableOpacity style={componentStyles.accrow}>
        <View style={[componentStyles.accrowIcon, { backgroundColor: '#007afe' }]}>
          <FeatherIcon color="#fff" name="lock" size={20} />
        </View>
        <Text style={componentStyles.accrowLabel}>Privacy</Text>
        <View style={componentStyles.accrowSpacer} />
        <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default Account;
