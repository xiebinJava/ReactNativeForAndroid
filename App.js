/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import { View, Text, Button , AppRegistry} from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14

import HomeScreen from './app/screen/HomeScreen'
import DetailsScreen from './app/screen/DetailsScreen'




const RootNavigator = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    Details: {
        screen: DetailsScreen,
        navigationOptions: {
            headerTitle: 'Details',
        },
    },
},{
        initialRouteName: 'Home' //默认进入的Screen
    }
);

export default RootNavigator;

