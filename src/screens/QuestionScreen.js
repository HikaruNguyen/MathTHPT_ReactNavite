import React from "react";
import { Image, TouchableOpacity, View, WebView, Text, StyleSheet } from "react-native";
import getMath from '../../assets/html';
import axios from 'axios';
import Swiper from 'react-native-swiper';

const instance = axios.create({
    baseURL: 'http://mathpt.webstarterz.com/api',
    headers: {
        'X-Math-Api-Key': 'manh123@abc'
    }
});
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
            header: `<head><script type=\'text/javascript\' async src=\'../../assets/mathjax/2.7-latest/MathJax.js?config=MML_CHTML\'></script></head>`,
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
                                    source={{ html:item.content }}
                                    javaScriptEnabled={true}
                                    style={{ flex: 1 }} />
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
        instance.get('/content/get-content.php?type=2&testID=' + mContext.props.navigation.state.params.id + '&page=1')
            .then(function (response) {
                console.log("responseJson: " + JSON.stringify(response));
                // const content = getHtml();
                // mContext.setState({
                //     // htmlContent: content
                //     contentPager: response.data.data
                // })
                //<WebView source={{html: header + content}} style={{flex: 1}}/>
                let mangStemp = [];
                let header = `<head><script type=\'text/javascript\' async src=\'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-MML-AM_CHTML\'></script></head>`;
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
