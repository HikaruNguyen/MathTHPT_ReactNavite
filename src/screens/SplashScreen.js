import React from "react";
import {Button, View, StyleSheet, Text, ProgressBarAndroid} from "react-native";

export default class SplashScreen extends React.Component {
    static navigationOptions = {};

    render() {
        return (
            <View style={styles.contain}>
                {/*<Button*/}
                {/*onPress={() => this.props.navigation.navigate('MyNavigation', {name: 'Lucy'})}*/}
                {/*title="Go to Lucy's profile"*/}
                {/*/>l*/}
                <Text style={styles.title}>
                    TRẮC NGHIỆM
                </Text>
                <Text style={styles.title}>
                    TOÁN THPT
                </Text>
                {/*<ProgressBarAndroid styleAttr="Inverse" color="white"/>*/}
            </View>

        );
    }

    componentDidMount() {
        // setTimeout(this.gotoMain(), 5000);
        this.gotoMain();
    }

    gotoMain() {
        this.props.navigation.navigate('MyNavigation', {name: 'Lucy'})
    }
}

const styles = StyleSheet.create({
    contain: {
        backgroundColor: '#2196F3',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    }
});