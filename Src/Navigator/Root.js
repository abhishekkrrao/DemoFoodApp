import React,{ Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomePage,PlaceOrderPage,CartPage } from "../screens/index"
import { Image,Button,TouchableOpacity } from "react-native"
import assets from "../Assets/index"
const Stack = createStackNavigator();

function Root() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomePage}
                    options={({ route,navigation }) => ({
                        title: "",
                        headerRight: () => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate("Cart List")
                                    }}
                                    style={{ width: 35,height: 35,marginEnd: 16,marginBottom: 5 }}>
                                    <Image
                                        style={{ width: 35,height: 35 }}
                                        source={assets.icons.cart}
                                    />
                                </TouchableOpacity>
                            );
                        },
                        headerLeft: () => {
                            return (
                                <TouchableOpacity
                                    style={{ width: 35,height: 35,marginLeft: 16,marginBottom: 20 }}>
                                    <Image
                                        style={{ width: 45,height: 45 ,borderRadius:45}}
                                        source={assets.appimg.food5}
                                    />
                                </TouchableOpacity>
                            );
                        }
                    })
                    }
                />
                <Stack.Screen
                    name="Oder Detail"
                    component={PlaceOrderPage}
                    options={({ route,navigation }) => ({
                        title: "",
                        headerLeft: () => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.goBack()
                                    }}
                                    style={{ width: 75,height: 35 }}>
                                    <Image
                                        style={{ width: 35,height: 35,marginLeft: 16 }}
                                        source={assets.icons.back}
                                    />
                                </TouchableOpacity>
                            );
                        }
                    })
                    }
                />
                <Stack.Screen
                    name="Cart List"
                    component={CartPage}
                    options={({ route,navigation }) => ({
                        title: "",
                        headerLeft: () => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.goBack()
                                    }}
                                    style={{ width: 75,height: 35,marginLeft: 16 }}>
                                    <Image
                                        style={{ width: 35,height: 35 }}
                                        source={assets.icons.back}
                                    />
                                </TouchableOpacity>
                            );
                        }
                    })
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
let navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
        title: '',
        headerRight: () => (
            <TouchableOpacity
                onPress={() => {
                    params.handleSave()
                }}
                style={{ width: 35,height: 35,marginEnd: 16,marginBottom: 5 }}>
                <Image
                    style={{ width: 35,height: 35 }}
                    source={assets.icons.cart}
                />
            </TouchableOpacity>
        ),
    };
};

function LogoCart() {
    return (
        <Image
            style={{ width: 50,height: 50 }}
            source={assets.icons.cart}
        />
    );
}
export default Root;