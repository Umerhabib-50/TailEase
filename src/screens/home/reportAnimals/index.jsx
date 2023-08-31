import React, {useEffect, useState, useRef} from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Dimensions,
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
const windowWidth = Dimensions.get('window').width;

const ReportAnimalsScreen = ({navigation}) => {
  const userId = useSelector(state => state?.userLogin?.userLogin?.user?.id);
  const woundedAnimal = useSelector(state => state?.woundedAnimal);
  const translateXCard1 = useRef(new Animated.Value(100)).current;
  const translateXCard2 = useRef(new Animated.Value(-100)).current;
  const dispatch = useDispatch();
  const [pic, setPic] = useState('');
  const isFocused = useIsFocused();
  const [modalVisible, setModalVisible] = useState(true);
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

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setModalVisible(true);
      setPic('');
      reset();
    });
    return () => {
      unsubscribe();
    };
  }, [navigation]);
  useEffect(() => {
    if (isFocused) {
      Animated.timing(translateXCard1, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
      Animated.timing(translateXCard2, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateXCard1, {
        toValue: 100,
        duration: 500,
        useNativeDriver: true,
      }).start();
      Animated.timing(translateXCard2, {
        toValue: -100,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [isFocused]);
  return (
    <View style={styles.centeredView}>
      {pic && (
        <>
          <View
            style={{
              width: '100%',
              height: 300,
            }}>
            <Image
              style={{height: '100%', width: '100%', objectFit: 'fill'}}
              source={{uri: pic.assets[0].uri}}
            />
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
            style={{
              position: 'absolute',
              top: '80%',
              backgroundColor: COLORS.white,
              padding: 16,
              borderRadius: 50,
            }}
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
});

export default ReportAnimalsScreen;
