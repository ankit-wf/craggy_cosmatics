import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { Appbar, Searchbar, } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import Heading from '../components/Heading'
import { bestSellingProductStyle as bsP } from '../styles/bestSellingProductStyle'
const bestSellingProduct = require('../../Data/bestSellingProduct.json')
const placeholderText = require('../../Data/Placeholder.json');
import axios from 'axios'
import { shopStyle as sS } from '../styles/shopStyle'

const SearchScreen = ({ navigation }) => {
    // const [back, setBack] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const [searchData, setSearchData] = useState([]);
    // console.log("gggggggg", searchQuery)
    const [newName, setnewName] = useState("");
    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * placeholderText.length);
        setnewName(placeholderText[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 5000);

        setSearchData()

        axios.get(
            `https://craggycosmetic.com/api/products/search/`,
            {
                params: {
                    s: searchQuery
                },
                headers: {
                    'Content-Type': 'application/json',
                    'consumer_key': '3b137de2b677819b965ddb7288bd73f62fc6c1f04a190678ca6e72fca3986629',
                }
            }
        ).then((res) => {
            // console.log("resssffffhfdshf", res.data)
            if (res.data.status = "success") {
                setSearchData(res.data.response)
            }
        })
        // setSearchQuery("")
        return () => clearInterval(intervalID);
    }, [shuffle, searchQuery])


    const onSubmit = () => {
        axios.get(
            `https://craggycosmetic.com/api/products/search/`,
            {
                params: {
                    s: searchQuery
                },
                headers: {
                    'Content-Type': 'application/json',
                    'consumer_key': '3b137de2b677819b965ddb7288bd73f62fc6c1f04a190678ca6e72fca3986629',
                }
            }
        ).then((res) => {
            // console.log("resssffffhfdshf", res.data)
            if (res.data.status = "success") {
                setSearchData(res.data.response)
            }
        })
    }
    const SearchHandler = (data) => {
        setSearchQuery(data)
    }

    return (
        <View>
            <Appbar.Header style={{ backgroundColor: 'white', }}>
                <Appbar.BackAction onPress={navigation.goBack} color="blue" />
                <Searchbar
                    placeholder={newName.placeholder}
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={{ maxWidth: "85%", maxHeight: 35, }}
                    onSubmitEditing={onSubmit}
                // onIconPress={onSubmit}
                />
            </Appbar.Header>
            {searchQuery == "" ?
                <View>
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
                                <TouchableOpacity style={styles.View_Container} onPress={() => SearchHandler("Hair care")}>
                                    <Text style={styles.view_container_text}>Hair Care</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.View_Container} onPress={() => SearchHandler("Onion")}>
                                    <Text style={styles.view_container_text}>Onion</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.View_Container} onPress={() => SearchHandler("Skin Care")}>
                                    <Text style={styles.view_container_text}>Skin Care</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.trending_View_container}>
                                <TouchableOpacity style={styles.View_Container} onPress={() => SearchHandler("oil")}>
                                    <Text style={styles.view_container_text}>Oil</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.View_Container} onPress={() => SearchHandler("Keratin")}>
                                    <Text style={styles.view_container_text}>Karetin</Text>
                                </TouchableOpacity>

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

                :
                <View style={styles.productsListRoot}>
                    <FlatList
                        data={searchData}
                        renderItem={({ item }) => (
                            // <SkeletonContainer isLoading={loading}>
                            < TouchableOpacity
                                style={sS.product109}
                                activeOpacity={0.8}
                                onPress={() => navigation.navigate("Product", item.product_id)}
                            >
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
                                    onPress={() => CartHolder(item.product_title, item.product_id, item.image, item.regular_price, item.sale_price,)}
                                >
                                    <Text style={sS.buttonText}>BUY NOW</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                            // </SkeletonContainer>
                        )}
                        numColumns={2}
                        keyExtractor={(item, index) => index}
                    />
                </View>
            }

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
    productsListRoot: {
        height: '90%',
        width: '100%',
        alignSelf: 'center',
    },
})

