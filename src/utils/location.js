import {PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const getPermissionAndLocation = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message: 'We need your location for...',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Location permission granted');
      return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
          position => {
            const {latitude, longitude} = position.coords;
            resolve({latitude, longitude, current: true});
          },
          error => {
            console.log('Error getting location:', error);
            reject({current: false, latitude: 31.5204, longitude: 74.3587});
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      });
    } else {
      console.log('Location permission denied');
      return {current: false, latitude: 31.5204, longitude: 74.3587}; // You can handle this case differently as needed.
    }
  } catch (error) {
    console.log('Error requesting location permission:', error);
    return {current: false, latitude: 31.5204, longitude: 74.3587}; // You can handle this case differently as needed.
  }
};

export {getPermissionAndLocation};
