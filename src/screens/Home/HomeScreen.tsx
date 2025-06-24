import React from 'react';
import {View, Text, Button, useColorScheme, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const HomeScreen: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={[styles.container, backgroundStyle]}>
      <Text style={[styles.counterText, {color: isDarkMode ? "white" : "black"}]}>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 24,
    marginBottom: 10,
  },
});

export default HomeScreen;
