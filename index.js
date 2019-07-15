/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
// import App from './App';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {name as appName} from './app.json';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';


const store = configureStore();


const RootStack = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
    
},
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        },
        cardStyle: {
            backgroundColor: 'white'
        },
        transitionConfig: () => ({
            transitionSpec: {
                duration: 500,
                //   easing: Easing.out(Easing.poly(4)),
                // timing: Animated.timing,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;

                const height = layout.initHeight;
                const translateX = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [height, 0, 0],
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                });

                return { opacity, transform: [{ translateX }] };
            },
        }),
    }
)

const App = createAppContainer(RootStack);

export default class Index extends Component {

    componentDidCatch(error, errorInfo) {
        alert(`Sorry! Something has gone wrong and we are fixing it \n Error: ${error}`);
    }

    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}


AppRegistry.registerComponent(appName, () => Index);
