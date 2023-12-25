import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"
import Cart from '../screens/Cart';
import ProductInfo from '../screens/ProductInfo';
import AddAddress from '../screens/AddAddress';
import Address from '../screens/Address';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: "Home",
                    tabBarLabelStyle: {
                        color: '#008E97',
                    },
                    tabBarIcon: ({ focused }) =>
                        focused
                            ? <Entypo name="home" size={24} color="#008E97" />
                            : <AntDesign name="home" size={24} color="black" />
                }}
            />
            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarLabel: "Profile",
                    tabBarLabelStyle: {
                        color: '#008E97',
                    },
                    tabBarIcon: ({ focused }) =>
                        focused
                            ? <Ionicons name="person" size={24} color="#008E97" />
                            : <Ionicons name="person-outline" size={24} color="black" />
                }}
            />
            <Tab.Screen
                name='Cart'
                component={Cart}
                options={{
                    headerShown: false,
                    tabBarLabel: "Cart",
                    tabBarLabelStyle: {
                        color: '#008E97',
                    },
                    tabBarIcon: ({ focused }) =>
                        focused
                            ? <AntDesign name="shoppingcart" size={24} color="#008E97" />
                            : <AntDesign name="shoppingcart" size={24} color="black" />
                }}
            />
        </Tab.Navigator>
    )
}

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name='Login'
                    component={Login}
                />
                <Stack.Screen
                    name='Register'
                    component={Register}
                />
                <Stack.Screen
                    name='Main'
                    component={BottomTabs}
                />
                <Stack.Screen
                    name='Info'
                    component={ProductInfo}
                />
                <Stack.Screen
                    name='Address'
                    component={AddAddress}
                />
                <Stack.Screen
                    name='Add'
                    component={Address}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator