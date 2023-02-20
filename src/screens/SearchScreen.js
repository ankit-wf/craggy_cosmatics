import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { Appbar, Searchbar, } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import Heading from '../components/Heading'
import { bestSellingProductStyle as bsP } from '../styles/bestSellingProductStyle'
const bestSellingProduct = require('../../Data/bestSellingProduct.json')
const placeholderText = require('../../Data/Placeholder.json');


const SearchScreen = ({ navigation }) => {
    const [back, setBack] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const [newName, setnewName] = useState("");
    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * placeholderText.length);
        setnewName(placeholderText[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 5000);
        return () => clearInterval(intervalID);
    }, [shuffle])

    return (
        <View>
            <Appbar.Header style={{ backgroundColor: 'white', }}>
                <Appbar.BackAction onPress={navigation.goBack} color="blue" />
                {!back ? (
                    <Searchbar
                        placeholder={newName.placeholder}
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                        style={{ maxWidth: "85%", maxHeight: 35, }}
                    />) : null}

            </Appbar.Header>

            <View style={{ backgroundColor: 'white', marginTop: 1 }}>
                <View style={styles.trending_container}>
                    <View style={styles.trending_icon}>
                        <Ionicons name="trending-up-sharp" color='blue' size={26} />
                    </View>
                    <View style={styles.trending_Text_Container}>
                        <Text style={styles.trending_Text}>Trending Searches</Text>
                    </View>
                </View>

                <View>
                    <View style={styles.trending_View_container}>
                        <View style={styles.View_Container}>
                            <Text style={styles.view_container_text}>Hair Care</Text>
                        </View>

                        <View style={styles.View_Container}>
                            <Text style={styles.view_container_text}>Onion</Text>
                        </View>


                        <View style={styles.View_Container}>
                            <Text style={styles.view_container_text}>Skin Care</Text>
                        </View>
                    </View>
                    <View style={styles.trending_View_container}>
                        <View style={styles.View_Container}>
                            <Text style={styles.view_container_text}>Face Wash</Text>
                        </View>

                        <View style={styles.View_Container}>
                            <Text style={styles.view_container_text}>Karetin</Text>
                        </View>

                    </View>

                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, marginBottom: 10, }}>
                <Heading title=' best selling ' />

                <TouchableOpacity
                    style={styles.viewLatestProduct}
                    onPress={() => navigation.navigate("AllBestseller")}
                >
                    <Text style={styles.latestProductText} >
                        View All
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={bsP.productsListRoot}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >

                    {bestSellingProduct.map((e, i) => {
                        return (
                            <TouchableOpacity style={bsP.touchable} key={i} onPress={() => navigation.navigate('Product', e.sellingProduct_id)} >
                                <View style={bsP.imgRoot} >
                                    <Image source={{ uri: e.images }} style={bsP.productImg} />
                                </View>

                                <View style={bsP.contentRoot}>

                                    <View style={bsP.descriptionRoot}>
                                        <Text style={bsP.descriptionText}>{e.description}</Text>
                                    </View>

                                    <View style={bsP.baseLine}></View>

                                    <View style={bsP.priceRoot}>
                                        <Text style={bsP.price}>₹{e.price}</Text>
                                        <Text style={bsP.spaceRoot}>/ </Text>
                                        <Text style={bsP.oldprice}>₹{e.oldprice}</Text>
                                    </View>

                                </View>

                                {/* Buy Now Button  */}

                                <TouchableOpacity style={bsP.buyNowButton}
                                    onPress={() => bestSellingHolder(e.description, e.sellingProduct_id, e.images, e.price, e.oldprice, e.quantity)}
                                >
                                    <Text style={bsP.buttonText}>BUY NOW</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>

        </View>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    trending_container: {
        flexDirection: 'row'
    },
    trending_icon: {
        marginTop: 5,
        marginLeft: 17
    },
    trending_Text_Container: {
        marginTop: 5,
        marginLeft: 10
    },
    trending_Text: {
        fontSize: 17,
        color: 'blue'
    },
    trending_View_container: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        // borderWidth: 1,
        // borderColor: 'red'
    },
    View_Container: {
        height: 35,
        width: 90,
        borderWidth: 1,
        borderColor: 'blue',
        margin: 10,
        borderRadius: 6
    },
    view_container_text: {
        textAlign: 'center',
        paddingTop: 6,
        color: 'blue'
    },
    viewLatestProduct: {
        height: 25,
        width: 70,
        borderRadius: 15,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginRight: 20,
        alignSelf: 'center'
    },
    latestProductText: {
        fontSize: 12,
        lineHeight: 14.09,
        fontWeight: '600',
        // color: '#00000',
    },
})


{/* <Appbar.BackAction onPress={navigation.goBack} />
            <Appbar.Content title="Search" />
            <Appbar.Action icon="magnify" onPress={() => { }} /> */}