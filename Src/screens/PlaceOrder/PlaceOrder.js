import React,{ Component } from "react";
import { View,Text,Platform,Dimensions,Image,TouchableOpacity,FlatList } from "react-native"
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import assets from "../../Assets/index"
import styles from "./styles";
const storage = new Storage({
    size: 5000,
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
                            }}>{"Place Order"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    componentDidMount() {
        
        // console.log("",this.props.route.params.index)

        storage.load({
            key: "cartlist",
            autoSync: true,
            syncInBackground: true
        }).then((val) => {
            console.log("val ",val);
            if (val) {
                this.setState({ list: [] },() => { })
                this.setState({ list: val },() => { })
            }
        }).catch(() => { });
    }
    singleView(item,index) {
        return (
            <View
                style={styles.sView}>
                {/* Image */}
                <View
                    style={{ flex: .6 }}>
                    <Image
                        style={styles.mImage}
                        source={assets.appimg.food1}>
                    </Image>
                </View>
                {/* Text */}
                <View
                    style={styles.s2View}>
                    <Text
                        style={styles.sTxt1}>{"" + item.itemName}</Text>
                    <Text
                        style={styles.sTxt2}>{"₹550"}</Text>
                </View>
                {/* add and substract btns */}
                <View
                    style={styles.s3View}>
                    <View
                        style={styles.s31View}>
                        <View
                            style={styles.sAddView}>
                            <Text
                                style={styles.sAddTxt}>{"+"}</Text>
                        </View>
                        <View
                            style={styles.sAddView}>
                            <Text
                                style={styles.sAddTxt}>{"1"}</Text>
                        </View>
                        <View
                            style={styles.sAddView}>
                            <Text
                                style={styles.sAddTxt}>{"-"}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    addItemToCart(obj) {
        storage.save({ key: 'loginState',  data: obj,  expires: null });
    }

}