import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  StatusBar,
  Modal,
} from 'react-native';
import {Text} from '../../../components';
import {COLORS, ImagesPath} from '../../../constant';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button} from 'react-native-paper';
const ReanimtaionScreen = () => {
  const windowDimensions = useWindowDimensions();
  const insets = useSafeAreaInsets();
  return (
    <>
      <Modal animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
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
              <Button
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
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Image
          source={ImagesPath.walkImage}
          style={{
            width: windowDimensions.width,
            height: windowDimensions.height - insets.top,
          }}
        />
      </View>
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
