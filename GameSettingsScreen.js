import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator , Header } from 'react-navigation-stack';
import StyledButton from './StyledButton';

export default class GameSettingScreen extends React.Component {

  static navigationOptions = {
    title: 'Game Settings',
  }

  state = {

  }

  handleClick = () => {
    let defaultData = {
      'GameName': "Game",
      'Team1Name': "Team 1",
      'Team2Name': "Team 2",
      'PointIncrement': 1,
      'WinPoints': 3
    }

    let passedData = defaultData;
    if (this.state.GameName !== "" && this.state.GameName !== undefined) {
      passedData.GameName = this.state.GameName
    }

    if (this.state.Team1Name !== "" && this.state.Team1Name !== undefined) {
      passedData.Team1Name = this.state.Team1Name
    }

    if (this.state.Team2Name !== "" && this.state.Team2Name !== undefined) {
      passedData.Team2Name = this.state.Team2Name
    }

    if (this.state.PointIncrement !== undefined && this.state.PointIncrement > 0) {
      passedData.PointIncrement = this.state.PointIncrement
    }

    if (this.state.WinPoints !== undefined && this.state.WinPoints > 0) {
      passedData.WinPoints = this.state.WinPoints
    }

    this.props.navigation.navigate('GamePoints', passedData)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            name="GameName"
            onChangeText={(GameName) => this.setState({GameName})}
            value={this.state.GameName}
            underlineColorAndroid="transparent"
            placeholder="Name of the game"
            placeholderTextColor="#b8bbc7"
          />
        </View>
        <View style={styles.textAreaContainer}>
          <TextInput
            name="Team1Name"
            onChangeText={(Team1Name) => this.setState({Team1Name})}
            value={this.state.Team1Name}
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Team 1 name"
            placeholderTextColor="#b8bbc7"
          />
        </View>
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            name="Team2Name"
            onChangeText={(Team2Name) => this.setState({Team2Name})}
            value={this.state.Team2Name}
            underlineColorAndroid="transparent"
            placeholder="Team 2 name"
            placeholderTextColor="#b8bbc7"
          />
        </View>
        <View style={styles.numberInputsContainer}>
          <View style={styles.textAreaContainer}>
            <TextInput
              style={styles.textArea}
              name="PointIncrement"
              onChangeText={(PointIncrement) => this.setState({PointIncrement})}
              value={this.state.PointIncrement}
              keyboardType="numeric"
              underlineColorAndroid="transparent"
              placeholder="Point incrementor"
              placeholderTextColor="#b8bbc7"
            />
          </View>
          <View style={styles.textAreaContainer}>
            <TextInput
              style={styles.textArea}
              name="WinPoints"
              onChangeText={(WinPoints) => this.setState({WinPoints})}
              value={this.state.WinPoints}
              keyboardType="numeric"
              underlineColorAndroid="transparent"
              placeholder="Points for a win"
              placeholderTextColor="#b8bbc7"
            />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <StyledButton title="Start Game!" onPress={() => this.handleClick()}></StyledButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  numberInputsContainer: {
    flex: 0.5,
    flexDirection: 'row',
    //backgroundColor: '#d1e2d3',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  startButton: {
    
  },
  buttonsContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    //backgroundColor: '#e4bc91',
  },
  container: {
    flex: 3,
    padding: 10,
    backgroundColor: '#2a2d34',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textArea: {
    color: '#fff',
    justifyContent: "flex-start"
  },
  textAreaContainer: {
    backgroundColor: '#656b81',
    margin: 8,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    maxHeight: 40,
  },
});