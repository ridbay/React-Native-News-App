import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import Routes from './app/config/routes';

export default class App extends Component {
  render() {
    return (
      <Routes />
    );
  }

}

