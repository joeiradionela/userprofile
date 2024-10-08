// src/components/Preferences.js
import React, { useState } from 'react';
import { StyleSheet, View, Text, Switch, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import componentStyles from '../../style/componentStyles'; // Import your component styles

const Preferences = ({ darkMode, toggleDarkMode }) => {
  const [pushNotifications, setPushNotifications] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(false);


  return (
    <View style={componentStyles.prefsection}>
      <Text style={componentStyles.prefsectionTitle}>Preferences</Text>

      {/* Dark Mode Toggle */}
      <View style={componentStyles.prefrow}>
        <View style={[componentStyles.prefrowIcon, { backgroundColor: '#007afe' }]}>
          <FeatherIcon color="#fff" name="moon" size={20} />
        </View>
        <Text style={componentStyles.prefrowLabel}>Dark Mode</Text>
        <View style={componentStyles.prefrowSpacer} />
        <Switch onValueChange={toggleDarkMode} value={darkMode} />
      </View>

      {/* Language Display */}
      <TouchableOpacity style={componentStyles.accrow}>
        <View style={[componentStyles.accrowIcon, { backgroundColor: '#007afe' }]}>
          <FeatherIcon color="#fff" name="globe" size={20} />
        </View>
        <Text style={componentStyles.accrowLabel}>Language</Text>
        <View style={componentStyles.accrowSpacer} />
        <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
      </TouchableOpacity>

      {/* Push Notifications Toggle */}
      <View style={componentStyles.prefrow}>
        <View style={[componentStyles.prefrowIcon, { backgroundColor: '#38C959' }]}>
          <FeatherIcon color="#fff" name="bell" size={20} />
        </View>
        <Text style={componentStyles.prefrowLabel}>Push Notifications</Text>
        <View style={componentStyles.prefrowSpacer} />
        <Switch onValueChange={setPushNotifications} value={pushNotifications} />
      </View>

      {/* Email Notifications Toggle */}
      <View style={componentStyles.prefrow}>
        <View style={[componentStyles.prefrowIcon, { backgroundColor: '#38C959' }]}>
          <FeatherIcon color="#fff" name="mail" size={20} />
        </View>
        <Text style={componentStyles.prefrowLabel}>Email Notifications</Text>
        <View style={componentStyles.prefrowSpacer} />
        <Switch onValueChange={setEmailNotifications} value={emailNotifications} />
      </View>
    </View>
  );
};

export default Preferences;
