import { StyleSheet, View } from 'react-native';
import componentStyles from '../../style/componentStyles'; // Import shared styles
import Avatar from '../Avatar';

const ImageTile = () => {
  return (
    <View style={componentStyles.avacontainer}>
      <Avatar />
    </View>
  );
};

export default ImageTile;

const componentsStyles=StyleSheet.create(componentStyles);
