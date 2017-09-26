import React from "react";
import {Image, TouchableOpacity, View, WebView, Text, StyleSheet} from "react-native";
import getMath from '../../assets/html';
import axios from 'axios';
import ViewPager from 'react-native-view-pager';

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
            title: '',
            header: `<head><script type=\'text/javascript\' async src=\'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-MML-AM_CHTML\'></script></head>`,
            pages: []
        };
    }

    render() {

        return (
            <View style={{flex: 1}}>

                <ViewPager ref='viewPager'
                           initialPage={0} style={{flex: 1}}>
                    {this.state.pages}
                </ViewPager>
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
                let mangStemp = [];
                let header = `<head><script type=\'text/javascript\' async src=\'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-MML-AM_CHTML\'></script></head>`;
                for (var i = 0; i < response.data.data.length; i++) {
                    const content = getMath(response.data.data[i].question, response.data.data[i].image,
                        response.data.data[i].answerA, response.data.data[i].answerB, response.data.data[i].answerC, response.data.data[i].answerD);
                    // mangStemp.push(
                    //     <View key={i} style={pageStyle} collapsable={false}>
                    //         <WebView source={{html: header + content}} style={{flex: 1}}/>
                    //     </View>
                    // )
                    mContext.setState({
                        pages: mContext.state.pages.push(
                            <View key={i} style={{flex: 1}} collapsable={false}>
                                <WebView source={{html: header + content}} style={{flex: 1}}/>
                            </View>)

                    })

                }
                // console.log("mangStemp: " + JSON.stringify(mangStemp.length));
                // mContext.setState({
                //     pages: mangStemp
                //
                // })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

const styles = StyleSheet.create({
    wrapper: {},
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
