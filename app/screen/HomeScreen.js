import React, {Component} from 'react';
import {Text, Button, View} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    onPress={() =>    this.props.navigation.navigate('Details')}
                    title="Go to detailsssss"
                />
            </View>
        );
    }
}