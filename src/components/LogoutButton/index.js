// src/components/LogButton.js
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import componentStyles from '../../style/componentStyles'; // Adjust the import path as needed

const LogButton = () => {
  return (
    <TouchableOpacity style={componentStyles.logButton}>
      <View style={componentStyles.logIconContainer}>
        <FeatherIcon name="log-in" size={20} color="#fff" />
      </View>
      <Text style={componentStyles.logbuttonText}>Log Out</Text>
    </TouchableOpacity>
  );
};

export default LogButton;
