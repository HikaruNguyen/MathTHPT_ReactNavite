import React, {Component} from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {Main} from './Router.js';

export default class App extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar backgroundColor="#1E88E5" barStyle="light-content"/>
                <Main/>
            </View>

        );
    }
}
