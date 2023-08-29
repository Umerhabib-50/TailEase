import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  Image,
  useWindowDimensions,
  StatusBar,
  Modal,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  useAnimatedKeyboard,
} from 'react-native-reanimated';

import {Text} from '../../../components';
import {COLORS, ImagesPath} from '../../../constant';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const TAB_WIDTH = 150;
const TABS = ['Home', 'Search', 'Profile'];

const ReanimtaionScreen = () => {
  const windowDimensions = useWindowDimensions();
  const insets = useSafeAreaInsets();
  //   const offset = useSharedValue(-TAB_WIDTH);

  //   const animatedStyles = useAnimatedStyle(() => ({
  //     transform: [{translateX: offset.value}],
  //   }));

  //   const handlePress = tab => {
  //     const newOffset = (() => {
  //       switch (tab) {
  //         case 'Home':
  //           return -TAB_WIDTH;
  //         case 'Search':
  //           return 0;
  //         case 'Profile':
  //           return TAB_WIDTH;
  //         default:
  //           return -TAB_WIDTH;
  //       }
  //     })();

  //     offset.value = withTiming(newOffset);
  //   };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        // visible={modalVisible}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Image
          source={ImagesPath.walkImage}
          style={{
            width: windowDimensions.width,
            height: windowDimensions.height - insets.top,
          }}
        />
        <View style={styles.overlay}>
          <Text
            style={styles.welcomeText}
            variant="headlineSmall"
            color={COLORS.white}>
            Welcome to the
          </Text>
          <Text color={COLORS.white} variant="displayMedium">
            TailEase
          </Text>
        </View>
      </View>
      {/* <View style={styles.container}>
        <View style={styles.tabs}>
          {TABS.map((tab, i) => (
            <Pressable
              key={tab}
              style={
                i !== TABS.length - 1
                  ? [styles.tab, styles.divider]
                  : styles.tab
              }
              onPress={() => handlePress(tab)}>
              <Text style={styles.tabLabel}>{tab}</Text>
            </Pressable>
          ))}
        </View>
        <Animated.View style={[styles.animatedBorder, animatedStyles]} />
      </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-start',
    // justifyContent: 'center',
    marginTop: '8%',
  },
  welcomeText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    // margin: 20,s
    backgroundColor: 'white',
    borderRadius: 20,
    height: '100%',
    width: '100%',
    // padding: '100%',
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default ReanimtaionScreen;
