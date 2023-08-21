import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';

import styles from './modal.styles';
import {useNavigation} from '@react-navigation/native';
// icons

import {Text} from '../text/text';
import {CustomButton} from '../button/custom-button';
import {Icon} from '../common/icon';
import {Modal, TouchableRipple} from 'react-native-paper';
import {COLORS} from '../../constant';
import {useDispatch, useSelector} from 'react-redux';

export const CustomModal = ({
  children,
  modalVisible,
  modalHeight,
  setModalVisible,
  closeicon,
  navigateTo,
  navigationOptions,
  title,
  success,
  error,
  errormessage,
  successmessage,
  Delete,
  deleteName,
  deleteAction,
  selector,
  deleteId,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [loading, setloading] = useState(false);
  const delsuccess = useSelector(state => selector);

  const deletePromise = () => {
    dispatch(deleteAction(deleteId));
    return new Promise((resolve, reject) => {
      if (delsuccess) {
        resolve(delsuccess);
      } else {
        reject({error: 'deletion failed'});
      }
    });
  };

  const onDelete = () => {
    setloading(true);
    deletePromise()
      .then(() => {
        navigation.navigate(navigateTo);
        setloading(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Modal visible={modalVisible}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)',
          position: 'absolute',
        }}>
        <View
          style={{
            backgroundColor: COLORS.white,
            width: '80%',
            height: modalHeight ? modalHeight : '50%',
            position: 'relative',
            borderRadius: 20,
          }}>
          {closeicon && (
            <View style={{position: 'absolute', top: 15, right: 25}}>
              <TouchableRipple onPress={setModalVisible}>
                <Icon name={closeicon} size={25} />
              </TouchableRipple>
            </View>
          )}
          {children}
          {error && (
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                position: 'relative',
              }}>
              <Icon name="ErrorIcon" size={80} />
              <Text style={{marginVertical: 15}}>{errormessage}</Text>
              <CustomButton
                onPress={setModalVisible}
                title={'Ok'}
                color={COLORS.error}
                style={{width: '80%', position: 'absolute', top: '80%'}}
                textColor="white"
              />
            </View>
          )}
          {success && (
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                position: 'relative',
              }}>
              <Icon name="SuccessIcon" size={80} />
              <Text style={{marginVertical: 15}}>{successmessage}</Text>
              <CustomButton
                onPress={() => {
                  setModalVisible();
                  navigation.navigate(navigateTo);
                }}
                title={'Ok'}
                color="green"
                style={{width: '80%', position: 'absolute', top: '80%'}}
                textColor="white"
              />
            </View>
          )}
          {Delete && (
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                position: 'relative',
              }}>
              <Icon name="DeleteIcon" size={100} />
              <Text style={{margin: 15}}>
                {`Are You Sure You Want To Delete this ${deleteName} `}
              </Text>
              <CustomButton
                onPress={onDelete}
                title={loading ? '' : 'Yes'}
                color={COLORS.error}
                style={{width: '80%', position: 'absolute', top: '80%'}}
                textColor="white"
                loading={loading}
              />
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

// {children ? (
//   <View
//     style={{
//       flex: 1,
//       backgroundColor: 'rgba(0,0,0,0.8)',
//       alignItems: 'center',
//       justifyContent: 'flex-end',
//     }}>
//     <View
//       style={{
//         width: '100%',
//         backgroundColor: '#FFF',
//         borderTopLeftRadius: 20,
//         borderTopRightRadius: 20,
//         flex: 0.8,
//       }}>
//       {children}
//     </View>
//   </View>
// ) : (
//   <View style={styles.centeredView}>
//     <View
//       style={[
//         styles.modalView,
//         error
//           ? {borderColor: '#ff525c'}
//           : success
//           ? {
//               borderColor: '#00B295',
//             }
//           : {
//               borderColor: '#00B295',
//             },
//       ]}>
//       {(error || success) && (
//         <View
//           style={{
//             alignItems: 'center',
//             width: '100%',
//           }}>
//           {error && <Icon name="ErrorIcon" />}
//           {success && <Icon name="SuccessIcon" />}

//           {success && (
//             <Text
//               text="AWESOME!"
//               variant="h1"
//               color="#000"
//               style={{textAlign: 'center', marginTop: 16, width: '80%'}}
//             />
//           )}

//           <Text
//             text={title}
//             variant="h4"
//             color="#000"
//             style={{textAlign: 'center', marginTop: 16, width: '80%'}}
//           />

//           {/* <View style={tailwind('w-11/12  self-center')}> */}
//           <CustomButton
//             title="Continue"
//             variant="custom"
//             color="#FFF"
//             style={{marginVertical: 16}}
//             onPress={
//               navigateTo
//                 ? () =>
//                     navigation.navigate(navigateTo, {
//                       ...navigationOptions,
//                     })
//                 : setModalVisible
//             }
//           />
//           {/* </View> */}
//         </View>
//       )}
//     </View>
//   </View>
// )}

{
  /* <Modal
animationType="slide"
transparent={true}
visible={modalVisible}
onRequestClose={setModalVisible}>
<View
  style={{
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  }}>
  <View
    style={{
      width: '100%',
      backgroundColor: '#FFF',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      flex: 0.8,
    }}>
    {children}
  </View>
</View>
</Modal> */
}
