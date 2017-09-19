import React from 'react';
import {
    StackNavigator
} from 'react-navigation';

import {MyAppNavigator, MyQuestionStack} from "./navigators/StackNavigators";
import SplashScreen from "./screens/SplashScreen";
export const Main = StackNavigator({
    MySplash: {
        screen: SplashScreen,
    },
    MyNavigation: {
        screen: MyAppNavigator,

    },
    MyQuestion: {
        screen: MyQuestionStack
    }

}, {
    headerMode: 'none'
});

