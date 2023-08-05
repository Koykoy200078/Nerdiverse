import {View, Text} from 'react-native';
import React from 'react';
import backgroundStyles from '../../../configs/backgroundStyles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const Watch = ({data, navigation}) => {
  return (
    <View className="my-6">
      <Text
        style={{color: backgroundStyles.textColor}}
        className="text-lg mx-4 mb-5">
        Watch
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {data &&
          data.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => {}}>
                <View
                  className="mr-4 items-center border rounded-md p-2"
                  style={{borderColor: backgroundStyles.separator}}>
                  <Text
                    className="text-xs"
                    style={{color: backgroundStyles.textColor}}>
                    Episode 1
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Watch;
