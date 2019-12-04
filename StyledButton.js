import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';

export default class StyledButton extends React.PureComponent {
  render() {
    const { onPress, title } = this.props;
    return (
      <TouchableHighlight onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            {title}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 5,
    borderRadius: 3,
    borderColor: "#74ae78",
    borderWidth: 1,
    backgroundColor: "#8bdd92",
    minHeight: 40,
    minWidth: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  }
});