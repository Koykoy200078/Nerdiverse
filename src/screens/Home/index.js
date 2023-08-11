import React, {useState} from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import backgroundStyles from '../../configs/backgroundStyles';
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import {Icons} from '../../configs/icons';
import {ScrollView} from 'react-native-gesture-handler';

import Trending from '../../components/Anime/trending';
import List from '../../components/Anime/list';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../..';

const Home = () => {
  const {width, height} = useWindowDimensions();
  const ios = Platform.OS === 'ios';

  const navigation = useNavigation();

  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpComing] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);

  return (
    <View
      className="flex-1"
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundStyles.backgroundColor,
      }}>
      <SafeAreaView className={ios ? 'mb-2' : 'mb-3'}>
        <View className="flex-row items-center justify-between mx-4">
          <Bars3CenterLeftIcon
            size={30}
            strokeWidth={2}
            color={backgroundStyles.textColor}
          />

          <Text
            className="text-3xl font-bold"
            style={{color: backgroundStyles.textColor}}>
            Anime
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate(ROUTES.SEARCH)}>
            <Icons.Feather
              name="search"
              size={30}
              color={backgroundStyles.textColor}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        {/* Trending Movies */}
        <Trending data={trending} />

        {/* Upcoming Movies */}
        <List title="UPCOMING" data={upcoming} />

        {/* Upcoming Movies */}
        <List title="TOP RATED" data={topRated} />
      </ScrollView>
    </View>
  );
};

export default Home;
