import React, {Component} from 'react';
import App from './src/App.js';
import {AppRegistry} from 'react-native';

export default class MathTHPTReactNative extends Component {
    render() {
        return (
            <App/>
        );
    }
}

AppRegistry.registerComponent('MathTHPTReactNative', () => MathTHPTReactNative);
