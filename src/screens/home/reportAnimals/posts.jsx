import React from 'react';
import {View} from 'react-native';
import {CustomCard, Header, Text} from '../../../components';
import useSWR from 'swr';
import {SERVER_IP} from '../../../config';
import leftArrow from '../../../assets/left-arrow.png';

const PostsScreen = ({navigation}) => {
  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const {data, mutate, error, isLoading} = useSWR(
    `${SERVER_IP}/WoundedAnimals/All`,
    fetcher,
  );
  console.log('PostsScreen', data);
  return (
    <>
      <Header img={leftArrow} navigation={navigation} />
      <View style={{padding: 10}}>
        {data?.woundedAnimals.map((item, i) => {
          const {description, imageUrl, woundedAnimal} = item;
          const name = item?.user?.name;
          return (
            <CustomCard
              key={i}
              title={name}
              imageUrl={imageUrl}
              description={description}
              onCardPress={() => navigation.navigate('wildLifeDetails', {item})}
            />
          );
        })}
      </View>
    </>
  );
};

export default PostsScreen;
