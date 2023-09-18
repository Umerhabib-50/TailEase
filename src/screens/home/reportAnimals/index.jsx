import React, {useEffect, useState, useRef} from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Animated,
} from 'react-native';
import {CustomButton, CustomInput, Text} from '../../../components';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {woundedAnimalAction} from '../../../redux';
import {COLORS, ImagesPath} from '../../../constant';
import {postData} from '../../../json';
import {useIsFocused} from '@react-navigation/native';
import {getPermissionAndLocation} from '../../../utils/location';
const ReportAnimalsScreen = ({navigation}) => {
  const isFocused = useIsFocused();
  const userId = useSelector(state => state?.userLogin?.userLogin?.user?.id);
  const woundedAnimal = useSelector(state => state?.woundedAnimal);
  const translateXCard1 = useRef(new Animated.Value(100)).current;
  const translateXCard2 = useRef(new Animated.Value(-100)).current;
  const dispatch = useDispatch();
  const [pic, setPic] = useState('');
  const [modalVisible, setModalVisible] = useState(true);
  const [cordinates, setCordinates] = useState({
    longitude: 74.3587,
    latitude: 31.5204,
    current: false,
  });
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();

  const onSubmit = data => {
    let formdata = new FormData();
    formdata.append('image', {
      uri: pic.assets[0].uri,
      type: pic.assets[0].type,
      name: pic.assets[0].fileName,
    });
    formdata.append('woundedAnimal', 'dog');
    formdata.append('description', data.disc);
    formdata.append('longitude', cordinates.longitude);
    formdata.append('latitude', cordinates.latitude);
    dispatch(woundedAnimalAction(formdata, userId, navigation));
  };

  const launch_camera_gallery = async type => {
    setModalVisible(false);
    try {
      const options = {
        mediaType: 'photo',
      };
      const result =
        type === 'photo'
          ? await launchCamera(options)
          : await launchImageLibrary();
      if (result.didCancel) {
        setModalVisible(true);
      } else {
        setPic(result);
      }
    } catch (error) {}
  };

  const animateElement = (element, toValue, duration) => {
    Animated.timing(element, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (isFocused) {
      setModalVisible(true);
      animateElement(translateXCard1, 0, 500);
      animateElement(translateXCard2, 0, 500);
      (async () => {
        const {latitude, longitude, current} = await getPermissionAndLocation();
        setCordinates({latitude, longitude, current});
      })();
    } else {
      animateElement(translateXCard1, 100, 500);
      animateElement(translateXCard2, -100, 500);
      setPic('');
      reset();
    }
  }, [isFocused]);

  return (
    <View style={styles.centeredView}>
      {pic && (
        <>
          <View style={styles.reportImg_con}>
            <Image style={styles.reportImg} source={{uri: pic.assets[0].uri}} />
          </View>

          <View style={{width: '100%', marginTop: 10}}>
            <CustomInput
              control={control}
              errors={errors}
              label="Discription"
              name="disc"
              multiline
            />
          </View>
          <View style={{width: '100%', marginTop: 10}}>
            <CustomButton
              title={woundedAnimal?.loading ? 'loading...' : 'Post'}
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </>
      )}

      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modalView}>
          {postData.map((item, ind) => {
            const {image, title} = item;
            const animatedStyle =
              ind === 0
                ? {transform: [{translateX: translateXCard1}]}
                : {transform: [{translateX: translateXCard2}]};
            return (
              <TouchableOpacity
                key={ind}
                style={[animatedStyle, styles.card]}
                onPress={() => {
                  ind == 0 && launch_camera_gallery('photo'),
                    ind == 1 && launch_camera_gallery();
                }}>
                <View style={styles.cardImage}>
                  <Image source={image} style={{height: 25, width: 25}} />
                  <Text style={{marginLeft: 10}}>{title}</Text>
                </View>
                <Image
                  source={ImagesPath.nextArrow}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            );
          })}

          <TouchableOpacity
            style={styles.closeIcon}
            onPress={() => {
              setModalVisible(false);
              navigation.navigate('home');
            }}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../../assets/close.png')}
            />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    padding: 20,
    width: '100%',
  },
  modalView: {
    width: '100%',
    flex: 1,
    backgroundColor: COLORS.gray,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  card: {
    backgroundColor: COLORS.white,
    height: '7%',
    width: '80%',
    borderRadius: 10,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cardImage: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  reportImg_con: {width: '100%', height: 300},
  reportImg: {height: '100%', width: '100%', objectFit: 'fill'},

  closeIcon: {
    position: 'absolute',
    top: '80%',
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 50,
  },
});

export default ReportAnimalsScreen;
