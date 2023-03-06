import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabs from './BottomTabs';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import TermAndCondition from '../screens/TermAndCondition';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import Logo from '../components/Logo';
import { Badge } from 'react-native-paper';
const Drawer = createDrawerNavigator();
import { useStyles } from '../styles/responsiveStyle';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import HomeScreen from '../screens/HomeScreen';

export default function DrawerScreen({ navigation }) {
    const gs = useStyles();
    const cart = useSelector(state => state.cartData.cart);
    // const [test, setTest] = useState(true);

    return (
        <Drawer.Navigator initialRouteName="mainScreen"

            screenOptions={{
                headerStyle: {
                    height: 80,
                    backgroundColor: 'black',
                    borderBottomColor: 'black',
                },
                headerTintColor: '#CC933B',
                headerTitle: Logo,
                headerRight: () => (
                    <View style={gs.headerNotification}>
                        <TouchableOpacity onPress={() => navigation.navigate('SearchPage')} style={{ marginRight: 20, }}>
                            <Ionicons name='search' color='#CC933B' size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ marginRight: 20, }}>
                            <Ionicons name='cart-outline' color='#CC933B' size={25} />
                            {cart.length > 0 ?
                                <Badge size={15} style={{ position: 'absolute', marginTop: -7, backgroundColor: '#CC933B', }}>
                                    <Text style={{ color: '#000' }}>{cart.length}</Text></Badge>
                                : ""
                            }
                        </TouchableOpacity>
                    </View>
                ),

            }}
        >
            <Drawer.Screen name='mainScreen' component={BottomTabs} options={{ headerShown: true, headerShadowVisible: false }} />
            <Drawer.Screen name='login' component={LoginScreen} options={{ headerShown: false, title: 'Login' }} />
            <Drawer.Screen name='signup' component={SignupScreen} options={{ headerShown: false, title: 'Signup' }} />
            <Drawer.Screen name='terms' component={TermAndCondition} options={{ headerShown: false, title: 'Term And Condition' }} />
            <Drawer.Screen name='privacy' component={PrivacyPolicy} options={{ headerShown: false, title: 'Privacy Policy' }} />
        </Drawer.Navigator>

    );
}