/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import { View, Text, Button , AppRegistry} from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import DetailsScreen from './app/screen/DetailsScreen'
class HomeScreen extends Component {
    // static navigationOptions = {
    //     title: 'xiebin',
    // }
    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Details', {name: 'Lucy'})}
                title="Go to Lucy's profile"
            />
        );
    }
}
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
}
);
export default RootNavigator;
