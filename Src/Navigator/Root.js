import React,{ Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomePage,PlaceOrderPage ,CartPage} from "../screens/index"
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
                    // options={navigationOptions}
                    options={({ route,navigation }) => ({
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
                        }
                    })
                    }
                />
                <Stack.Screen name="Oder Detail" component={PlaceOrderPage} />
                <Stack.Screen name="Cart List" component={CartPage} />
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