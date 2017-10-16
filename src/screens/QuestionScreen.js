import React from "react";
import { Image, TouchableOpacity, View, WebView, Text, StyleSheet } from "react-native";
import getMath from '../../assets/html';
import Swiper from 'react-native-swiper';
import { MyAxios } from '../config/MyAxios';

const MenuBack = (props) => (
    <TouchableOpacity onPress={() => {
        goBack();
    }}>
        <Image source={require('../../imgs/ic_back.png')} style={{ width: 24, height: 22, marginLeft: 16 }} />
    </TouchableOpacity>
);
let mContext;
export default class QuestionScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.name}`,
        headerStyle: {
            backgroundColor: '#2196F3'
        },
        headerTitleStyle: {
            color: '#fff',
        },
        headerLeft: <TouchableOpacity onPress={() => {
            console.log("on Back");
            navigation.goBack(null);
        }}>
            <Image source={require('../../imgs/ic_back.png')} style={{ width: 24, height: 24, marginLeft: 16 }} />
        </TouchableOpacity>
    });

    constructor(props) {
        super(props);
        mContext = this;
        this.state = {
            title: '',
            pages: []
        };
    }

    componentWillUnmount() {

    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <Swiper style={styles.wrapper} showsButtons={true}
                    loop={false}
                    showsPagination={false}>
                    {this.state.pages.map((item, key) => {
                        return (
                            <View key={key} style={{ flex: 1 }}>
                                <WebView
                                    source={{ html: item.content }}
                                    style={{ flex: 1 }}
                                    javaScriptEnabledAndroid={true}  />
                            </View>
                        )
                    })}
                </Swiper>
            </View>
        );
    }

    componentDidMount() {
        this.loadQuestion();

    }

    loadQuestion() {
        let type;
        let keyId;
        if (mContext.props.navigation.state.params.type === 'category') {
            type = 1;
            keyId = 'cateID';
        } else if (mContext.props.navigation.state.params.type === 'test') {
            type = 2;
            keyId = 'testID';
        } else {
            type = 3;
            keyId = '';
        }
        MyAxios.get('/content/get-content.php?type=' + type + '&' + keyId + '=' + mContext.props.navigation.state.params.id + '&page=1')
            .then(function (response) {
                console.log("responseJson: " + JSON.stringify(response));
                let mangStemp = [];
                for (var i = 0; i < response.data.data.length; i++) {
                    const contentHtml = getMath("<b>Câu " + (i + 1) + ":</b> " + response.data.data[i].question, response.data.data[i].image,
                        response.data.data[i].answerA, response.data.data[i].answerB, response.data.data[i].answerC,
                        response.data.data[i].answerD);
                    const obj = {
                        id: response.data.data[i].id,
                        content: contentHtml
                    }
                    mangStemp.push(obj);

                }
                // console.log("mangStemp: " + JSON.stringify(mangStemp.length));
                mContext.setState({
                    pages: mContext.state.pages.concat(mangStemp)

                });

            })
            .catch(function (error) {
                console.log(error);
            });
    }

}

const styles = StyleSheet.create({
    wrapper: { flex: 1, },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    pageStyle: {
        alignItems: 'center',
        padding: 20,
    }
});
