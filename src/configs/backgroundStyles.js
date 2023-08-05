import {useColorScheme} from 'react-native';

export const isDarkMode = useColorScheme() === 'dark';

export default {
  backgroundColor: isDarkMode ? '#111827' : '#F9F9F9',
  textColor: isDarkMode ? '#EFEFF0' : '#333333',

  accentColor: isDarkMode ? '#64A0FF' : '#007BFF',
  color1: isDarkMode ? '#FFC773' : '#FF9500',
  color2: isDarkMode ? '#45454B' : '#E5E5E5',
  warning: isDarkMode ? '#FF7875' : '#FF3B30',
  card: isDarkMode ? '#292929' : '#F5F5F5',
  separator: isDarkMode ? '#45454B' : '#E5E5E5',
};
