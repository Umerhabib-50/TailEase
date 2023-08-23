import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constant';

export const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    padding: '7%',
  },
  cardTop: {
    backgroundColor: COLORS.purple,
    height: '22%', // Adjust the height as needed
    borderRadius: 20,
    flexDirection: 'row',
    padding: 20,
  },
  serviceSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '4%',
    justifyContent: 'space-between',
  },
  mapTop: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '3%',
  },
  mapImage: {
    backgroundColor: COLORS.lightPurple,
    alignItems: 'center',
    width: 50,
    height: 45,
    borderRadius: 9,
  },
});
