import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AppLoading } from 'expo';
import { Scene, Router, Stack } from 'react-native-router-flux';

export default class extends React {
    state = {
        isReady: false
    }
    componentDidMount() {
        setTimeout(() => this.setState({ isReady: true }), 1000)
    }
    render() {
        let navTitleStyle = {fontSize: 15, fontFamily: "HelveticaNeue-Medium", color: '#1E1611', letterSpacing: 0.4};
        if(!this.state.isReady)
            return <AppLoading/>
        return(
            <Router>
                <Stack key='root'
                navigationBarStyle={{backgroundColor: "#fff"}}
                titleStyle={navTitleStyle}
                backButtonTintColor={'#1E1611'}>
                    <Scene key='Main' component={Main} title="Main" initial/>
                </Stack>
            </Router>
        )
    }
}