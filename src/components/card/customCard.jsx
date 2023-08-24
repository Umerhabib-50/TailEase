import {Image, TouchableOpacity, View} from 'react-native';
import {useState} from 'react';
import {CustomCardStyle} from './customCard.style';
import {Card, RadioButton, TouchableRipple} from 'react-native-paper';
import {Icon, Text, Wrapper} from '../../components';

import {Background} from 'victory-native';
import {COLORS, ImagesPath} from '../../constant';

export const CustomCard = ({title, description, onNavigatePress}) => {
  // const [show, setShow] = useState(false);
  return (
    <TouchableRipple>
      <Card style={CustomCardStyle.card}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={CustomCardStyle.dcImage}>
            <Image source={ImagesPath.vet} style={{width: 45, height: 45}} />
          </View>

          <View style={{marginLeft: 25, flex: 1}}>
            <Text variant="titleMedium" fontWeight="900">
              {title}
            </Text>
            <Text variant="bodyMedium" fontWeight="200">
              {description}
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
    </TouchableRipple>
  );
};
