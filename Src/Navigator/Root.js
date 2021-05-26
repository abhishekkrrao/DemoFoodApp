import React,{ Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomePage,PlaceOrderPage,CartPage } from "../screens/index"
import { Image,Button,TouchableOpacity } from "react-native"
import assets from "../Assets/index"
const Stack = createStackNavigator();
const rightButton = (route,navigation) => {
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
}

const leftLogo = () => {
    return (
        <TouchableOpacity
            style={{ width: 35,height: 35,marginLeft: 16,marginBottom: 20 }}>
            <Image
                style={{ width: 45,height: 45,borderRadius: 45 }}
                source={assets.appimg.food5}
            />
        </TouchableOpacity>
    );
}
const leftBackButton = (navigation) => {
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
                            return rightButton(route,navigation);
                        },
                        headerLeft: () => {
                            return leftLogo();
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
                            return leftBackButton(navigation);
                        },
                        headerRight: () => {
                            return rightButton(route,navigation);
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
                            return leftBackButton(navigation);
                        }
                    })
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Root;