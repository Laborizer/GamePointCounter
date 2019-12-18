import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class GameSettingScreen extends React.Component {

  static navigationOptions = {
    title: 'Settings',
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Game Settings</Text>
        <Button
          title="Go to Game"
          onPress={() => this.props.navigation.navigate('GamePoints', {name: 'Jane'})}
        />
      </View>
    );
  }
}