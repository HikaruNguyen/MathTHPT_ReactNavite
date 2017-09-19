import React from "react";
import {Image, TouchableOpacity, View, WebView, ScrollView} from "react-native";
import getMath from '../../assets/html';

import axios from 'axios';

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
        <Image source={require('../../imgs/ic_back.png')} style={{width: 24, height: 22, marginLeft: 16}}/>
    </TouchableOpacity>
);
let mContext;
export default class QuestionScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
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
            <Image source={require('../../imgs/ic_back.png')} style={{width: 24, height: 24, marginLeft: 16}}/>
        </TouchableOpacity>
    });

    constructor(props) {
        super(props);
        mContext = this;
        this.state = {
            title: 'aaa',
            header: `<head><script type=\'text/javascript\' async src=\'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-MML-AM_CHTML\'></script></head>`,
            htmlContent: ``,
            answerA: ``,
            answerB: ``,
            answerC: ``,
            answerD: ``

        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <WebView source={{html: this.state.header + this.state.htmlContent}} style={{flex: 1}}/>
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
                const content = getMath(response.data.data[0].question, response.data.data[0].image,
                    response.data.data[0].answerA, response.data.data[0].answerB, response.data.data[0].answerC, response.data.data[0].answerD);
                // const content = getHtml();
                mContext.setState({
                    htmlContent: content

                })

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
