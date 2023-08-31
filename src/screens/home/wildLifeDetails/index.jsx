import React, {useEffect, useState} from 'react';
import {
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  Animated,
  Linking,
} from 'react-native';
import leftArrow from '../../../assets/left-arrow.png';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {WildLifeStyles} from './wildLife.style';
import {CustomButton, Header, Text} from '../../../components';
import {COLORS} from '../../../constant';

const WildLifeDetailsScreen = ({navigation, route}) => {
  const {item} = route.params;
  const {description, imageUrl, woundedAnimal, latitude, longitude} = item;
  const arr = [1, 2, 3];
  const text = description;
  const [fadeIn] = useState(new Animated.Value(0));
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleTextExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  const markerCoordinate = {
    latitude: latitude,
    longitude: longitude,
  };

  useEffect(() => {
    // Animate fadeIn when the screen mounts
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <Animated.View style={{...WildLifeStyles.container, opacity: fadeIn}}>
      <View style={WildLifeStyles.image_sec}>
        <View style={{position: 'absolute', zIndex: 1}}>
          <Header
            bgClr={COLORS.white}
            img={leftArrow}
            navigation={navigation}
          />
        </View>
        {/* <Header img={leftArrow} navigation={navigation} /> */}
        <View style={WildLifeStyles.img_con}>
          <Image style={WildLifeStyles.dic_img} source={{uri: imageUrl}} />
        </View>
      </View>
      <View style={WildLifeStyles.white_sec_con}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 10}}>
          <View style={WildLifeStyles.name_verify_con}>
            <Text variant="headlineSmall">{item?.user?.name}</Text>
            <View style={WildLifeStyles.verify}>
              <Text variant="labelMedium" style={{color: 'green'}}>
                Verified
              </Text>
            </View>
          </View>
          <View style={WildLifeStyles.card_con}>
            {arr.map((item, index) => (
              <View style={WildLifeStyles.card} key={index}>
                <Text style={{color: COLORS.purple}}>Distance</Text>
                <Text style={{fontSize: 18}}>10 km</Text>
              </View>
            ))}
          </View>
          <View style={WildLifeStyles.disc_con}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Description</Text>
            <View style={{flexDirection: 'row', paddingVertical: 10}}>
              <Text style={{lineHeight: 25}}>
                {isExpanded ? text : text.slice(0, 100)}
                {text.length > 100 && (
                  <TouchableOpacity
                    onPress={toggleTextExpansion}
                    style={{position: 'relative'}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        position: 'absolute',
                        top: -16,
                        left: 6,
                      }}>
                      {isExpanded ? 'Show Less' : 'Show More'}
                    </Text>
                  </TouchableOpacity>
                )}
              </Text>
            </View>
          </View>
          <MapView
            // scrollEnabled={false}
            // zoomEnabled={false}
            style={WildLifeStyles.map}
            initialRegion={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}>
            <Marker
              coordinate={markerCoordinate}
              tracksViewChanges={false}
              pinColor={COLORS.purple}
            />
          </MapView>

          {/* <View style={WildLifeStyles.map}>
            <Text>MAP</Text>
          </View> */}
          <CustomButton
            onPress={() => {
              const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

              Linking.openURL(url).catch(err =>
                console.error('Error opening Google Maps:', err),
              );
            }}
            style={{marginTop: 20}}
            title={'Go To Maps'}
          />
        </ScrollView>
      </View>
    </Animated.View>
  );
};

export default WildLifeDetailsScreen;
