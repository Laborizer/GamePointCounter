import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import GameSettingsScreen from './GameSettingsScreen.js'
import GamePointCounter from './GamePointCounter.js';

export default class GamePointsScreen extends React.Component {
  
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('GameName', 'Game'),
      headerStyle: {
        backgroundColor: '#444955'
      },
      headerTintColor: '#fff'
    };
  };

  postVictory = () => {
    this.props.navigation.navigate('GameSettings')
  }

  render() {
    const {navigation} = this.props
    var PointIncrement = this.props.navigation.getParam('PointIncrement', 1)
    var defaultWinPoints = 3*PointIncrement
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <GamePointCounter
          Team1Name={this.props.navigation.getParam('Team1Name', 'Team 1')}
          Team2Name={this.props.navigation.getParam('Team2Name', 'DefaultTeam 2')}
          PointIncrement={this.props.navigation.getParam('PointIncrement', 1)}
          WinPoints={this.props.navigation.getParam('WinPoints', defaultWinPoints)}
          onWin={this.postVictory}
        />
      </View>
    );
  }
}
