import React,{ Component } from 'react';
import {
    View,TouchableOpacity,Dimensions,Alert,Image,Text,
    StyleSheet,FlatList
} from "react-native"
import assets from "../../Assets/index"
class CartPage extends Component {
    componentDidMount() {
        let list = [
            { img: assets.appimg.food1,itemName: "Theka Khaane ka",time: "30 min",distance: "3 km",rating: "4.2",itemDesc: "Kerala, Seafood, South Indian",available: true },
            { img: assets.appimg.food2,itemName: "Sardar Ji Ka Sahi Special Chicken Corner",time: "50 min",distance: "5.5 km",rating: "4.2",itemDesc: "North Indian",available: true }
        ];
        this.setState({
            list: list
        },() => { });
    }
    constructor(props) {
        super(props)
        this.state = { list: [] };
    }
    render() {
        return (
            <View
                style={{ flex: 1,backgroundColor: "#fff" }}>


                <View
                    style={{
                        width: "97%",height: 100,padding: 10,flexDirection: "column",
                        shadowColor: "#000",shadowOffset: {
                            width: 0,height: 2,
                        },shadowOpacity: 0.25,shadowRadius: 3.84,
                        elevation: 5,backgroundColor: "#fff",margin: 5,borderRadius: 5
                    }}>

                    <Text
                        style={{ fontSize: 18,color: "#5A5A5A",fontWeight: "700" }}>{"Sardar Ji Ka Sahi Special Chicken Corner"}</Text>
                    <Text
                        style={{ fontSize: 13,color: "#818181",paddingTop: 10 }}>{"Lunch (02:00pm - 03:00pm)"}</Text>

                    <Text
                        style={{ fontSize: 12,color: "#818181",paddingTop: 10 }}>{"Takeaway From: 567, 1st Floor, Sector 29, Gurgaon"}</Text>

                </View>
                <FlatList
                    style={{ alignSelf: "center",width: "100%",backgroundColor: "#FAFAFA" }}
                    numColumns={1}
                    extraData={this.state}
                    data={this.state.list}
                    renderItem={({ item,index }) => {
                        return this.singleView(item,index)
                    }}
                    keyExtractor={({ index }) => index + '' + new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString()}
                />



                <View
                    style={{
                        position: "absolute",bottom: 0,left: 0,right: 0,height: 96,
                        shadowColor: "#000",shadowOffset: {
                            width: 0,height: 2,
                        },shadowOpacity: 0.25,shadowRadius: 3.84,
                        elevation: 5,backgroundColor: "#fff",borderRadius: 5

                    }}>
                    <TouchableOpacity
                        style={{ width: "90%",backgroundColor: "#F37021",height: 45,borderRadius: 15,justifyContent: "center",alignItems: "center",alignSelf: "center",marginTop: 16 }}>
                        <Text
                            style={{
                                color: "#fff",fontSize: 17,fontWeight: "700"
                            }}>{"Place Oder"}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }

    singleView(item,index) {
        return (
            <View
                style={{ height: 120,width: "98%",flexDirection: "row",padding: 5 }}>
                <View
                    style={{ flex: .6 }}>
                    <Image
                        style={{ width: "100%",height: 96,borderRadius: 15 }}
                        source={assets.appimg.food1}>

                    </Image>
                </View>

                <View
                    style={{ flex: 1.1,flexDirection: "column",padding: 5 }}>
                    <Text
                        style={{ fontSize: 15,color: "#4A4A4A",fontWeight: "700",flex: 1 }}>{"Chicken Awadhi Biryani (Serves 2)"}</Text>
                    <Text
                        style={{ color: "#F37021",fontSize: 15,fontWeight: "800",paddingTop: 10,flex: 1 }}>{"₹550"}</Text>
                </View>

                <View
                    style={{ flex: .3,justifyContent: "center" }}>
                    <View
                        style={{ width: 60,height: 26,flexDirection: "row",backgroundColor: "#F37021",borderRadius: 5 }}>
                        <View
                            style={{ flex: 1,alignItems: "center",justifyContent: "center" }}>
                            <Text
                                style={{ fontSize: 12,fontWeight: "700",color: "#fff" }}>{"+"}</Text>
                        </View>
                        <View
                            style={{ flex: 1,alignItems: "center",justifyContent: "center" }}>
                            <Text
                                style={{ fontSize: 12,fontWeight: "700",color: "#fff" }}>{"1"}</Text>
                        </View>
                        <View
                            style={{ flex: 1,alignItems: "center",justifyContent: "center" }}>
                            <Text
                                style={{ fontSize: 12,fontWeight: "700",color: "#fff" }}>{"-"}</Text>
                        </View>
                    </View>
                </View>


            </View>
        );
    }

}

export default CartPage;