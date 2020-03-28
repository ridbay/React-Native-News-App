import React, { Component } from 'react';
// import { View, StyleSheet, Text } from 'react-native';
import { AppLoading } from 'expo';
import { Scene, Router, Stack } from 'react-native-router-flux';

import Home from '../modules/home/scenes/Home/index';

import Source from '../modules/home/scenes/Source/index';

import Article from '../modules/home/scenes/Article/index';
import {color, navTitleStyle} from '../styles/theme'

export default class Routes extends Component {

    render() {

        return (
            <Router>
                <Stack key='root'
                    navigationBarStyle={{ backgroundColor: "#fff" }}
                    titleStyle={navTitleStyle}
                    backButtonTintColor={color.black}>
                    <Scene key='Main' component={Home} title="Home" initial />
                    <Scene key='Article' component={Article} title="Article" />
                    <Scene key='Source' component={Source} title="Source" />
                </Stack>
            </Router>
        )
    }
}

