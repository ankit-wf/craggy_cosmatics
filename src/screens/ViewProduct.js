import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native'

import React, { useState, useEffect } from 'react'
import BackButton from '../components/BackButton'
import axios from 'axios'
import { shopStyle as sS } from '../styles/shopStyle'


const ViewProduct = () => {
    const [allData, setAllData] = useState([])
    // console.log("allDataaaaaa", allData)
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios.get(
            `https://craggycosmetic.com/api/products/`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'consumer_key': '3b137de2b677819b965ddb7288bd73f62fc6c1f04a190678ca6e72fca3986629',
                }
            }
        ).then((res) => {
            // console.log("first", res.data.status)
            if (res.data.status = "success") {
                setAllData(res.data.response)
                setLoading(false)
            }
        })
    }, [])


    return (
        <View>
            <SafeAreaView style={sS.productsListRoot}>
                {
                    loading ?
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                            <ActivityIndicator size="large" />
                        </View>
                        :
                        <FlatList
                            data={allData}
                            renderItem={({ item }) => (
                                < TouchableOpacity style={sS.product109} onPress={() => navigation.navigate("Product", item.product_id)} >
                                    <View style={sS.imgRoot} >
                                        <Image source={{ uri: item.image }} style={sS.productImg} />
                                    </View>

                                    <View style={sS.contentRoot}>
                                        <View style={sS.textRoot}>
                                            <Text style={sS.contentText}>{item.product_title}</Text>
                                        </View>

                                        <View style={sS.baseLine}></View>

                                        <View style={sS.priceRoot}>
                                            <Text style={sS.price}>₹{item.sale_price}</Text>
                                            <Text style={sS.spaceRoot}>/ </Text>
                                            <Text style={sS.oldprice}>₹{item.regular_price}</Text>
                                        </View>

                                    </View>

                                    {/* Buy Now Button  */}

                                    <TouchableOpacity style={sS.buyNowButton}
                                    // onPress={() => AddToCartHolder(item.product_title, item.product_id, item.image, item.regular_price, item.sale_price,)}
                                    >
                                        <Text style={sS.buttonText}>BUY NOW</Text>
                                    </TouchableOpacity>
                                </TouchableOpacity>

                            )}
                            numColumns={2}
                            keyExtractor={(item, index) => index}
                        />
                }
            </SafeAreaView>

        </View>
    )
}

export default ViewProduct;

const styles = StyleSheet.create({
    deliveryText: {
        fontSize: 20,
        alignSelf: 'center',
        paddingTop: 35,
        paddingLeft: 20
    },
})