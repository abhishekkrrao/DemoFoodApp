import React,{ Component } from "react";
import { View,Text,Platform,Dimensions,Image,TouchableOpacity,FlatList } from "react-native"
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import assets from "../../Assets/index"
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
        this.state = { list: [] }
    }

    render() {
        return (
            <View
                style={{ flex: 1 }}>

                <View
                    style={{ width: "100%",height: 200 }}>
                    <Image
                        style={{ width: "100%",height: "100%" }}
                        source={assets.appimg.food3}></Image>
                </View>

                <View
                    style={{ flex: 1,marginTop: -20,backgroundColor: "#fff",borderTopEndRadius: 15,borderTopLeftRadius: 15 }}>


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


                {/* Add to cart button */}

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
                            }}>{"Add to Cart"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    componentDidMount() {
        storage.load({
            key: 'loginState',
            autoSync: true,
            syncInBackground: true
        }).then((val) => {
            console.log("val ",val);

            if (val) {
                this.setState({ list: [] },() => { })
                let data = [];
                data.push(val);
                this.setState({ list: data },() => { })
            } else {
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
                },() => {

                    console.log(this.state)
                });
            }
        }).catch(() => { });
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
        },() => { 

            console.log(this.state)
        }); 
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
                        style={{ fontSize: 15,color: "#4A4A4A",fontWeight: "700",flex: 1 }}>{"" + item.itemName}</Text>
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

    addItemToCart(obj) {
        storage.save({
            key: 'loginState',
            data: obj,
            expires: null
        });
    }

}