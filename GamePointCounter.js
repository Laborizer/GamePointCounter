import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

export default class GamePointCounter extends Component {
  state = {
    team1Name: "Team1",
    team2Name: "Team2",
    team1Points: 0,
    team2Points: 0,
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.teamLabelContainer}>
          <Text style={{flex: 1, alignSelf: 'center', textAlign: "center"}}>{this.state.team1Name}</Text>
          <Text style={{flex: 1, alignSelf: 'center', textAlign: "center"}}>{this.state.team2Name}</Text>
        </View>
        <View style={styles.teamsContainer}>
          <View style={styles.team1Container}>
            <Text>{this.state.team1Points}</Text>
          </View>
          <View style={styles.team2Container}>
            <Text>{this.state.team2Points}</Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonsContainer}>
            <Button title="+"></Button>
            <Button title="-"></Button>
          </View>
          <Button title="Reset"></Button>
          <View style={styles.buttonsContainer}>
            <Button title="+"></Button>
            <Button title="-"></Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  teamLabelContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#d1e2d3',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  teamsContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d1ae94',
  },
  team1Container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#82d3ff',
    minHeight: 200,
    borderRadius: 10,
    borderColor: '#27b9fd',
    borderWidth: 4,
  },
  team2Container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fe7276',
    minHeight: 200,
    borderRadius: 10,
    borderColor: '#ea4d4d',
    borderWidth: 4,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e4bc91',
  },
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});