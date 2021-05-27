import React,{ Component } from 'react';
import { View,Text,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import assets from "../../Assets/index"
import styles from './styles';

class Welcome extends Component {
    constructor(props) { super(props); }
    render() {
        return (
            <View
                style={styles.container}>
                <View
                    style={styles.view1}>

                    <Image
                        style={styles.img}
                        source={assets.appimg.food2}></Image>

                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate("Home"); }}
                        style={styles.btn1}>
                        <Text style={styles.txt}>{"Create an Order"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate("Oder Detail"); }}
                        style={styles.btn2}>
                        <Text style={styles.txt}>{"Manage an Order"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate("PastOrder"); }}
                        style={styles.btn2}>
                        <Text style={styles.txt}>{"Order History"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Welcome;