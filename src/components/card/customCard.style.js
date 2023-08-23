import {StyleSheet} from 'react-native';
import {COLORS} from '../../constant/colors';

export const CustomCardStyle = StyleSheet.create({
  card: {
    marginTop: 9,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: 'white',
  },

  dcImage: {
    width: 55,
    height: 70,
    backgroundColor: COLORS.lightPurple,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: 10,
  },
  midSection: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '4%',
  },
  arrow: {
    backgroundColor: COLORS.lightPurple,
    width: 23,
    height: 24,
    borderRadius: 6,
  },
});
