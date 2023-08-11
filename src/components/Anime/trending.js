import {
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import backgroundStyles from '../../configs/backgroundStyles';
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../..';

const {width, height} = Dimensions.get('window');
const Card = ({item, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={() => onPress(item)}>
      <Image
        source={{
          uri: 'https://i.animepahe.ru/posters/355e6e3127aa31f0d806114169b52c4fb6da4b87df7f9c1809b9e3de97b8aac5.jpg',
        }}
        style={{
          width: width * 0.6,
          height: height * 0.4,
        }}
        className="rounded-xl"
      />
    </TouchableWithoutFeedback>
  );
};

const Trending = ({data}) => {
  const navigation = useNavigation();
  const handleClick = item => {
    navigation.navigate(ROUTES.ANIME_DETAILS, item);
  };
  return (
    <View className="mb-8">
      <View className="flex-row mx-4 mb-4 justify-between items-center">
        <Text
          className="text-base font-bold"
          style={{color: backgroundStyles.textColor}}>
          MOST WATCHED
        </Text>
      </View>

      <Carousel
        data={data}
        renderItem={({item}) => <Card item={item} onPress={handleClick} />}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{display: 'flex', alignItems: 'center'}}
      />
    </View>
  );
};

export default Trending;
