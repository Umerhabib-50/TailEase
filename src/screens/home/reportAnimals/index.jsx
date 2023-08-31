import React, {useEffect, useState} from 'react';
import {
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import {CustomButton, CustomInput, Text} from '../../../components';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {woundedAnimalAction} from '../../../redux';
// import Carousel from 'react-native-snap-carousel';

const windowWidth = Dimensions.get('window').width;

const ReportAnimalsScreen = ({navigation}) => {
  const userId = useSelector(state => state?.userLogin?.userLogin?.user?.id);
  const woundedAnimal = useSelector(state => state?.woundedAnimal);

  const dispatch = useDispatch();
  //   const [images, setImages] = useState([]);
  const [pic, setPic] = useState('');

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
      name: pic.assets[0].fileName, // Adjust the filename as needed
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
      // Launch the appropriate image picker
      const result =
        type === 'photo'
          ? await launchCamera(options)
          : await launchImageLibrary();
      if (result.didCancel) {
        navigation.navigate('home');
      } else {
        setPic(result);
        // setImages([...images, result.assets[0]]);
        // setImages([...images, result.assets[0]]);
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
      //   setModalVisible(false);
    };
  }, [navigation]);

  return (
    <View style={styles.centeredView}>
      {pic && (
        <>
          <View
            style={{
              width: '100%',
              height: 300,
              //   backgroundColor: 'pink',
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
          <CustomButton
            title="Open Camera"
            style={{marginVertical: 5, width: '80%'}}
            onPress={() => {
              launch_camera_gallery('photo');
            }}
          />
          <CustomButton
            title="Open Gallery"
            style={{marginVertical: 5, width: '80%'}}
            onPress={() => {
              launch_camera_gallery();
            }}
          />

          <TouchableOpacity
            style={{
              position: 'absolute',
              top: '80%',
              backgroundColor: '#E2E2E2',
              padding: 5,
              borderRadius: 5,
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
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 22,
    // backgroundColor: 'pink',
    padding: 20,
    width: '100%',
  },
  modalView: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',

    // margin: 20,
    // backgroundColor: 'white',
    // borderRadius: 20,
    // padding: 35,
    // alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  button: {
    // borderRadius: 20,
    // padding: 10,
    // elevation: 2,
  },
  buttonOpen: {
    // backgroundColor: '#F194FF',
  },
  buttonClose: {
    // backgroundColor: '#2196F3',
  },
  textStyle: {
    // color: 'white',
    // fontWeight: 'bold',
    // textAlign: 'center',
  },
  modalText: {
    // marginBottom: 15,
    // textAlign: 'center',
  },
});

export default ReportAnimalsScreen;
