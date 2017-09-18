import React from 'react';
import {
    DrawerNavigator, StackNavigator
} from 'react-navigation';
import {DrawerItems} from 'react-navigation';
import {
    ScrollView, StyleSheet, Image
} from 'react-native';

import CategoryScreen from './screens/CategoryScreen';
import MainScreen from './screens/MainScreen';

const MyStackNavigator = StackNavigator({
    MyMain: {
        screen: MainScreen
    }
});

const CategoryNaivgator = StackNavigator({
    MyCategory: {
        screen: CategoryScreen
    }
});

export const MyApp = DrawerNavigator({
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
               source={require('../imgs/banner.jpg')}/>
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