import React,{ Component } from 'react';
import {
    View,TouchableOpacity,Dimensions,Alert,Image,Text,
    StyleSheet
} from "react-native"
class CartPage extends Component {
    render() {
        return (
            <View
                style={{ flex: 1,justifyContent: "center" }}>
                <Text>{"Cart Page"}</Text>

            </View>
        );
    }
}

export default CartPage;