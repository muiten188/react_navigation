import React, { Component } from 'react';
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
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

import RootRouterContainer from './root_router_container';
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <RootRouterContainer />
            </Provider>
        );
    }
}