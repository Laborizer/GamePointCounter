import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class GamePointCounter extends Component {
  state = {
    team1Points: 0,
    team2Points: 0,
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.teamsContainer}>
          <View style={styles.team1Container}>
            <Text>{this.state.team1Points}</Text>
          </View>
          <View style={styles.team2Container}>
            <Text>{this.state.team2Points}</Text>
          </View>
        </View>
        <View>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  teamsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});