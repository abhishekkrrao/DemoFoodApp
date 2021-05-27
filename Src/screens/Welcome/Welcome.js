import React,{ Component } from 'react';
import { View,Text,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import assets from "../../Assets/index"

class Welcome extends Component {
    constructor(props) { super(props); }
    render() {
        return (
            <View
                style={{ flex: 1,backgroundColor: "#fff" }}>
                <View
                    style={{ flex: 1,flexDirection: "column",justifyContent: "center" }}>

                    <Image
                        style={{ width: 150,height: 150,alignSelf: "center",margin: 5 }}
                        source={assets.appimg.food2}></Image>

                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate("Home"); }}
                        style={{ width: "90%",height: 45,borderRadius: 10,backgroundColor: "#F37021",alignSelf: "center",justifyContent: "center",alignItems: "center" }}>
                        <Text style={{ color: "#fff",fontSize: 16,fontWeight: "500" }}>{"Create an Order"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate("Oder Detail"); }}
                        style={{ width: "90%",height: 45,borderRadius: 10,backgroundColor: "#F37021",alignSelf: "center",marginTop: 10,justifyContent: "center",alignItems: "center" }}>
                        <Text style={{ color: "#fff",fontSize: 16,fontWeight: "500" }}>{"Manage an Order"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate("PastOrder"); }}
                        style={{ width: "90%",height: 45,borderRadius: 10,backgroundColor: "#F37021",alignSelf: "center",marginTop: 10,justifyContent: "center",alignItems: "center" }}>
                        <Text style={{ color: "#fff",fontSize: 16,fontWeight: "500" }}>{"Order History"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Welcome;