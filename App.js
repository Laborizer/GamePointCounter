import React from 'react';
import { createAppContainer, AppNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import GameSettingsScreen from './GameSettingsScreen.js';
import GamePointsScreen from './GamePointsScreen.js';

const mainNavigation = createStackNavigator({
  GameSettings: {screen: GameSettingsScreen},
  GamePoints: {screen: GamePointsScreen},
});
const App = createAppContainer(mainNavigation);

export default App;

