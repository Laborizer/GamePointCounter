import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import StyledButton from './StyledButton.js'

export default class GamePointCounter extends Component {
  state = {
    pointIncrement: this.props.PointIncrement,
    team1Name: this.props.Team1Name,
    team2Name: this.props.Team2Name,
    team1Points: 0,
    team2Points: 0,
    team1Rounds: 0,
    team2Rounds: 0,
    timeRound: 0,
    timeGame: 0,
  }

  winRound = (teamName) => {
    Alert.alert(`${teamName} won the round!`)
    //this.props.onWin()
    if (teamName == this.state.team1Name) {
      this.setState({team1Rounds: this.state.team1Rounds + 1, team1Points: 0, team2Points: 0})
    } else if (teamName == this.state.team2Name) {
      this.setState({team2Rounds: this.state.team2Rounds + 1, team1Points: 0, team2Points: 0})
    }
  }

  checkWin = () => {
    if (this.state.team1Points >= this.props.WinPoints) {
      this.winRound(this.state.team1Name)
    } else if (this.state.team2Points >= this.props.WinPoints) {
      this.winRound(this.state.team2Name)
    }
  }

  handleClick = (buttonId) => {
    if (buttonId == 0) {
      this.setState({team1Points: this.state.team1Points + +this.state.pointIncrement})
    } else if (buttonId == 1) {
      this.setState({team1Points: this.state.team1Points - +this.props.PointIncrement})
    } else if (buttonId == 2) {
      this.setState({team1Points: 0, team2Points: 0, team1Rounds: 0, team2Rounds: 0})
      Alert.alert("Scores were reset!");
    } else if (buttonId == 3) {
      this.setState({team2Points: this.state.team2Points + +this.props.PointIncrement})
    } else if (buttonId == 4) {
      this.setState({team2Points: this.state.team2Points - +this.props.PointIncrement})
    }

    setTimeout(this.checkWin, 100)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.teamLabelContainer}>
          <Text style={styles.teamNameText}>{this.props.Team1Name}</Text>
          <Text style={styles.teamNameText}>{this.props.Team2Name}</Text>
        </View>
        <View style={styles.teamsContainer}>
          <View style={styles.team1Container}>
            <Text style={styles.teamScoreText}>Points: {this.state.team1Points}</Text>
            <Text style={styles.teamScoreText}>Rounds: {this.state.team1Rounds}</Text>
          </View>
          <View style={styles.team2Container}>
            <Text style={styles.teamScoreText}>Points: {this.state.team2Points}</Text>
            <Text style={styles.teamScoreText}>Rounds: {this.state.team2Rounds}</Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonsContainer}>
            <StyledButton title="+" onPress={() => this.handleClick(0)}></StyledButton>
            <StyledButton title="-" onPress={() => this.handleClick(1)}></StyledButton>
          </View>
          <StyledButton title="Reset" onPress={() => this.handleClick(2)}></StyledButton>
          <View style={styles.buttonsContainer}>
            <StyledButton title="+" onPress={() => this.handleClick(3)}></StyledButton>
            <StyledButton title="-" onPress={() => this.handleClick(4)}></StyledButton>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  teamLabelContainer: {
    flex: 0.5,
    flexDirection: 'row',
    marginTop: 50,
    //backgroundColor: '#d1e2d3',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  teamNameText: {
    flex: 1,
    alignSelf: 'center',
    textAlign: "center",
    fontSize: 24,
    color: '#fff'
  },
  teamScoreText: {
    alignSelf: 'center',
    textAlign: "center",
    fontSize: 24,
    color: '#fff'
  },
  teamsContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#d1ae94',
  },
  team1Container: {
    flex: 1,
    flexDirection: 'column',
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
    flexDirection: 'column',
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
    //backgroundColor: '#e4bc91',
  },
  container: {
    flex: 3,
    backgroundColor: '#2a2d34',
    alignItems: 'center',
    justifyContent: 'center',
  },
});