import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';

const Article = (props) => (
    <View style={styles.article}>
        <View style={{ height: "50%", width: '70%', marginTop: 10 }}>
            <View>
                <Text numberOfLines={2} style={{ fontSize: 20, fontWeight: 'bold' }}>{props.title}</Text>
            </View>
            <View style={{ marginTop: 10, opactiy: 0.2 }}>
                <Text style={{}}>{props.author}</Text>
            </View>
        </View>

        <View style={styles.image}>
            <Image source={{ uri: props.imageUrl }}
                style={{ width: "100%", height: "90%" }} />
        </View>
    </View>
)


const styles = StyleSheet.create({
    article: {
        marginTop: 30,
        height: 100,
        width: "98%",
        flexDirection: 'row'
    },
    image: {
        marginRight: 10,
        flex: 1,
        justifyContent: 'center'
    }
})

export default Article;