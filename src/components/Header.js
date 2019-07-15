import React, { Component } from "react";
import { Platform, Dimensions, StyleSheet, Text, View, ScrollView, Image, TouchableWithoutFeedback, TouchableOpacity,TouchableHighlight, Alert } from "react-native";
import propTypes from "prop-types";
import { withNavigation } from 'react-navigation';
import family from '../font';
import { fetchProfile } from '../actions/userActions';
import HamburgerSVG from '../components/svgs/HamburgerSVG';
import BackCircleSVG from '../components/svgs/BackCircleSVG';
import LinearGradient from 'react-native-linear-gradient';
import ArrowsSVG from './svgs/ArrowsSVG';
import Moment from 'moment';

class Header extends Component {
    constructor(props) {
        super(props);
    }


    handleBackPress = () => {
        debugger
        if (this.props.showHome === true) {
            this.props.handleHomePress();
            // this.props.navigation.navigate('SplashScreen');
        }
        else {
            this.props.navigation.goBack();

        }
    }


    handleMenuPress = () => {
        this.props.navigation.navigate('Profile');
    }

    render() {
        // let endDate = this.props.ride.endDate.split(' ')[0];
        // let startDate = this.props.ride.startDate.split(' ')[0];
        // let startTime = this.props.ride.startDate.split(' ')[1];
        // let endTime = this.props.ride.endDate.split(' ')[1];
        const { navigate } = this.props.navigation;
        return (
            <View style={{
                ...this.props.style,
                width: '100%',
                top: '5%',
                width: '100%', 
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 32,
                // paddingVertical: 15,
                position: 'absolute',
                zIndex: 100, 
                // backgroundColor: 'pink',

            }}>
                    <TouchableOpacity onPress={this.handleBackPress}>
                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <BackCircleSVG />
                    {!this.props.showFromTo &&
                            <Text style={{ color: this.props.color ? this.props.color : '#5E5E5E', fontSize: 20, letterSpacing: 0.25, fontFamily: family.black, opacity: 0.7, marginLeft: 10 }}>
                                Back
                            </Text>
                    }
                        </View>
                    </TouchableOpacity>
                    {this.props.showFromTo &&
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('DestinationsScreen')} style={{ marginHorizontal: '2%', marginBottom: 0,  alignItems: 'center', }}>
                        <View style={{flexDirection: 'row',}}>
                            <Text style={{ fontSize: 16, opacity: 0.6, fontFamily: family.bold }}>{this.props.ride.pickup.city}</Text>
                            {/* <Text style={{ fontSize: 18, opacity: 0.4, marginHorizontal: 5 }}>to</Text> */}
                            { this.props.ride.dest.city != '' && 
                            <ArrowsSVG round={this.props.ride.measureLookupId == 100010001 ? true : false} style={{ marginHorizontal: 5, opacity: 0.6, transform: [{ scale: 0.8 }],alignSelf:'center' }} />
                            }
                            <Text style={{ fontSize: 16, opacity: 0.6, fontFamily: family.bold }}>
                            {this.props.ride.dest.city}
                            </Text>
                        </View>
                        <View style={{flexDirection:'row'}}>                        
                            <Text style={{ fontSize: 15, opacity: 0.5, fontFamily: family.regular }}>{Moment(this.props.ride.startDate.split(' ')[0], "DD-MM-YYYY").format('DD MMM')} </Text>
                            {this.props.ride.measureLookupId == 100010001  && <Text style={{ fontSize: 15, opacity: 0.5, fontFamily: family.regular}}>- {Moment(this.props.ride.endDate.split(' ')[0], "DD-MM-YYYY").format('DD MMM')} | Start {Moment(this.props.ride.startDate.split(' ')[1], "HH:mm:ss").format('hh:mm A')}</Text>}
                        </View>
                    </TouchableOpacity>
                }
                    
                    <TouchableOpacity onPress={this.handleMenuPress}>
                        <HamburgerSVG color={this.props.color ? this.props.color : '#5E5E5E'} />
                    </TouchableOpacity>
                
            </View>
        );
    }
}

export default withNavigation(Header);