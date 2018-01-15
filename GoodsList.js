/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight,
    Alert,
} from 'react-native';

const height = 70;


export default class GoodsList extends Component<{}> {
    constructor(props) {
        super(props);
        //定义一个ListView专属数据集合，初始化为空
        const ds = new ListView.DataSource({
            //当数据发生变化时调用rowHasChanged，弱返回true则渲染界面
            rowHasChanged: () => {
                return true;
            }
        });

        //定义数据源
        this.temData = this.props.dataSource;

        this.state = {
            //将temData装载入ds
            dataSource: ds.cloneWithRows(this.temData),
        };
    }

    //该函数用于统计总金额
    getTotal() {
        let total = 0;
        //遍历temData各行
        for (let i = 0; i < this.temData.length; i++) {
            //数量x金额
            total += this.temData[i]['num'] * this.temData[i]['price'];
        }
        //Alert.alert(total.toString())
        return total;
    }
    
    //改变单行数量的函数，type为+或-，rowID为当前行在temData的索引
    changeNum(type, rowID, sectionID) {
        if (type === '-') {
            // let temArr = this.temData;
            this.temData[rowID]['num'] = --this.temData[rowID]['num'] < 0 ? 0 : this.temData[rowID]['num'];
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.temData)
            });
            //调用App.js传来的回调函数changeTotal，changeTotal需要返回一个总金额
            this.props.callback(this.props.classifyName,this.getTotal());
        } else if (type === '+') {
            this.temData[rowID]['num'] = ++this.temData[rowID]['num'] < 0 ? 0 : this.temData[rowID]['num'];
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.temData)
            });
            this.props.callback(this.props.classifyName,this.getTotal());
        } else {
            return;
        }
    }

    //返回单行数据模版,参数由上一级函数传入，上一级为render
    renderRow(rowData, sectionID, rowID) {
        return (
            <View style={{flex: 1}}>
                <View style={styles.row}>
                    <View style={styles.info}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{
                                position: 'absolute',
                                marginLeft: 12,
                                marginTop: 10,
                                height:20,
                                backgroundColor: '#fff',
                                width:100,
                                // justifyContent: 'center',
                                // alignItems: 'center',
                            }}>
                                <Text style={{fontSize:18,color:'#000'}}>
                                    {rowData.name}
                                </Text>
                            </View>
                            <View style={{
                                position: 'absolute',
                                flexDirection: 'column',
                                backgroundColor: '#fff',
                                marginLeft:240,
                                marginTop:30,
                                height:35,
                                width:88,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text style={{fontSize:14}}>
                                    from
                                </Text>
                                <Text style={{fontSize:14,color:'#000'}}>
                                    ￡{rowData.price}
                                </Text>
                        </View>
                        <View style={{
                            position: 'absolute',
                            flexDirection: 'row',
                            marginLeft: 320,
                            marginTop: height - 40,
                            width:50,
                            alignItems: 'center',
                            justifyContent:'center'
                        }}>
                            <TouchableHighlight
                                underlayColor='white'
                                onPress={() => {
                                this.changeNum('-', rowID, sectionID)
                            }}>
                                <Text style={{fontSize:30,color:'#ff7d01'}}>
                                    ⊙
                                </Text>
                            </TouchableHighlight>

                            <Text style={{fontSize:20,color:'#000'}}>
                                {rowData.num}
                                </Text>

                            <TouchableHighlight
                                underlayColor='white'
                                onPress={() => {
                                this.changeNum('+', rowID, sectionID)
                            }}>
                                <Text style={{fontSize:30,color:'#ff7d01'}}>
                                    ⊕
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    </View>
                </View>
                <View style={{height: 1, backgroundColor: '#cccccc'}}/>
            </View>
        );
    }

    render() {
        return (
            //renderRow调用返回单行数据模版，会自动传参到rowData
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
            />
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: height,
        backgroundColor: '#fff'
    },
    pic: {
        flex: 2,
        // backgroundColor: '#5db6ff',
        justifyContent: 'center',
        alignItems: 'center',
        height: height,
    },
    info: {
        flex: 8,
        flexDirection: 'column',
        backgroundColor: '#fff',
        // justifyContent: 'center',
        // alignItems: 'center',
        height: height,
    },
    thumbnail: {
        width: 70,
        height: 70,
    },
});
