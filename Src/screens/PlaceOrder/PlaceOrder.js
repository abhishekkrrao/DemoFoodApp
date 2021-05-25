import React,{ Component } from "react";
import { View,Text,Platform,Dimensions,Image,TouchableOpacity } from "react-native"
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

        // console.log(this.props.route.params.item)
    }

}