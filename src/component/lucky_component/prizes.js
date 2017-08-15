'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableNativeFeedback, Alert } from 'react-native';

export default class Prizes extends Component {

    renderCol(data, index) {
        return (
            <TouchableNativeFeedback
                key={index}
                onPress={() => (Alert.alert("Kết quả: ", data))}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={{ flex: 1, height: 40, borderColor: '#ccc', borderWidth: 1 }}>
                    <Text style={{ textAlign: "center", lineHeight: 25 }}>{data}</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
    renderCol2(data) {
        let dataPhase1 = data.slice(0, data.length / 2);
        let dataPhase2 = data.slice(data.length / 2, data.length);
        return (
            <View style={{ flex: 1, height: 80, flexDirection: "column" }}>
                <View style={{ flex: 1, height: 40, flexDirection: "row" }}>
                    {
                        dataPhase1.map(this.renderCol.bind(this))
                    }
                </View>
                <View style={{ flex: 1, height: 40, flexDirection: "row" }}>
                    {
                        dataPhase2.map(this.renderCol.bind(this))
                    }
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: "row" }}>
                {
                    this.props.isColumn ? this.renderCol2(this.props.datas) :
                        this.props.datas.map(this.renderCol.bind(this))
                }
            </View>
        );
    }

}

const styles = StyleSheet.create({
    normalCell: {
        borderStyle: 'solid',
        borderWidth: 1,
        height: 40,
        textAlign: 'center'
    }
});