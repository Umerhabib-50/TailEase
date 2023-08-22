const {StyleSheet} = require('react-native');

export const AuthStyle = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    paddingHorizontal: '7%',
    paddingVertical: '20%',
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '5%',
  },
  forgot: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '8%',
  },
  check: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
