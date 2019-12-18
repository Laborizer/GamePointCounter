import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator , Header } from 'react-navigation-stack';
import StyledButton from './StyledButton';

export default class GameSettingScreen extends React.Component {

  static navigationOptions = {
    title: 'Game Settings',
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset = {60} behavior="height" enabled>
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Name of the game"
            placeholderTextColor="#b8bbc7"
          />
        </View>
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Team 1 name"
            placeholderTextColor="#b8bbc7"
          />
        </View>
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Team 2 name"
            placeholderTextColor="#b8bbc7"
          />
        </View>
        <View style={styles.numberInputsContainer}>
          <View style={styles.textAreaContainer}>
            <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              placeholder="Point incrementor"
              placeholderTextColor="#b8bbc7"
            />
          </View>
          <View style={styles.textAreaContainer}>
            <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              placeholder="Points for a win"
              placeholderTextColor="#b8bbc7"
            />
          </View>
        </View>
        <Button
          title="Start Game!"
          onPress={() => this.props.navigation.navigate('GamePoints', {name: 'Jane'})}
        />
      </KeyboardAvoidingView>
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
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
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