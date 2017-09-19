import React from 'react';

import {DrawerItems, DrawerNavigator, StackNavigator} from "react-navigation";
import MainScreen from "../screens/MainScreen";
import CategoryScreen from "../screens/CategoryScreen";
import {Image, ScrollView, StyleSheet} from "react-native";
import QuestionScreen from "../screens/QuestionScreen";

export const MyStackNavigator = StackNavigator({
    MyMain: {
        screen: MainScreen
    }
});

export const CategoryNaivgator = StackNavigator({
    MyCategory: {
        screen: CategoryScreen
    }
});

export const MyQuestionStack = StackNavigator({
    MyQuestion: {
        screen: QuestionScreen
    }
});


export const MyAppNavigator = DrawerNavigator({
    Home: {
        screen: MyStackNavigator,
    },
    Notifications: {
        screen: CategoryNaivgator,
    },
}, {
    drawerWidth: 300,
    drawerPosition: 'left',
    contentComponent: props => <CustomDrawerContentComponent {...props} />
});

const CustomDrawerContentComponent = (props) => (
    <ScrollView style={styles.container}>
        <Image style={styles.banner}
               source={require('../../imgs/banner.jpg')}/>
        <DrawerItems {...props} />
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    banner: {
        resizeMode: 'cover',
        width: 300,
        height: 150
    },
});
