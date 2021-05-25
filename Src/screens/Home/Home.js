import React,{ Component } from "react";
import {
    View,Image,FlatList,Text,TouchableOpacity,Dimensions,
    StyleSheet,
    ToastAndroid,
    Alert
} from "react-native";
import assets from "../../Assets/index"
export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    render() {
        return (
            <View
                style={{ flex: 1,paddingTop: 10 }}>
                <View
                    style={{ width: "95%",height: 45,backgroundColor: "#fff",borderRadius: 9,alignSelf: "center",padding: 5,justifyContent: "center",paddingTop: 5 }}>
                    <Text
                        style={{ fontSize: 19,paddingLeft: 5 }}>
                        {"Menu List"}</Text>
                </View>

                <FlatList
                    style={{ alignSelf: "center",width: "100%",marginTop: 10 }}
                    numColumns={1}
                    extraData={this.state}
                    data={this.state.list}
                    renderItem={({ item,index }) => {
                        return this.singleView(item,index)
                    }}
                    keyExtractor={({ index }) => index + '' + new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString()}
                />

            </View>
        );
    }
    componentDidMount() {
        let list = [
            { img: assets.appimg.food1,itemName: "Theka Khaane ka",time: "30 min",distance: "3 km",rating: "4.2",itemDesc: "Kerala, Seafood, South Indian",available: true },
            { img: assets.appimg.food2,itemName: "Sardar Ji Ka Sahi Special Chicken Corner",time: "50 min",distance: "5.5 km",rating: "4.2",itemDesc: "North Indian",available: true },
            { img: assets.appimg.food3,itemName: "Great Indian Khichdi",time: "28 min",distance: "4 km",rating: "4.9",itemDesc: "Indian, Home Food, Healthy Food",available: false },
            { img: assets.appimg.food4,itemName: "Canteen Central",time: "36 min",distance: "8 km",rating: "2.2",itemDesc: "North Indian, Snacks, South Indian, Chaa...",available: true },
            { img: assets.appimg.food5,itemName: "Chinese Corner",time: "30 min",distance: "6 km",rating: "3.6",itemDesc: "Chinese, Pan-Asian, Thai, Fast Food",available: true },
            { img: assets.appimg.food6,itemName: "Adraq",time: "45 min",distance: "2 km",rating: "3.2",itemDesc: "North Indian, Mughlai, Beverages",available: false },
            { img: assets.appimg.food7,itemName: "Dana Choga",time: "25 min",distance: "6 km",rating: "4.7",itemDesc: "North Indian, Chinese, Mughlai",available: true }
        ];
        this.setState({
            list: list
        },() => { });

        this.props.navigation.setParams({ handleSave: this._saveDetails });
    }
    _saveDetails() {
        Alert("Testing")
    }
    singleView(item,index) {
        return (
            <TouchableOpacity
                onPress={() => {

                }}
                style={{
                    width: "95%",height: 120,shadowColor: "#0000004D",
                    shadowOffset: { width: 0,height: 3 },
                    shadowOpacity: 0.27,shadowRadius: 4.65,elevation: 6,backgroundColor: "#ffffff",margin: 5,borderRadius: 15,
                    alignSelf: "center",flex: 1,flexDirection: "row"
                }}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate("Oder Detail",{ item: item });
                    }}
                    style={{ flex: .7 }}>
                    <Image
                        style={{ width: "100%",height: "100%",borderTopLeftRadius: 15,borderBottomLeftRadius: 15 }}
                        source={item.img}>
                    </Image>
                </TouchableOpacity>

                <View
                    style={{ flex: 1,flexDirection: "column",padding: 10 }}>
                    <Text
                        numberOfLines={1}
                        style={{ fontSize: 16,color: "#4A4A4A" }}>{item.itemName}</Text>
                    <Text
                        style={{ fontSize: 12,color: "#888888",paddingTop: 10 }}>{item.itemDesc}</Text>
                    <View
                        style={{ flex: 1,flexDirection: "row" }}>
                        <View
                            style={{ flex: 1,flexDirection: "row",alignItems: "center",height: 30 }}>
                            <Image
                                style={{ width: 10,height: 10,marginTop: 2 }}
                                source={assets.icons.star}>
                            </Image>
                            <Text
                                style={{ color: "#5A5A5A",paddingLeft: 5 }}>{item.rating}</Text>
                        </View>
                        <View
                            style={{ flex: 1,flexDirection: "row",alignItems: "center",height: 30 }}>
                            <Image
                                style={{ width: 10,height: 10,marginTop: 2 }}
                                source={assets.icons.time}>
                            </Image>
                            <Text
                                style={{ color: "#5A5A5A",paddingLeft: 5 }}>{item.time}</Text>
                        </View>
                        <View
                            style={{ flex: 1,flexDirection: "row",alignItems: "center",height: 30 }}>
                            <Image
                                style={{ width: 10,height: 10,marginTop: 2 }}
                                source={assets.icons.location}>
                            </Image>
                            <Text
                                style={{ color: "#5A5A5A",paddingLeft: 5 }}>{item.distance}</Text>
                        </View>
                    </View>

                    <View
                        style={{ flex: 1,flexDirection: "row" }}>

                        <Text
                            style={{ fontSize: 12,flex: 1,color: item.available ? "#76B043" : "#F37021",paddingTop: 15 }}>{item.available ? "In stock" : "Out of stock"}</Text>

                        <Text
                            onPress={() => {

                            }}
                            style={{ fontSize: 12,color: "#FFCB27",paddingTop: 15,flex: 1 }}>{"Add To Cart"}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        );
    }
}