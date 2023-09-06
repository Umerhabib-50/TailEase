import {Image, TouchableOpacity, View, Animated} from 'react-native';
import {useState, useEffect, useRef} from 'react';
import {CustomCardStyle} from './customCard.style';
import {Card, RadioButton, TouchableRipple} from 'react-native-paper';
import {Icon, Text, Wrapper} from '../../components';

import {Background} from 'victory-native';
import {COLORS, ImagesPath} from '../../constant';

export const CustomCard = ({
  title,
  description,
  onCardPress,
  onNavigatePress,
  imageUrl,
  onLongPress,
  index,
}) => {
  const translateY = useRef(new Animated.Value(-15 * index)).current;

  useEffect(() => {
    // Animate the card when it's about to be displayed
    Animated.spring(translateY, {
      toValue: 0,
      duration: 100, // Adjust the animation duration as needed
      delay: index * 100, // Delay each card's animation
      useNativeDriver: true,
    }).start();
  }, [index, translateY]);
  return (
    <Animated.View style={{transform: [{translateY}]}}>
      <Card
        style={CustomCardStyle.card}
        onPress={onCardPress}
        onLongPress={onLongPress}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={{uri: imageUrl}} style={CustomCardStyle.dcImage} />

          <View style={{marginLeft: 25, flex: 1}}>
            <Text variant="titleMedium" fontWeight="900">
              {title}
            </Text>

            <View style={CustomCardStyle.midSection}>
              <Text fontWeight="900">$ 25</Text>
              <Text style={{marginLeft: '18%'}} fontWeight="900">
                location
              </Text>
            </View>
          </View>
          <View style={CustomCardStyle.arrow}>
            <TouchableRipple onPress={onNavigatePress}>
              <Image
                source={ImagesPath.nextArrow}
                style={{height: 23, width: 23}}
              />
            </TouchableRipple>
          </View>
        </View>
      </Card>
    </Animated.View>
  );
};
