import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    Platform,
    AppRegistry,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    RefreshControl,
    Text,
    View,
    Button
} from 'react-native';
import Prizes from "./prizes";
import DatePicker from 'react-native-datepicker'
import * as homeAction from '../../actions/home_action';
class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        let nowDate = new Date;
        month = '' + (nowDate.getMonth() + 1),
            day = '' + nowDate.getDate(),
            year = nowDate.getFullYear();
        let sDate = [year, month, day].join('-');
        this.state = {
            datePick: sDate
        }
    }
    static navigationOptions = {
        title: 'Home',
    };
    getLuckyDrawer(date) {
        this.props.homeAction.getLuckyDrawer(date);
    }
    componentDidMount() {
        this.getLuckyDrawer(this.formatDate(this.datePicker.getDate))
    }
    formatDate(odate) {
        var oDate = new Date(odate);
        month = '' + (oDate.getMonth() + 1),
            day = '' + oDate.getDate(),
            year = oDate.getFullYear();
        return [day, month, year].join('-');
    }
    render() {
        let { prizesJson, isLoading } = this.props.homeReducer;
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={isLoading ? true : false}
                        onRefresh={() => this.getLuckyDrawer(this.datePicker.getDate())}
                        tintColor="#ff0000"
                        title="Loading..."
                        titleColor="#00ff00"
                        colors={['#ff0000', '#00ff00', '#0000ff']}
                        progressBackgroundColor="#ffff00"
                    />}>
                <View style={{ width: 400 }}>
                    <Text>Chon Ngay:</Text>
                    <DatePicker
                        style={{ width: 200, borderColor: "red" }}
                        mode="date"
                        date={this.state.datePick}
                        ref={datePicker => this.datePicker = datePicker}
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2005-01-01"
                        maxDate="2030-01-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date, oDate) => {
                            month = '' + (oDate.getMonth() + 1),
                            day = '' + oDate.getDate(),
                            year = oDate.getFullYear();
                            let chooseDate = [year, month, day].join('-');
                            this.setState({
                                datePick: chooseDate
                            });
                            this.getLuckyDrawer(this.formatDate(oDate))
                        }}
                    />
                </View>
                <View style={{ width: 400, height: 600, marginTop: 10, marginLeft: 3, borderColor: '#ccc', borderWidth: 1 }}>
                    <Text style={styles.bigCell}>Xổ Số Truyền Thống</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                            <Text style={styles.normalCell}> Đặc biệt </Text>
                            <Text style={styles.normalCell}> Giải nhất </Text>
                            <Text style={styles.normalCell}> Giải nhì </Text>
                            <Text style={styles.bigCell}> Giải ba </Text>
                            <Text style={styles.normalCell}> Giải tư </Text>
                            <Text style={styles.bigCell}> Giải năm </Text>
                            <Text style={styles.normalCell}> Giải sáu </Text>
                            <Text style={styles.normalCell}> Giải bảy </Text>
                        </View>
                        <View style={{ flex: 8 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Prizes datas={prizesJson.special} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Prizes datas={prizesJson.first} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Prizes datas={prizesJson.second} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Prizes isColumn={true} datas={prizesJson.third} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Prizes datas={prizesJson.fourth} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Prizes isColumn={true} datas={prizesJson.fifth} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Prizes datas={prizesJson.sixth} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Prizes datas={prizesJson.seventh} />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    normalCell: {
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderWidth: 1,
        height: 40,
        textAlign: 'center'
    },
    bigCell: {
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderWidth: 1,
        height: 80,
        textAlign: 'center',
        lineHeight: 47
    },
});
function mapStateToProps(state, props) {
    return {
        homeReducer: state.homeReducer
    }
};
function mapToDispatch(dispatch) {
    return {
        homeAction: bindActionCreators(homeAction, dispatch)
    }
}

export default connect(mapStateToProps, mapToDispatch)(HomeScreen);