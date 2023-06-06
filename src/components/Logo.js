import React from 'react'
import { StyleSheet, View, } from 'react-native'
import ResponsiveImage from "react-native-responsive-image";

export default Logo = ({ navigation }) => {
    return (
        <View style={styles.containerI}>
            <View onPress={() => navigation.navigate("ProductListing")}>
                <ResponsiveImage style={styles.headerLogo} source={require('../../assets/logo1.png')} />
            </View>
            <View>
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
