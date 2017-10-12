import React from 'react';
import {
    StyleSheet, Image, View, Button, TouchableOpacity, FlatList, Text
} from 'react-native';
import axios from 'axios';

const MenuButton = (props) => (
    <TouchableOpacity onPress={() => {
        props.navigation.navigate('DrawerOpen')
    }}>
        <Image source={require('../../imgs/icon_menu.png')} style={{ width: 24, height: 22, marginLeft: 16 }} />
    </TouchableOpacity>
);

const instance = axios.create({
    baseURL: 'http://mathpt.webstarterz.com/api',
    headers: {
        'X-Math-Api-Key': 'manh123@abc'
    }
});
let mContext;
export default class MainScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Home',
        headerLeft: <MenuButton navigation={navigation} />,
        headerStyle: {
            backgroundColor: '#2196F3'
        },
        headerTitleStyle: {
            color: '#fff',
        },
        drawerLabel: 'Home',
        headerBackTitle: null,
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../imgs/ic_category.png')}
                style={[styles.icon]}
            />
        ),
    });

    constructor(props) {
        super(props);
        mContext = this;
        this.state = {
            list: [],
            refresh: true
        }
    }

    render() {
        return (
            <View>
                <FlatList style={items.contain}
                    data={this.state.list}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('MyQuestion', {
                                name: item.displayname,
                                id: item.id
                            })}>
                            <View style={{ borderTopColor: 'green' }}>
                                <Text style={items.name}>{item.displayname}</Text>
                                <Text style={items.author}>{item.author}</Text>
                                <View style={items.line} />
                            </View>
                        </TouchableOpacity>
                    }
                    keyExtractor={item => item.id}
                    refreshing={this.state.refresh}
                    onRefresh={() => {
                        this.callAPI();
                    }}
                    onEndReachedThreshold={-0.5}
                    onEndReached={() => {

                    }}
                />
            </View>
        );
    }

    componentDidMount() {
        this.callAPI();

    }

    callAPI() {
        mContext.setState({
            refresh: true
        });
        instance.defaults.headers.common['X-Math-Api-Key'] = 'manh123@abc';
        instance.get('/content/get-test.php')
            .then(function (response) {
                console.log("responseJson: " + JSON.stringify(response));
                mContext.setState({
                    list: response.data.data,
                    refresh: false
                })

            })
            .catch(function (error) {
                console.log(error);
                mContext.setState({
                    refresh: false
                })
            });
    }
}
const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

const items = StyleSheet.create({
    contain: {
        backgroundColor: 'white'
    },
    name: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 14,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10
    },
    author: {
        fontSize: 13,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    line: {
        backgroundColor: '#dddddd',
        height: 1,
        alignSelf: 'stretch',
    }
});