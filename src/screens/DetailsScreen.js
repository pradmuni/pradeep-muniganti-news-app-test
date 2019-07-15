import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
} from 'react-native';
import { Provider, connect } from 'react-redux';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

class DetailsScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            article:{
                author:"",
                description: "",
                content: "",
                publishedAt: "",
                urlToImage: "",
                title: ""
            }
        }
    }

    componentDidMount(){
        let data = this.props.navigation.getParam("data");
        this.setState({ article: data });
    }

    render(){
        return(
            <View style={styles.appContainer}>
                <View style={styles.header}>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>
                        <View style={{  marginTop: 38, marginLeft:20}}>
                            <Image source={require('../svg/left-arrow.png')} style={{ height: 20, width: 30 }} />
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={{ marginTop: 30, marginLeft: 30}}>
                        <Text numberOfLines ={1} style={{ fontWeight: 'bold', fontSize: 25, paddingRight: 30}}>{this.state.article.title}</Text>
                    </View>
                </View>
                <View style={styles.line}></View>
                    <ScrollView 
                        style={{paddingVertical: 20, paddingHorizontal: 30}} 
                        contentContainerStyle={{
                            // height: 1000
                            flexGrow: 1,
                            // justifyContent: 'space-between'
                        }}
                    >
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 30 }}>{this.state.article.title}</Text>
                        </View>

                        <View style={{flex: 1, height: 20, width: "100%", flexDirection: 'row', marginTop: 10, alignItems:"center"}}>
                            <View>
                                <Text style={{ paddingRight: 40 }}>{this.state.article.author}</Text>
                            </View>
                            <View>
                                <Text style={{opacity: 0.6}}>{new Date(this.state.article.publishedAt).toLocaleDateString()}</Text>
                            </View>
                        </View>
                        <View style={{marginTop: 30}}>
                            <Image source={{ uri: this.state.article.urlToImage }}
                                style={{ width: "100%", height: 200,  }} />
                        </View>
                        <View style={{marginTop: 30}}>
                            <Text>
                                {this.state.article.content}
                            </Text>
                        </View>
                    </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        // marginLeft: 20
    },
    header: {
        // flex: 0.2,
        height: "15%",
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 0,
        justifyContent: 'space-between'
    },
    headLine: {
        marginTop: 20,
    },
    line: {
        height: 1.5,
        width: "93%",
        backgroundColor: 'grey',
        // marginTop: 10,
        opacity: 0.8,
        marginLeft: 15
    },
    article: {
        marginTop: 30,
        height: 100,
        width: "98%",
        // backgroundColor: 'grey',
        flexDirection: 'row'
    },
    image: {
        backgroundColor: "green",
        marginRight: 10,
        flex: 1,
        justifyContent: 'center'
    }
})


const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(DetailsScreen);
