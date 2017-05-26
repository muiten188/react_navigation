import React from 'react';
import {
    Platform,
    AppRegistry,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Button
} from 'react-native';
export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);   
    }
     static navigationOptions = {
        title: 'Home',
    };
    render() {
        return (
            <View>
                <Text>hhhh</Text>
            </View>
        );
    }
}