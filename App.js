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
    TouchableHighlight,
    ScrollView,
    Alert
} from 'react-native';
// import GoodsList from './GoodsList';
import Classify from './Classify';
export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.priceArr = [];
        this.state = {
            status:0,
            totalPrice: 0,
        };
        this.changeTotal = this.changeTotal.bind(this);
        this.check = this.check.bind(this);
        this._onPressButton =this._onPressButton.bind(this);
    }

    shouldComponentUpdate(thisProps, nextState){
        if(nextState.status != this.state.status){
            return true;
        }

        if(nextState.totalPrice != this.state.totalPrice){
            return true;
        }
        return false;
    }

    changeTotal(key,total){
        //Alert.alert(total.toString())
        this.priceArr[key]=total;
        let finalTotal = 0;
        for(i=0;i<this.priceArr.length;i++){
            if(this.priceArr[i]!=null){
                finalTotal += this.priceArr[i];
            }
        }
        this.setState({totalPrice: finalTotal});
    }
    _onPressButton(){
        this.setState({status: !this.state.status});
    }

    check() {
        Alert.alert(
            'tips',
            'Total price: ￡'+ this.state.totalPrice.toString(),
            [
                {text: 'Pay', onPress () { console.log('OK Pressed!')}},
                {text: 'Cancel', onPress () { console.log('OK Pressed!')}}
            ]
        );
    }

    render() {
            return (
                <View style={{flex: 1}}>
                    <ScrollView>
                        <View style={{height: 80, backgroundColor: '#009999'}}>
                            <Text style={{color: '#fff', fontSize: 35, marginLeft: 20, marginTop: 15}}>Starbucks</Text>
                        </View>
                        {/*在GoodsList的props增加一个callback属性，类型为函数*/}
                        <Classify callback={this.changeTotal} />
                    </ScrollView>
                    <View style={{height: 50, backgroundColor: '#fff260', flexDirection: 'row'}}>
                        <View style={styles.left_box}>
                            <Text style={{fontSize: 20, color: '#000'}}>
                            Shopping Cart
                        </Text>
                        </View>
                        <View style={styles.right_box}>
                            <Text style={{color: '#000'}}>
                                Total:
                            </Text>
                            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
                                ￡{this.state.totalPrice}
                                </Text>
                        </View>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#ff1633',
                            width: 90
                        }}>
                            <TouchableHighlight underlayColor='red'>
                                <Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 20}}
                                      onPress={this.check}>
                                    Checkout
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        height: 50,
                        backgroundColor: '#009999',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={styles.L_box}>
                            <TouchableHighlight onPress={this._onPressButton}>
                                <Text style={{color: '#fff', fontSize: 15}}>About us</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.M_box}>
                            <TouchableHighlight onPress={this._onPressButton}>
                                <Text style={{color: '#00ff05', fontSize: 18, fontWeight: 'bold'}}>Order</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.R_box}>
                            <TouchableHighlight onPress={this._onPressButton}>
                                <Text style={{color: '#fff', fontSize: 15}}>More</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
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
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    L_box:{
        marginLeft:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    M_box:{
        marginLeft:50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    R_box:{
        marginLeft:50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
