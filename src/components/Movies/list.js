import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import backgroundStyles from '../../configs/backgroundStyles';
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');
const List = ({title, data}) => {
  let movieName = 'One Piece';
  return (
    <View className="mb-8 space-y-4">
      <View className="flex-row mx-4 justify-between items-center">
        <Text
          className="text-base font-bold"
          style={{color: backgroundStyles.textColor}}>
          {title}
        </Text>
        <TouchableOpacity>
          <Text style={{color: backgroundStyles.textColor}}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* Movie Row */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {data.map((item, index) => {
          return (
            <TouchableWithoutFeedback key={index} onPress={() => {}}>
              <View className="space-y-1 mr-4">
                <Image
                  source={{
                    uri: 'https://i.animepahe.ru/posters/355e6e3127aa31f0d806114169b52c4fb6da4b87df7f9c1809b9e3de97b8aac5.jpg',
                  }}
                  style={{
                    width: width * 0.33,
                    height: height * 0.22,
                  }}
                  className="rounded-xl"
                />
                <Text>
                  {movieName.length > 14
                    ? movieName.slice(0, 14) + '...'
                    : movieName}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default List;
