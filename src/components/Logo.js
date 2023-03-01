import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Keyboard } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
// import { TextInput } from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native';
import ResponsiveImage from "react-native-responsive-image";
// import { DrawerActions } from '@react-navigation/drawer'
// import { Badge } from 'react-native-paper';
import { useSelector } from 'react-redux';

export default Logo = ({ navigation }) => {
    // const cart = useSelector(state => state.cartData.cart);
    // const cartHandler = () => {
    //     navigation.navigate("Cart");
    // }
    return (
        <View style={styles.containerI}>
            <View onPress={() => navigation.navigate("ProductListing")}>
                <ResponsiveImage style={styles.headerLogo} source={require('../../assets/logo1.png')} />
            </View>
            <View>
                {/* <TouchableOpacity onPress={cartHandler} style={{ marginTop: 5 }} >
                    <Ionicons name='cart-outline' color='#CC933B' size={25} />
                    {cart.length > 0 ?
                        <Badge size={15} style={{ position: 'absolute', marginTop: -7, backgroundColor: '#CC933B', }}>
                            <Text style={{ color: '#000' }}>{cart.length}</Text>
                        </Badge> : ""}
                </TouchableOpacity> */}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    passwordContainer: {
        flexDirection: 'row',
        backgroundColor: '#222222',
        alignSelf: 'center',
        marginBottom: 0,
        borderColor: 'transparent',
        marginTop: 0,
        marginBottom: 15
    },
    TextInputSearch: {
        height: 40,
        maxWidth: "100%",
        backgroundColor: '#222222',
        flex: 1,
        activeUnderlineColor: "transparent"
    },
    searchIcon: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    containerI: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerNotification: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerLogo: {
        width: 115,
        height: 30,
        marginLeft: 1,
    },
})
