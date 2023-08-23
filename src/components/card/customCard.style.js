import {StyleSheet} from 'react-native';
import {COLORS} from '../../constant/colors';

export const CustomCardStyle = StyleSheet.create({
  dcImage: {
    width: 65,
    height: 80,
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
