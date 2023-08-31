import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  StatusBar,
  Modal,
  Animated,
} from 'react-native';
import {Text} from '../../components';
import {COLORS, ImagesPath} from '../../constant';
import {Button} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';

const ReanimtaionScreen = ({navigation}) => {
  const fade = useRef(new Animated.Value(0)).current;
  const isFocused = useIsFocused();
  const windowDimensions = useWindowDimensions();

  useEffect(() => {
    if (isFocused) {
      Animated.timing(fade, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fade, {
        toValue: 0, // or the initial value
        duration: 0, // no need to animate, reset immediately
        useNativeDriver: true,
      }).start();
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Image
        source={ImagesPath.walkImage}
        style={{
          width: windowDimensions.width,
          height: windowDimensions.height,
        }}
      />

      <Modal transparent={true} visible={isFocused}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Animated.View style={[styles.overlay, {opacity: fade}]}>
              <Text
                style={styles.welcomeText}
                variant="titleLarge"
                color={COLORS.white}>
                Welcome to the
              </Text>
              <Text variant="displayLarge" color={COLORS.white}>
                TailEase
              </Text>
              <Button
                onPress={() => {
                  // setModalVisible(false);
                  navigation.navigate('login');
                }}
                mode="outlined"
                textColor="white"
                style={{
                  borderWidth: 1,
                  borderColor: COLORS.white,
                  marginTop: '10%',
                }}>
                Let's go
              </Button>
            </Animated.View>
          </View>
        </View>
      </Modal>
    </View>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    height: '110%',
    width: '100%',
  },
});

export default ReanimtaionScreen;
