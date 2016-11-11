import React, { Component } from 'react';
import TimerMixin from 'react-timer-mixin';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var AwesomeProject = React.createClass({
  mixins: [TimerMixin],
  getInitialState: function() {
    return {
      timeLineTop: 0
    }
  },
  
  componentDidMount: function() {
    this.setInterval( () => { 
      this.setState({
        timeLineTop: this.state.timeLineTop+1
      })
    }, 1000);
  },
    
  render: function() {  
    return (
      <View style={styles.container}>
        <Text>Timer - {this.state.timeLineTop}</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:60,
    marginLeft:30
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
