import { Text, View, Image, TextInput, Button, ScrollView, ImageBackground, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import ResponsiveImage from "react-native-responsive-image";
import { useStyles } from '../styles/responsiveStyle'
import React, { useState } from 'react'
import { Badge } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
// import SearchBar from '../components/SearchBar'

export default function Header({ navigation, onPress, notification, Gift, search, CartHandler }) {
    const styles = useStyles()
    const BadgeData = useSelector(state => state.cartData.cart);
    // console.log("BadgeData", BadgeData)
    // const [toggle, setToggle] = useState(true)
    // const [text, setText] = useState("");
    // const [searchQuery, setSearchQuery] = useState('');

    // const onChangeSearch = (query) => {
    //     setSearchQuery(query)
    //     console.log("searchQuery", searchQuery);
    // }
    // const searchPageHandler = () => {
    //     { !toggle && navigation.navigate('Reward') }
    //     //     // navigation.navigate({ routeName: "searchPage" });
    //     //     navigation.navigate('searchPage')
    // }
    // const PageHandler = () => {
    //     navigation.navigate('SearchPage')
    // }
    // const BadgeData = useSelector(state => state.cartData.cart);
    // for (let i = 0; i < BadgeData.length; i++) {
    //     const data = BadgeData[i];
    //     // console.log("gggggg", data.categoriesDetail_id)
    //     if (data.categoriesDetail_id == BadgeData.categoriesDetail_id) {

    //     }
    // }
    return (
        <View style={styles.headerN}>
            <View style={styles.container}>

                {/* <View style={styles.containerI}>
                    <View style={styles.headerNotification}>
                        <TouchableOpacity onPress={onPress}>
                            <Ionicons style={styles.headerHamburger} name="menu-outline" color='#CC933B' size={30} />
                        </TouchableOpacity>
                        <ResponsiveImage style={styles.headerLogo} source={require('../../assets/logo1.png')} />
                    </View>
                    <View style={styles.headerNotification}>
                        {BadgeData.length > 0 ?
                            <TouchableOpacity onPress={CartHandler} style={{ marginRight: 10, marginTop: 5 }} >
                                <Ionicons name='cart-outline' color='#CC933B' size={25} />
                                <Badge size={15} style={{ position: 'absolute', marginTop: -7, backgroundColor: '#CC933B', }}><Text style={{ color: '#000' }}>{BadgeData.length}</Text></Badge>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={CartHandler} >
                                <Ionicons name='cart-outline' color='#CC933B' size={25} />
                            </TouchableOpacity>
                        }

                        {/* <TouchableOpacity onPress={notification}>
                            <Ionicons name="notifications-outline" color='#CC933B' size={20} style={{ marginRight: 8 }} />
                        </TouchableOpacity> */}
                {/* <TouchableOpacity onPress={Gift} >
                            <Ionicons name="gift-outline" color='#CC933B' size={20} />
                        </TouchableOpacity> */}
                {/* </View>
                </View> */}
                {/* <SearchBar onChangeText={onChangeSearch} value={searchQuery} onFocus={search} /> */}
                <View style={styles.searchbar_root}>
                    <View style={styles.inner_search_root}>
                        <TextInput
                            caretHidden={true}
                            placeholder="Search here..."
                            onPress={Keyboard.dismiss}
                            accessible={false}
                            onFocus={search}
                            placeholderTextColor="#7C7C7C"
                            style={styles.search_style}
                        />
                    </View>
                    {/* <TouchableOpacity onPress={search} style={{ justifyContent: 'center', alignItems: 'center' }} >
                        <Ionicons
                            name="search-outline"
                            color='#CC933B'
                            size={25}
                        />
                    </TouchableOpacity> */}
                </View>

            </View>
        </View>
    )
}