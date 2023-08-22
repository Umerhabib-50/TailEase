import React from 'react';
import {TouchableOpacity, View} from 'react-native';

// import BackIcon from '../../../assets/logo/left-vector.svg';
import {CustomButton} from '../card/button/custom-button';
import {Text} from '../text/text';
import {COLORS} from '../../constant';
import {Appbar} from 'react-native-paper';
import {Icon} from './icon';
import {useNavigation} from '@react-navigation/native';

export const Header = ({
  icon_bg_clr,
  title,
  title2,
  righticon,
  right_icon_size,
  lefticon,
  left_icon_size,
  navigation,
  header_text,
  onRighticonpress,
  onleftIconpress,
  drawer,
  // myRoute,
  // startRunHandler,
  // liveTrack,
}) => {
  // const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {lefticon && (
            <View
              style={{
                // backgroundColor: COLORS.black,
                // backgroundColor: '#2f2f2f',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 7,
                padding: 5,
              }}>
              <TouchableOpacity
                onPress={() => {
                  // if (drawer && lefticon === 'BackIcon') {
                  //   navigation.navigate('holiday');
                  // } else
                  if (onleftIconpress) {
                    onleftIconpress();
                  } else if (lefticon === 'BackIcon') {
                    navigation.goBack();
                  }
                  // if (lefticon == 'BackIcon') {
                  //   navigation.goBack();
                  // } else {
                  //   // onleftIconpress();
                  //   // return;
                  // }
                }}>
                <Icon size={left_icon_size} name={lefticon} />
              </TouchableOpacity>
            </View>
          )}
          {title && title2 ? (
            <>
              <View
                style={{
                  width: 200,
                  marginLeft: '5%',
                  paddingRight: '3%',
                }}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18}}
                  color={COLORS.white}>
                  {title}
                </Text>
                <Text variant="bodyLarge" color={COLORS.white}>
                  {title2}
                </Text>
              </View>
            </>
          ) : (
            <>
              <View
                style={{
                  width: 200,
                  marginLeft: '5%',
                  paddingRight: '3%',
                }}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18}}
                  color={COLORS.white}>
                  {title}
                </Text>
              </View>
            </>
          )}
        </View>

        {righticon && (
          <View
            style={{
              // backgroundColor: icon_bg_clr,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 7,
              padding: 5,
            }}>
            <TouchableOpacity
              onPress={() => {
                if (righticon == 'CrossIcon') {
                  navigation.goBack();
                }

                // if (righticon == 'EditIcon') {
                //   onRighticonpress();
                //   return;
                // }
                // navigation.goBack();
              }}>
              <Icon size={right_icon_size} name={righticon} />
            </TouchableOpacity>
          </View>
        )}
      </View>

      {header_text && (
        <Text style={{marginTop: 10}} color="white">
          {header_text}
        </Text>
      )}
    </>
  );
};

{
  /* <>
      <View
        style={{
          padding: 14,
          backgroundColor: '#00A77A',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            text={title}
            variant="paragraph"
            color="#FFFF"
            style={{flex: 1, textAlign: 'center'}}
          />
          {myRoute && (
            <CustomButton
              title="Start Run"
              variant="startRun"
              color="#FD517A"
              onPress={startRunHandler}
            />
          )}
        </View>
      </View>
      {liveTrack && (
        <View
          style={{
            backgroundColor: '#00A77A',
            borderBottomLeftRadius: 14,
            borderBottomRightRadius: 14,
          }}>
          <View
            style={{
              backgroundColor: COLORS.white,
              width: '96%',
              marginHorizontal: 5,
              borderRadius: 30,
              padding: 6,
              alignSelf: 'center',
            }}>
            <Text
              text="Tracking"
              variant="h5"
              color="#00A77A"
              style={{textAlign: 'center'}}
            />
          </View>
        </View>
      )}
    </> */
}
