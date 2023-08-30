import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  StatusBar,
  Modal,
} from 'react-native';
import {Text} from '../../components';
import {COLORS, ImagesPath} from '../../constant';
import {Button} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';

const ReanimtaionScreen = ({navigation}) => {
  const isFocused = useIsFocused();

  const windowDimensions = useWindowDimensions();

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
            <View style={styles.overlay}>
              <Text
                style={styles.welcomeText}
                variant="titleLarge"
                color={COLORS.white}>
                Welcome to the
              </Text>
              <Text color={COLORS.white} variant="displayLarge">
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
            </View>
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
