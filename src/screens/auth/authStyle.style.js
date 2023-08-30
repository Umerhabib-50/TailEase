const {StyleSheet} = require('react-native');

export const AuthStyle = StyleSheet.create({
  container: {
    display: 'flex',
    // justifyContent: 'space-evenly',
    height: '100%',

    // paddingVertical: '20%',
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '10%',
  },
  imageParent: {
    height: '50%',
    width: '100%',
    position: 'relative',
  },
  imageBackground: {
    backgroundColor: 'black',
    position: 'absolute',
    height: '90%',
    width: '100%',
  },
  image: {
    height: '90%',
    width: '100%',
    opacity: 0.5,
  },
  text: {
    height: '43%',
    width: '100%',
    position: 'absolute',
    top: 120,
    left: 30,
  },
});
