
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Alert } from 'react-native';
import HomePage from './HomePage';
import { styles } from './styles';

export default function App() {
  const handleButtonClick = () => {
    Alert.alert('Button Clicked!', 'You clicked the button.');
  };

  return (
    <View style={styles.container}>
      <HomePage onPress={handleButtonClick} />
    </View>
  );
}