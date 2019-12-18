import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import GameSettingsScreen from './GameSettingsScreen.js'
import GamePointCounter from './GamePointCounter.js';

export default class GamePointsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <GamePointCounter></GamePointCounter>
      </View>
    );
  }
}
