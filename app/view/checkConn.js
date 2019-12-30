import React, {Component} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  CheckConnectivity = () => {
    NetInfo.configure({
      reachabilityUrl: 'https://clients3.google.com/generate_204',
      reachabilityTest: async response => response.status === 204,
      reachabilityLongTimeout: 60 * 1000, // 60s
      reachabilityShortTimeout: 5 * 1000, // 5s
    });
    NetInfo.addEventListener(state => {
      if (state.isConnected) {
        Alert.alert('You are online!');
      } else {
        Alert.alert('You are offline!');
      }
    });
  };

  render() {
    return (
      <View>
        <Button
          onPress={() => this.CheckConnectivity()}
          title="Check Internet Connectivity"
          color="#841584"
        />
      </View>
    );
  }
}
