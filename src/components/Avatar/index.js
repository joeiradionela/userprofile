import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import componentStyles from '../../style/componentStyles'; // Import shared styles

const Avatar = (props) => {
    return (
      <View>
        <Image
          source={require('../../assets/avatar.png')}
          style={componentStyles.avatar} // Apply the circular styling here
        />
      </View>
    );
};

export default Avatar;

const componentsStyles = StyleSheet.create(componentsStyles);