import React,{ Component } from "react";
import { View,Text,Platform,Dimensions,Image,TouchableOpacity } from "react-native"
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
const storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage, // for web: window.localStorage
    defaultExpires: null,
    enableCache: true,
    sync: {}
});
export default class PlaceOrderPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <View
                style={{ flex: 1 }}>
                <Text>{"Place Order Page "}</Text>
            </View>
        );
    }
    componentDidMount() {
        storage.load({
            key: 'loginState',
            autoSync: true,
            syncInBackground: true
        }).then((val) => { console.log("val ",val); }).catch(() => { })
    }

}