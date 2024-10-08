import { StyleSheet } from 'react-native';

const componentStyles = StyleSheet.create({
  /** Avatar */
avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, // For a circular avatar
},
  /** ImageTile */
  avacontainer: {
    paddingTop: 50, // Example padding for ImageTile
    backgroundColor: '#5bc0de', // Background color for ImageTile
    borderRadius: 10, // Rounded corners for ImageTile
    alignItems: 'center', // Center items inside ImageTile
  },
 
  /** Profile styles */
  profile: {
    padding: 24,
    backgroundColor: '#f2f2f2',
    alignItems: 'center', // Center align items in the profile view
    paddingTop: 0,
    paddingBottom: 3,
  },

  profileName: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: '600',
    color: '#414d63',
    textAlign: 'center',
  },
  profileAddress: {
    marginTop: 5,
    fontSize: 16,
    color: '#414d63',
    textAlign: 'center',
  },

  /** Account styles */
accsection: {
  padding: 24,
  paddingBottom: 0,
},
accsectionTitle: {
  paddingTop: 0,
  paddingVertical: 12,
  fontSize: 12,
  fontWeight: '600',
  color: '#9e9e9e',
  textTransform: 'uppercase',
  letterSpacing: 1.1,
},
accrow: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  height: 50,
  backgroundColor: '#f2f2f2',
  borderRadius: 8,
  marginBottom: 12,
  paddingHorizontal: 12,
},
accrowIcon: {
  width: 32,
  height: 32,
  borderRadius: 9999,
  marginRight: 12,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
},
accrowLabel: {
  fontSize: 17,
  fontWeight: '400',
  color: '#0c0c0c',
},
accrowSpacer: {
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 0,
},


/** Preferences styles */
prefsection: {
  padding: 24,
  paddingTop: 0,
},
prefsectionTitle: {
  paddingVertical: 12,
  fontSize: 12,
  fontWeight: '600',
  color: '#9e9e9e',
  textTransform: 'uppercase',
  letterSpacing: 1.1,
},
prefrow: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  height: 50,
  backgroundColor: '#f2f2f2',
  borderRadius: 8,
  marginBottom: 12,
  paddingHorizontal: 12,
},
prefrowIcon: {
  width: 32,
  height: 32,
  borderRadius: 9999,
  marginRight: 12,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
},
prefrowLabel: {
  fontSize: 17,
  fontWeight: '400',
  color: '#0c0c0c',
},
prefrowSpacer: {
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 0,
},

/** Log Button Styles */
logButton: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#5bc0de',
  paddingVertical: 5, // Keep vertical padding as is
  paddingHorizontal: 5, // Reduce horizontal padding
  borderRadius: 8,
  paddingTop: 0,
  width: 318,
  marginLeft: 20,
 
},

logIconContainer: {
  marginRight: 8,
  marginTop: 5,
},
logbuttonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
  marginTop: 5,
},


});

export default componentStyles;