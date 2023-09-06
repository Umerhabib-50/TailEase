import React from 'react';
import {View, Image, Alert, FlatList} from 'react-native';
import {ProfileStyle} from './profile.style';
import {Header, Text} from '../../components';
import {COLORS, ImagesPath} from '../../constant';
import {accout} from '../../json';
import {TouchableRipple} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {logOutAction} from '../../redux';
import leftArrow from '../../assets/left-arrow.png';
import useSWR from 'swr';
import {SERVER_IP} from '../../config';
let arr = [
  {id: '1', image: ImagesPath.melatonin},
  {id: '2', image: ImagesPath.melatonin},
  {id: '3', image: ImagesPath.melatonin},
  {id: '4', image: ImagesPath.melatonin},
  {id: '5', image: ImagesPath.melatonin},
  {id: '6', image: ImagesPath.melatonin},
  {id: '7', image: ImagesPath.melatonin},
];
const UserProfileScreen = ({navigation}) => {
  const userId = useSelector(state => state?.userLogin?.userLogin?.user?.id);
  const dispatch = useDispatch();
  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const {data, mutate, error, isLoading} = useSWR(
    `${SERVER_IP}/woundedAnimals/userPosts/${userId}`,
    fetcher,
  );

  const showAlert = () => {
    Alert.alert(
      'Log Out',
      'Are you sure?',
      [
        {
          text: 'OK',
          onPress: () => dispatch(logOutAction(navigation)),
        },
        {
          text: 'CANCEL',
          onPress: () => console.log('OK PRESS'),
        },
      ],
      {cancelable: false},
    );
  };
  const renderItem = ({item}) => {
    return (
      <Image
        source={{uri: item?.imageUrl}}
        style={{
          width: '33.33%',
          aspectRatio: 1,
          marginLeft: 2,
        }}
      />
    );
  };
  return (
    <View style={ProfileStyle.container}>
      <Header
        img={leftArrow}
        navigation={navigation}
        bgClr={COLORS.linearPurple}
      />
      <View
        style={{
          display: 'flex',
          // justifyContent: 'space-between',
          flexDirection: 'row',
          height: '20%',
          alignItems: 'center',
          paddingHorizontal: 16,
        }}>
        <View>
          <Image
            source={ImagesPath.profileImg}
            style={{
              height: 80,
              width: 80,
              borderRadius: 50,
            }}
          />
          <Text style={{marginTop: 5}}>Rehan khan</Text>
        </View>
        <TouchableRipple
          style={{
            marginLeft: '9%',
            backgroundColor: COLORS.purple,
            padding: 7,
            borderRadius: 8,
          }}>
          <Text color={COLORS.white}>Edit Profile</Text>
        </TouchableRipple>
      </View>
      <FlatList
        data={data?.woundedAnimals}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3} // Display three items in each row
      />
      {/* <Image
        source={ImagesPath.profileImg}
        style={{
          height: '50%',
          width: '100%',
        }}
      />
      <View style={{paddingHorizontal: '7%'}}>
        <Text
          style={{marginTop: '10%'}}
          variant="titleMedium"
          fontWeight="bold">
          Account
        </Text>
        <View>
          {accout.map((item, ind) => {
            const {image, title} = item;
            return (
              <TouchableRipple
                key={ind}
                onPress={() => {
                  ind == 0 && navigation.navigate('changePasswordScreen');
                  ind == 1 && showAlert();
                }}>
                <>
                  <View
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      marginTop: 7,
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Image source={image} style={{height: 30, width: 30}} />
                      <Text style={{marginLeft: 20}}>{title}</Text>
                    </View>
                    <Image
                      source={ImagesPath.nextArrow}
                      style={{height: 20, width: 20}}
                    />
                  </View>
                  <View
                    style={{
                      borderBottomWidth: 0.5,
                      borderBottomColor: 'black',
                      paddingVertical: 6,
                    }}
                  />
                </>
              </TouchableRipple>
            );
          })}
        </View>
      </View> */}
    </View>
  );
};

export default UserProfileScreen;
