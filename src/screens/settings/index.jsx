import React, {useEffect, useState} from 'react';
import {View, Image, Alert, FlatList} from 'react-native';
import {ProfileStyle} from './profile.style';
import {CustomButton, Header, Text} from '../../components';
import {COLORS, ImagesPath} from '../../constant';
import {accout} from '../../json';
import {Button, TouchableRipple} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {deletePostAction, logOutAction} from '../../redux';
import Modal from 'react-native-modal';
import leftArrow from '../../assets/left-arrow.png';
import useSWR from 'swr';
import {SERVER_IP} from '../../config';
import {useIsFocused} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
const UserProfileScreen = ({navigation}) => {
  const userId = useSelector(state => state?.userLogin?.userLogin?.user?.id);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const [isModalVisible, setModalVisible] = useState(false);
  const postDelete = useSelector(state => state?.deletePost?.deletePost);
  console.log('postDelete', postDelete);
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
  const deleteAlert = itemId => {
    Alert.alert(
      'Delete Post',
      'Are you want to delete this post ',
      [
        {
          text: 'CANCEL',
          onPress: () => console.log('CANCEL PRESS'),
        },
        {
          text: 'OK',
          onPress: () => dispatch(deletePostAction(userId, itemId, mutate)),
        },
      ],
      {cancelable: false},
    );
  };
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          width: '33.33%',
          aspectRatio: 1,
          margin: 2,
        }}>
        <TouchableRipple
          onLongPress={() => deleteAlert(item?._id)}
          style={{width: '100%', height: '100%'}}>
          <Image
            source={{uri: item?.imageUrl}}
            style={{width: '100%', height: '100%', resizeMode: 'cover'}}
          />
        </TouchableRipple>
      </View>
    );
  };
  const openModal = () => {
    setModalVisible(true);
  };

  useEffect(() => {
    if (isFocused) {
      mutate();
      dispatch({type: 'CLEAR_ERROR'});
    }
  }, [isFocused]);

  return (
    <>
      <View style={ProfileStyle.container}>
        <Header
          img={leftArrow}
          navigation={navigation}
          bgClr={COLORS.linearPurple}
          setting
          onPress={openModal}
        />
        <View
          style={{
            display: 'flex',
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
          keyExtractor={(item, index) => index?.toString()}
          numColumns={3}
        />
      </View>
      {isModalVisible && (
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          onBackButtonPress={() => setModalVisible(false)}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          backdropOpacity={0.5}
          style={{
            justifyContent: 'flex-end',
            margin: 0,
          }}
          swipeDirection={['down']}
          propagateSwipe={true}
          onSwipeComplete={() => setModalVisible(false)}
          hideModalContentWhileAnimating={true}
          backdropTransitionOutTiming={1000}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 16,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              height: '70%',
            }}>
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
                          <Image
                            source={image}
                            style={{height: 30, width: 30}}
                          />
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
          </View>
        </Modal>
      )}
    </>
  );
};

export default UserProfileScreen;
