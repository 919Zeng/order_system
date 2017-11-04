/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert
} from 'react-native';
import GoodsList from './GoodsList';

//
export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            totalPrice: 0,
        };
        this.changeTotal = this.changeTotal.bind(this);
    }

    changeTotal(total){
        this.setState({totalPrice: total});
        return;
    }

    render() {
        return (
            <View style={{flex: 1, paddingTop: 22}}>
                <View style={{height: 80, backgroundColor: '#009999'}}></View>
                {/*在GoodsList的props增加一个callback属性，类型为函数*/}
                <GoodsList callback={this.changeTotal}/>
                <View style={{height: 50, backgroundColor: '#811440', flexDirection: 'row'}}>
                    <View style={styles.left_box}><Text>购物车</Text></View>
                    <View style={styles.right_box}><Text>合计{this.state.totalPrice}元</Text></View>
                </View>
                <View style={{height: 50, backgroundColor: '#009999'}}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    left_box: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    right_box: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
