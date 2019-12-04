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
    margin: 5,
    padding: 3,
    borderRadius: 3,
    borderColor: "#0667b4",
    borderWidth: 1,
    backgroundColor: "#1297de",
  },
  buttonText: {
    color: '#e67e22',
    textAlign: center,
  }
});