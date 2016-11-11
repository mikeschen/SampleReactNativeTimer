import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

var formatTime = require('minutes-seconds-milliseconds');

class AwesomeProject extends Component {
  constructor(props) {
  super(props);
  this.state = {
    timeElapsed: false,
    running: false,
    startTime: null
  };
  }

  startStopButton() {
    var style = this.state.running ? styles.stopButton : styles.startButton;

    return (
      <TouchableHighlight
        underlayColor="gray"
        onPress={this.handleStartPress.bind(this)}
        style={[styles.button, style]}>
        <Text>
          {this.state.running ? 'Stop' : 'Start'}
        </Text>
      </TouchableHighlight>
    )
  }

  handleStartPress() {
    if(this.state.running) {
      clearInterval(this.interval);
      this.setState({running: false});
      return
    }

    this.setState({startTime: new Date()});

    this.interval = setInterval(() => {

      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true
      });
    }, 30);

  }

  border(color) {
    return {
      borderColor: color,
      borderWidth: 4
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.timerWrapper}>
            <Text style={styles.timer}>
              {formatTime(this.state.timeElapsed)}
            </Text>
          </View>
          <View style={styles.buttonWrapper}>
            {this.startStopButton()}
          </View>
        </View>
        <View style={styles.footer}>
            <Text>
                I am List of Laps
            </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 1
  },
  timerWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  timer: {
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00CC00'
  },
  stopButton: {
    borderColor: '#CC0000'
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);