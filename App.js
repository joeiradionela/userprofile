// src/App.js
import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import ImageTile from './src/components/ImageTile';
import Profile from './src/components/Profile';
import Account from './src/components/Account';
import Preferences from './src/components/Preferences';
import LogButton from './src/components/LogoutButton';
import componentStyles from './src/style/componentStyles'; // Import your component styles

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(previousState => !previousState);
  };

  return (
    <View style={[{ flex: 1 }, darkMode ? { backgroundColor: '#333' } : { backgroundColor: '#fff' }]}>
      <ScrollView >
        <ImageTile />
        <Profile darkMode={darkMode} />
        <Account />
        <Preferences darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <LogButton />
      </ScrollView>
    </View>
  );
};

export default App;
