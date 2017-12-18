

import React, {Component} from 'react';
import {
    Text,
    ListView,
    TouchableHighlight,
    View,
} from 'react-native';

import GoodList from './GoodsList';
export default class Classify extends Component<{}> {
    constructor(props) {
        super(props);
        const clas = new ListView.DataSource({
            //当数据发生变化时调用rowHasChanged，弱返回true则渲染界面
            rowHasChanged: () => {
                return true;
            }
        });

        this.temData = [
            {name:'1',status:false,GoodList:[
                {name: 'Latte', price: 3, id: 1, pic: 'http://pic46.nipic.com/20140819/8275735_105326985000_2.jpg', num: 0},
                {name: 'Chocolate', price: 2, id: 2, pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509895885459&di=449fdf1cbf807e9bcd4a2b1e11f6becb&imgtype=0&src=http%3A%2F%2Fwww.twwiki.com%2Fuploads%2Fwiki%2Ff3%2F00%2F720579_1.jpg', num: 0},
                {name: 'Cappuccino', price: 4, id: 3, pic: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike272%2C5%2C5%2C272%2C90/sign=1031a7f9aec27d1eb12b33967abcc60b/d043ad4bd11373f0460c7ac2ae0f4bfbfbed04bf.jpg', num: 0},
                {name: 'Moka', price: 4, id: 4, pic: 'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=6d358773a2d3fd1f2204aa6851274e7a/9f2f070828381f30069a99f4a3014c086f06f0e8.jpg', num: 0},
                {name: 'Milk', price: 4, id: 5, pic: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=7fa996d6d5ca7bcb6976cf7ddf600006/b2de9c82d158ccbf61261a2f1bd8bc3eb1354108.jpg', num: 0},
                {name: 'Macchiato', price: 4, id: 2, pic: 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=a15003510ef3d7ca18fb37249376d56c/cdbf6c81800a19d8854cc06a31fa828ba61e4615.jpg', num: 0},
                {name: 'Tea Latte', price: 5, id: 6, pic: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=f220b05591504fc2b652b85784b48c74/d01373f082025aaf79014296f1edab64034f1abf.jpg', num: 0},
                {name: 'Green Tea', price: 4, id: 7, pic: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=f0fd99c1dcb44aed4d43b6b6d275ec64/10dfa9ec8a136327143558b8978fa0ec09fac765.jpg', num: 0},
                {name: 'Black Tea', price: 4, id: 8, pic: 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=0db89a1358df8db1a8237436684ab631/8b82b9014a90f603225507cc3f12b31bb151ed50.jpg', num: 0},
                {name: 'Esprssso', price: 3, id: 9, pic: 'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike72%2C5%2C5%2C72%2C24/sign=2ed34d8e3cc79f3d9becec62dbc8a674/10dfa9ec8a136327853eca42968fa0ec09fac7f4.jpg', num: 0},
                {name: 'Water', price: 1, id: 10, pic: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=3bbe84c93ac79f3d9becec62dbc8a674/7a899e510fb30f24b0242d35c995d143ad4b034e.jpg', num: 0},
            ]},
            {name:'2',status:false,GoodList:[
                {name: 'Latte', price: 3, id: 1, pic: 'http://pic46.nipic.com/20140819/8275735_105326985000_2.jpg', num: 0},
                {name: 'Chocolate', price: 2, id: 2, pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509895885459&di=449fdf1cbf807e9bcd4a2b1e11f6becb&imgtype=0&src=http%3A%2F%2Fwww.twwiki.com%2Fuploads%2Fwiki%2Ff3%2F00%2F720579_1.jpg', num: 0},
                {name: 'Cappuccino', price: 4, id: 3, pic: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike272%2C5%2C5%2C272%2C90/sign=1031a7f9aec27d1eb12b33967abcc60b/d043ad4bd11373f0460c7ac2ae0f4bfbfbed04bf.jpg', num: 0},
                {name: 'Moka', price: 4, id: 4, pic: 'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=6d358773a2d3fd1f2204aa6851274e7a/9f2f070828381f30069a99f4a3014c086f06f0e8.jpg', num: 0},
                {name: 'Milk', price: 4, id: 5, pic: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=7fa996d6d5ca7bcb6976cf7ddf600006/b2de9c82d158ccbf61261a2f1bd8bc3eb1354108.jpg', num: 0},
                {name: 'Macchiato', price: 4, id: 2, pic: 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=a15003510ef3d7ca18fb37249376d56c/cdbf6c81800a19d8854cc06a31fa828ba61e4615.jpg', num: 0},
                {name: 'Tea Latte', price: 5, id: 6, pic: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=f220b05591504fc2b652b85784b48c74/d01373f082025aaf79014296f1edab64034f1abf.jpg', num: 0},
                {name: 'Green Tea', price: 4, id: 7, pic: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=f0fd99c1dcb44aed4d43b6b6d275ec64/10dfa9ec8a136327143558b8978fa0ec09fac765.jpg', num: 0},
                {name: 'Black Tea', price: 4, id: 8, pic: 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=0db89a1358df8db1a8237436684ab631/8b82b9014a90f603225507cc3f12b31bb151ed50.jpg', num: 0},
                {name: 'Esprssso', price: 3, id: 9, pic: 'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike72%2C5%2C5%2C72%2C24/sign=2ed34d8e3cc79f3d9becec62dbc8a674/10dfa9ec8a136327853eca42968fa0ec09fac7f4.jpg', num: 0},
                {name: 'Water', price: 1, id: 10, pic: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=3bbe84c93ac79f3d9becec62dbc8a674/7a899e510fb30f24b0242d35c995d143ad4b034e.jpg', num: 0},
            ]},
            {name:'3',status:false,GoodList:[
                {name: 'Latte', price: 3, id: 1, pic: 'http://pic46.nipic.com/20140819/8275735_105326985000_2.jpg', num: 0},
                {name: 'Chocolate', price: 2, id: 2, pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509895885459&di=449fdf1cbf807e9bcd4a2b1e11f6becb&imgtype=0&src=http%3A%2F%2Fwww.twwiki.com%2Fuploads%2Fwiki%2Ff3%2F00%2F720579_1.jpg', num: 0},
                {name: 'Cappuccino', price: 4, id: 3, pic: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike272%2C5%2C5%2C272%2C90/sign=1031a7f9aec27d1eb12b33967abcc60b/d043ad4bd11373f0460c7ac2ae0f4bfbfbed04bf.jpg', num: 0},
                {name: 'Moka', price: 4, id: 4, pic: 'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=6d358773a2d3fd1f2204aa6851274e7a/9f2f070828381f30069a99f4a3014c086f06f0e8.jpg', num: 0},
                {name: 'Milk', price: 4, id: 5, pic: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=7fa996d6d5ca7bcb6976cf7ddf600006/b2de9c82d158ccbf61261a2f1bd8bc3eb1354108.jpg', num: 0},
                {name: 'Macchiato', price: 4, id: 2, pic: 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=a15003510ef3d7ca18fb37249376d56c/cdbf6c81800a19d8854cc06a31fa828ba61e4615.jpg', num: 0},
                {name: 'Tea Latte', price: 5, id: 6, pic: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=f220b05591504fc2b652b85784b48c74/d01373f082025aaf79014296f1edab64034f1abf.jpg', num: 0},
                {name: 'Green Tea', price: 4, id: 7, pic: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=f0fd99c1dcb44aed4d43b6b6d275ec64/10dfa9ec8a136327143558b8978fa0ec09fac765.jpg', num: 0},
                {name: 'Black Tea', price: 4, id: 8, pic: 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=0db89a1358df8db1a8237436684ab631/8b82b9014a90f603225507cc3f12b31bb151ed50.jpg', num: 0},
                {name: 'Esprssso', price: 3, id: 9, pic: 'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike72%2C5%2C5%2C72%2C24/sign=2ed34d8e3cc79f3d9becec62dbc8a674/10dfa9ec8a136327853eca42968fa0ec09fac7f4.jpg', num: 0},
                {name: 'Water', price: 1, id: 10, pic: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=3bbe84c93ac79f3d9becec62dbc8a674/7a899e510fb30f24b0242d35c995d143ad4b034e.jpg', num: 0},
            ]},
        ];

        this.state = {
            //将temData装载入ds
            dataSource: clas.cloneWithRows(this.temData),
        };

        this.changeClassifyStatus = this.changeClassifyStatus.bind(this);
    }

    changeClassifyStatus(rowID){
        this.temData[rowID]['status'] = !this.temData[rowID]['status'];
        this.setState({dataSource:this.state.dataSource.cloneWithRows(this.temData)});
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
            />
        );
    }

    renderRow(rowData, sectionID, rowID) {
        if(rowData.status){

            return (
                <View>
                    <TouchableHighlight underlayColor='white'
                                        onPress={() => {
                                            this.changeClassifyStatus(rowID);
                                        }}>
                        <View>
                    <Text>V {rowData.name}</Text>
                        </View>
                    </TouchableHighlight>
                    <GoodList callback={this.props.callback} dataSource={rowData.GoodList} classifyName={rowData.name}/>
                </View>
            );
        }else{
            return(
                <TouchableHighlight underlayColor='white'
                                    onPress={() => {
                                        this.changeClassifyStatus(rowID);
                                    }}>
                <View>
                    <Text>
                        > {rowData.name}
                    </Text>
                </View>
                </TouchableHighlight>
            );
        }
    }
}