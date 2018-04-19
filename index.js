//import libraray to help create a component
import React from 'react';
import ReactNative from 'react-native';

//create a component
const App = () => <Text>Some shit</Text>;

//render to device
ReactNative.AppRegistry.registerComponent('albums', () => App);
