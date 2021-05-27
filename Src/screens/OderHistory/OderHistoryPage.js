import React,{ Component } from 'react';
import { View,TouchableOpacity,Dimensions,Text,Image,FlatList } from 'react-native';
import assets from "../../Assets/index"
class OderHistoryPage extends Component {

    constructor(props){super(props);
    this.state = {list:[]}}

    componentDidMount(){
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
    }

    render() {
        return (
            <View
                style={{ flex: 1,backgroundColor:"#fff" }}>
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


    singleView(item,index) {
        return (
            <View
                style={{ height: 205,width: "97%",alignSelf:"center" }}>

                <View
                    style={{ width: "100%",height: 80,padding: 10 }}>

                    <View
                        style={{ flexDirection: "row",padding: 2 }}>
                        <Text
                            style={{ fontSize: 15,textAlign: "left",flex: 1,color: "#4A4A4A" }}>{"Aggrarwal Sweets & Restaurant"}</Text>

                        <View
                            style={{ flex: .3 }}>
                            <Text
                                style={{ fontSize: 13,textAlign: "right",color: "#76B043" }}>{"Delivered"}</Text>
                        </View>
                    </View>
                    <Text
                        style={{ fontSize: 11,color: "#5A5A5A",padding: 2 }}>{"Huda"}</Text>
                    <Text
                        style={{ fontSize: 13,color: "#5A5A5A",padding: 2 }}>{"$ 215"}</Text>
                </View>

                <View style={{
                    borderStyle: 'dotted',
                    borderWidth: 1,
                    borderRadius: 1,
                    width: "95%",alignSelf: "center",borderColor: "#5A5A5A"
                }}>
                </View>

                <View
                    style={{ width: "100%",padding: 10 }}>
                    <Text
                        style={{ fontSize: 11,color: "#707070" }}>{"Kadai Paneer x 1, Veg Biryani x 1,Rasmalai(1 pcs) x 1"}</Text>
                    <Text
                        style={{ fontSize: 11,color: "#707070",paddingTop: 10 }}>{"May 27,12:37 PM"}</Text>
                </View>
                <View
                    style={{ width: "100%",padding: 10,flexDirection: "row" }}>

                    <TouchableOpacity
                        style={{ flex: 1,justifyContent: "center",alignItems: "center",borderWidth: 1,borderColor: "#F37021",padding: 10,marginRight: 5,borderRadius: 5 }}>
                        <Text style={{ color: "#4A4A4A",fontWeight: "700",fontSize: 16 }}>{"REORDER"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ flex: 1,justifyContent: "center",alignItems: "center",borderWidth: 1,borderColor: "#4A4A4A",padding: 10,marginLeft: 5,borderRadius: 5 }}>
                        <Text style={{ color: "#4A4A4A",fontWeight: "700",fontSize: 16 }}>{"RATE DELIVERY"}</Text>
                    </TouchableOpacity>

                </View>

                <View
                    style={{ width: "96%",height: 1,backgroundColor: "#000",alignSelf: "center" }}></View>

            </View>
        )
    }
}

export default OderHistoryPage;