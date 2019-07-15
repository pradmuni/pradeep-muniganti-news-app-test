import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { Provider, connect } from 'react-redux';
import { getArticles } from '../actions/appActions';
import Article from '../components/Article';



class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            articles:[]
        }
    }

    componentDidMount(){
        this.props.dispatch(getArticles());
    }

    render(){
        return(
            <View style={styles.appContainer}>
                <View style={styles.header}>
                    <View style={{bottom: 40, position: 'absolute'}}>
                        <Text style={{ color: 'white', fontSize: 20, marginLeft: 20 }}>Home</Text>
                    </View>
                </View>
                <View style={{marginLeft: 20,}}>
                    <View style={styles.headLine}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, }}>Your Daily Read</Text>
                    </View>
                    <View style={styles.line}></View>
                    <View style={{marginTop: 10}}>
                        <View style={{height: "90%"}}>
                            <FlatList
                                data={this.props.articles}
                                renderItem={({ item }) => <TouchableOpacity onPress={() => this.props.navigation.navigate("Details", {data: item})}>
                                    <Article
                                        title={item.title}
                                        author={item.author}
                                        imageUrl={item.urlToImage}
                                    />
                                </TouchableOpacity>}
                            />
                        </View>                        
                    </View>
                </View>
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
        backgroundColor: 'black',
        marginTop: 0, 
        // justifyContent: 'center'
    },
    headLine:{
        marginTop: 20,
    },
    line:{
        height: 1.5,
        width: "93%",
        backgroundColor: 'grey',
        marginTop: 10,
        opacity: 0.8
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
        articles: state.app.articles
    }
}

export default connect(mapStateToProps)(HomeScreen);
