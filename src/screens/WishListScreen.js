import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackButton from '../components/BackButton'

const WishListScreen = ({ navigation }) => {
    return (
        <View>
            {/* <View style={{ flexDirection: 'row', }}>

                <BackButton goBack={navigation.goBack} Color={'#666666'} />
                <Text style={styles.deliveryText}>MY WISHLIST</Text>
            </View> */}
            <Text style={styles.deliveryText}>MY WISHLIST</Text>


        </View>
    )
}

export default WishListScreen;

const styles = StyleSheet.create({
    deliveryText: {
        fontSize: 20,
        alignSelf: 'center',
        paddingTop: 35,
        // paddingLeft: '25%'
    },
})