import {Image, TouchableOpacity, View} from 'react-native';
import {useState} from 'react';
import {CustomCardStyle} from './customCard.style';
import {RadioButton, TouchableRipple} from 'react-native-paper';
import {Icon, Text, Wrapper} from '../../components';

import {Background} from 'victory-native';
import {COLORS} from '../../constant';

export const CustomCard = ({
  onPress,
  title,
  subTitle,
  imageCard,
  leftBorderClr,
  icon,
}) => {
  const [show, setShow] = useState(false);
  return (
    <TouchableRipple
      onPress={onPress}
      style={[
        CustomCardStyle.card_con,
        {
          // borderLeftColor: leftBorderClr,
          // borderLeftWidth: 5,
          borderLeftColor: leftBorderClr ? leftBorderClr : COLORS.white,
          borderLeftWidth: leftBorderClr ? 5 : 1,
        },
      ]}>
      <>
        <View style={CustomCardStyle.content}>
          {imageCard && (
            <Image style={CustomCardStyle.img_card} source={imageCard} />
          )}
          {icon && <Icon name={icon} size={35} />}

          {title && subTitle ? (
            <View style={CustomCardStyle.title}>
              <Text color={COLORS.black} variant={'titleMedium'}>
                {title}
              </Text>
              <Text>{subTitle}</Text>
            </View>
          ) : (
            <View style={CustomCardStyle.title}>
              <Text color={COLORS.black} variant={'titleMedium'}>
                {title}
              </Text>
            </View>
          )}
        </View>

        <View style={CustomCardStyle.icon}>
          <Icon name={'ArrowIcon'} size={25} />
        </View>
        {/* {iconName ? (
          // <View style={CustomCardStyle.icon}>
          //   <Icon name={iconName} size={iconSize} />
          // </View>
        ) : (
          <TouchableOpacity
            onPress={() => setShow(!show)}
            style={[
              CustomCardStyle.outer,
              {borderColor: show ? COLORS.primary : 'gray'},
            ]}>
            <View
              style={[
                CustomCardStyle.inner,
                {backgroundColor: show ? COLORS.primary : 'gray'},
              ]}
            />
          </TouchableOpacity>
        )} */}
      </>
    </TouchableRipple>
  );
};
