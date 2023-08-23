import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constant';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const ReportDetailStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.linearPurple,
  },
  image_sec: {
    flex: 0.35,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
  },
  dic_img: {width: 250, height: 250, position: 'absolute', top: 60},

  white_sec_con: {
    backgroundColor: 'white',
    flex: 0.65,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    
  },
  name_verify_con: {
    paddingVertical: 20,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  verify: {
    backgroundColor: COLORS.lightGreen,
    padding: 8,
    borderRadius: 7,
  },

  card_con: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  card: {
    width: 95,
    height: 70,
    backgroundColor: COLORS.lightPurple,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  disc_con: {
    paddingVertical: 15,
  },
  map: {
    height: 150,
    backgroundColor: COLORS.lightPurple,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10
  },
});
