import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { shopStyle as sS } from '../styles/shopStyle'
const bestSellingProduct = require('../../Data/bestSellingProduct.json');
import Header from '../components/Header'

const ViewAllBestsellers = ({ navigation }) => {
    // const openDrawer = () => {
    //     navigation.openDrawer();
    // }
    // const PageHandler = () => {
    //     navigation.navigate('SearchPage')
    //     Keyboard.dismiss()
    // }
    // const RewardHandler = () => {
    //     navigation.navigate('Reward')
    // }
    return (
        <View>
            {/* <Header onPress={openDrawer} notification={PageHandler} Gift={RewardHandler} search={PageHandler} /> */}
            <SafeAreaView style={sS.productsListRoot}>
                <FlatList
                    data={bestSellingProduct}
                    renderItem={({ item }) => (

                        <TouchableOpacity style={sS.product109} onPress={() => navigation.navigate("Product", item.product_id)} >
                            <View style={sS.imgRoot} >
                                <Image source={{ uri: item.images }} style={sS.productImg} />
                            </View>

                            <View style={sS.contentRoot}>

                                <View style={sS.textRoot}>
                                    <Text style={sS.contentText}>{item.description}</Text>
                                </View>

                                <View style={sS.baseLine}></View>

                                <View style={sS.priceRoot}>
                                    <Text style={sS.price}>₹{item.price}</Text>
                                    <Text style={sS.spaceRoot}>/ </Text>
                                    <Text style={sS.oldprice}>₹{item.oldprice}</Text>
                                </View>

                            </View>

                            {/* Buy Now Button  */}

                            <TouchableOpacity style={sS.buyNowButton}
                                onPress={() => AddToCartHolder(item.description, item.product_id, item.images, item.price, item.oldprice, item.quantity)}
                            >
                                <Text style={sS.buttonText}>BUY NOW</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    )}
                    numColumns={2}
                    keyExtractor={(item, index) => index}
                />
            </SafeAreaView>
        </View>
    )
}

export default ViewAllBestsellers;

const styles = StyleSheet.create({
    deliveryText: {
        fontSize: 20,
        alignSelf: 'center',
        paddingTop: 35,
        paddingLeft: 20
    },
})