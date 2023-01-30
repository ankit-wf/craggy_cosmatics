import { Text, View, Image, TextInput, Button, ScrollView, ImageBackground, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import ResponsiveImage from "react-native-responsive-image";
import { useStyles } from '../styles/responsiveStyle'
import React, { useState } from 'react'
// import SearchBar from '../components/SearchBar'

export default function Header({ navigation, onPress, notification, Gift, search }) {
    const styles = useStyles()
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
    return (
        <View style={styles.headerN}>
            <View style={styles.container}>

                <View style={styles.containerI}>
                    <View style={styles.headerNotification}>
                        <TouchableOpacity onPress={onPress}>
                            <Ionicons style={styles.headerHamburger} name="menu-outline" color='#CC933B' size={30} />
                        </TouchableOpacity>
                        <ResponsiveImage style={styles.headerLogo} source={require('../../assets/logo1.png')} />
                    </View>
                    <View style={styles.headerNotification}>
                        <TouchableOpacity onPress={notification}>
                            <Ionicons name="notifications-outline" color='#CC933B' size={20} style={{ marginRight: 8 }} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={Gift} >
                            <Ionicons name="gift-outline" color='#CC933B' size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <SearchBar onChangeText={onChangeSearch} value={searchQuery} onFocus={search} /> */}

                <View style={{ width: "100%", flexDirection: 'row', backgroundColor: '#222222', marginTop: 20, borderRadius: 8, alignSelf: 'center' }}>
                    <View style={{ width: '90%' }}>
                        <TextInput
                            placeholder="Search here..."
                            onPress={Keyboard.dismiss}
                            accessible={false}
                            onFocus={search}
                            placeholderTextColor="#7C7C7C"
                            style={{ height: 48, padding: 15 }}
                        />
                    </View>
                    <TouchableOpacity onPress={search} style={{ justifyContent: 'center', alignItems: 'center' }} >
                        <Ionicons
                            name="search-outline"
                            color='#CC933B'
                            size={25}
                        />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}