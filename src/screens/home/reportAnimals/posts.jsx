import React, {useEffect} from 'react';
import {FlatList, View, Alert} from 'react-native';
import {CustomCard, CustomLoader, Header, Text} from '../../../components';
import useSWR from 'swr';
import {SERVER_IP} from '../../../config';
import leftArrow from '../../../assets/left-arrow.png';
import {COLORS, ImagesPath} from '../../../constant';
import {useIsFocused} from '@react-navigation/native';

const PostsScreen = ({navigation}) => {
  const isFocused = useIsFocused();
  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const {data, mutate, error, isLoading} = useSWR(
    `${SERVER_IP}/WoundedAnimals/All`,
    fetcher,
  );
  const showAlert = () => {
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
          onPress: () => console.log('OK PRESS'),
        },
      ],
      {cancelable: false},
    );
  };
  useEffect(() => {
    if (isFocused) {
      mutate();
    }
  }, [isFocused]);
  return (
    <View style={{flex: 1}}>
      <Header
        img={leftArrow}
        navigation={navigation}
        bgClr={COLORS.linearPurple}
      />
      <View style={{paddingHorizontal: 10, flex: 1}}>
        {isLoading ? (
          <CustomLoader />
        ) : (
          <FlatList
            data={data?.woundedAnimals}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              const {description, imageUrl, woundedAnimal} = item;
              const name = item?.user?.name;
              return (
                <CustomCard
                  onLongPress={showAlert}
                  title={name}
                  imageUrl={imageUrl}
                  description={description}
                  onCardPress={() =>
                    navigation.navigate('wildLifeDetails', {item})
                  }
                />
              );
            }}
          />
        )}
      </View>
    </View>
  );
};

export default PostsScreen;
