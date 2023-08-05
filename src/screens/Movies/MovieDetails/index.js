import {View, Text, Dimensions, ScrollView, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import backgroundStyles from '../../../configs/backgroundStyles';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ChevronLeftIcon, HeartIcon} from 'react-native-heroicons/outline';
import LinearGradient from 'react-native-linear-gradient';
import Watch from '../Watch';

const {width, height} = Dimensions.get('window');
const MovieDetails = () => {
  const {params: item} = useRoute();
  const navigation = useNavigation();
  useEffect(() => {}, [item]);
  let movieName = 'One Piece';
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: backgroundStyles.backgroundColor,
      }}
      contentContainerStyle={{paddingBottom: 20}}
      showsVerticalScrollIndicator={false}>
      {/* back button and movie poster */}
      <View className="w-full">
        <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4">
          <TouchableOpacity
            className="rounded-xl p-1"
            onPress={() => navigation.goBack()}>
            <ChevronLeftIcon
              size={30}
              strokeWidth={2.5}
              color={backgroundStyles.textColor}
            />
          </TouchableOpacity>

          <TouchableOpacity className="rounded-xl p-1">
            <HeartIcon size={30} strokeWidth={2.5} color="white" />
          </TouchableOpacity>
        </SafeAreaView>

        <View>
          <Image
            source={{
              uri: 'https://i.animepahe.ru/posters/355e6e3127aa31f0d806114169b52c4fb6da4b87df7f9c1809b9e3de97b8aac5.jpg',
            }}
            style={{
              width: width,
              height: height * 0.55,
            }}
          />

          <LinearGradient
            colors={['transparent', '#171717cc', '#171717']}
            style={{width: width, height: height * 0.4}}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            className="absolute bottom-0"
          />
        </View>
      </View>

      {/* Movie Details */}
      <View className="space-y-3" style={{marginTop: -(height * 0.09)}}>
        <Text
          className="text-center text-3xl font-bold tracking-wider"
          style={{color: backgroundStyles.textColor}}>
          {movieName}
        </Text>
        <Text
          className="text-center text-base font-semibold"
          style={{color: backgroundStyles.textColor}}>
          Oct 20, 1999 to ?
        </Text>

        <View className="flex-row justify-center items-center mx-4 space-x-2">
          <Text
            className="text-base text-center font-semibold"
            style={{color: backgroundStyles.textColor}}>
            Action •
          </Text>
          <Text
            className="text-base text-center font-semibold"
            style={{color: backgroundStyles.textColor}}>
            Adventure •
          </Text>
          <Text
            className="text-base text-center font-semibold"
            style={{color: backgroundStyles.textColor}}>
            Fantasy
          </Text>
        </View>

        <Text
          className="mx-4 tracking-wide"
          style={{color: backgroundStyles.textColor}}>
          Gol D. Roger was known as the "Pirate King," the strongest and most
          infamous being to have sailed the Grand Line. The capture and
          execution of Roger by the World Government brought a change throughout
          the world. His last words before his death revealed the existence of
          the greatest treasure in the world, One Piece. It was this revelation
          that brought about the Grand Age of Pirates, men who dreamed of
          finding One Piece—which promises an unlimited amount of riches and
          fame—and quite possibly the pinnacle of glory and the title of the
          Pirate King.
        </Text>
      </View>

      <Watch data={[1, 2, 3]} />
    </ScrollView>
  );
};

export default MovieDetails;
