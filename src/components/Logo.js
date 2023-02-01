import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Keyboard } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/drawer'

export default Logo = () => {

    const navigation = useNavigation();
    const [text, setText] = useState("");

    // const openHandler = () => {
    //     navigation.openDrawer();
    // }

    const searchPageHandler = () => {
        navigation.navigate("searchPage");
    }
    const PageHandler = () => {
        navigation.navigate('NotificationScreen')
    }
    const RewardHandler = () => {
        navigation.navigate('Reward')
    }
    return (
        <View>
            <View style={{ flexDirection: 'row', }}>

                {/* <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Ionicons name="menu-outline" color='#CC933B' size={35} />
                </TouchableOpacity> */}

                <Image
                    source={require('../../assets/logo1.png')}
                    style={{ height: 30, width: 110, alignSelf: 'center', marginLeft: -25, }}
                />
                <TouchableOpacity onPress={PageHandler} >
                    <Ionicons name="notifications-outline" color='#CC933B' size={20} style={{ marginLeft: 130, marginTop: 5 }} />
                </TouchableOpacity>

                <TouchableOpacity onPress={RewardHandler}>
                    <Ionicons name="gift-outline" color='#CC933B' size={20} style={{ marginLeft: 20, marginTop: 5 }} />
                </TouchableOpacity>
            </View>



            {/* <View style={{ width: "100%", flexDirection: 'row', backgroundColor: '#222222', marginTop: 20, borderRadius: 8, alignSelf: 'center' }}>
                <View style={{ width: '90%' }}>
                    <TextInput
                        caretHidden={true}
                        placeholder="Search here..."
                        onPress={Keyboard.dismiss}
                        accessible={false}
                        onFocus={searchPageHandler}
                        placeholderTextColor="#7C7C7C"
                        style={{ height: 48, padding: 15 }}
                    />
                </View>
                <TouchableOpacity onPress={searchPageHandler} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Ionicons
                        name="search-outline"
                        color='#CC933B'
                        size={25}
                    />
                </TouchableOpacity>
            </View> */}


            <View>
                {/* <View style={styles.passwordContainer}>
                    <TextInput
                        placeholder="Search here..."
                        value={text}
                        onChangeText={text => setText(text)}
                        onFocus={PageHandler}
                        placeholderTextColor="#7C7C7C"
                        backgroundColor="#222222"
                        activeUnderlineColor="transparent"
                        style={styles.TextInputSearch}
                    />
                    <TouchableOpacity onPress={PageHandler} style={styles.searchIcon}>
                        <Ionicons
                            name="search-outline"
                            color='#CC933B'
                            size={25}

                        />
                    </TouchableOpacity>

                </View> */}
                {/* <TextInput
                    placeholder="Search products"
                    value={text}
                    onChangeText={text => setText(text)}
                    placeholderTextColor='#7C7C7C'
                    iconColor='#CC933B'
                    onFocus={searchPageHandler}
                    right={<TextInput.Icon name="eye" color='#CC933B' />}

                    style={{
                        backgroundColor: '#222222',
                        maxWidth: '100%',
                        height: 30,
                        marginTop: 5,
                        // flexDirection: 'row-reverse',
                        // alignSelf: 'center',
                        borderRadius: 4,
                        paddingLeft: 25,
                        fontSize: 15,

                    }}

                /> */}
                {/* <Ionicons name="search-outline" color='#CC933B' size={35} /> */}
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
    }
})
