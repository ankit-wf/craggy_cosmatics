import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Swiper from 'react-native-swiper'
import { shopStyle as sS } from '../styles/shopStyle'
import { useStyles } from '../styles/responsiveStyle'
import { useDispatch, useSelector } from 'react-redux'
import { submitActions } from '../store/dataSlice'
import { ScrollView } from 'react-native-virtualized-view';
import { Ionicons } from '@expo/vector-icons'
import BottomSheet from 'react-native-gesture-bottom-sheet'
import { RadioButton } from 'react-native-paper'
import { SkeletonContainer } from 'react-native-dynamic-skeletons';
const bannerImg = require('../../Data/bannerSlider.json')

const ViewAllBestsellers = ({ navigation, route }) => {
    const styles = useStyles()
    const dispatch = useDispatch();
    const storeData = useSelector(state => state.cartData.cart);
    const [loading, setLoading] = useState(true);
    const [bottomSheet, setBottomSheet] = useState(false);
    const [data, setData] = useState([]);
    const [checked, setChecked] = useState('ok');
    const bs = useRef();
    // const name = route.params.name
    // const id = route.params.id;
    useEffect(() => {
        axios.get(
            `https://craggycosmetic.com/api/products/best-selling/`,
            {
                headers: {
                    // 'Content-Type': 'application/json',
                    'consumer_key': '3b137de2b677819b965ddb7288bd73f62fc6c1f04a190678ca6e72fca3986629',
                }
            }
        ).then((res) => {
            // console.log("resss", res.data.response)
            if (res.data.status = "success") {
                setData(res.data.response)
                setLoading(false);
            }
        })
    }, [])

    const buyNowHanlder = (description, product_id, image, regular_price, sale_price) => {
        let Data = [...storeData, {
            description: description,
            categoriesDetail_id: product_id,
            images: image,
            price: regular_price,
            oldprice: sale_price,
            quantity: 1
        }];
        dispatch(submitActions.price(
            {
                cart: Data
            }
        ));
        navigation.navigate("Cart", product_id);
    }
    const onScrollHandle = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        if (offsetY > 265) {
            navigation.setParams({ offsetYvalue: offsetY });
        } else {
            navigation.setParams({ offsetYvalue: 0 });
        }
    }

    return (
        <View>
            <ScrollView onScroll={onScrollHandle} >
                <SkeletonContainer isLoading={loading}>
                    <View style={styles.swiperRoot}>
                        <Swiper style={styles.wrapper}  >
                            {bannerImg.map((e, i) => {
                                return (
                                    <View key={i} >
                                        <Image source={{ uri: e.images }} style={{ height: '100%', width: '100%' }} />
                                        <View style={styles.sliderContent}>
                                            <View style={styles.bannerTextRoot}>
                                                <Text style={styles.bannerText}>{e.line}</Text>
                                            </View>
                                            <View style={styles.bannerCode} >
                                                <Image source={require('../../assets/CodeImg.png')} />
                                            </View>
                                            <TouchableOpacity style={styles.bannerButton}>
                                                <Text style={styles.bannerShopNow}>{e.buttonText}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            })}
                        </Swiper>
                    </View>
                </SkeletonContainer>


                <SkeletonContainer isLoading={loading}>
                    <SafeAreaView style={styles.container}>
                        <View style={styles1.shorting_root}>
                            <Text style={styles1.name_text}>BestSellers</Text>
                            <TouchableOpacity
                                onPress={() => bs.current.show()}
                                style={styles1.sort_text_root}
                            >
                                <Text style={styles1.sort_text}>Sort</Text>
                                <Ionicons name="swap-vertical" size={25} style={styles1.sort_icon} />
                            </TouchableOpacity>
                        </View>
                        <BottomSheet hasDraggableIcon ref={bs} height={220} >
                            <View style={styles1.panel}>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={styles1.panelTitle}>Sort By</Text>
                                </View>
                                <View style={styles1.btnTextRoot}>
                                    <Text style={styles1.select_text}>Latest</Text>
                                    <RadioButton
                                        value="one"
                                        status={checked === 'one' ? 'checked' : 'unchecked'}
                                        onPress={() => navigation.navigate('AddAddress')}
                                    />
                                </View>
                                <View style={styles1.btnTextRoot}>
                                    <Text style={styles1.select_text}>Popularity</Text>
                                    <RadioButton
                                        value="second"
                                        status={checked === 'second' ? 'checked' : 'unchecked'}
                                        onPress={() => console.log("Popularity")}
                                    />
                                </View>
                                <View style={styles1.btnTextRoot}>
                                    <Text style={styles1.select_text}>Price - Low to High</Text>
                                    <RadioButton
                                        value="third"
                                        status={checked === 'third' ? 'checked' : 'unchecked'}
                                        onPress={() => console.log('Price - Low to High')}
                                    />
                                </View>
                                <View style={styles1.btnTextRoot}>
                                    <Text style={styles1.select_text}>Price - High to Low</Text>
                                    <RadioButton
                                        value="fourth"
                                        status={checked === 'fourth' ? 'checked' : 'unchecked'}
                                        onPress={() => console.log('Price - High to Low')}
                                    />
                                </View>
                            </View>
                        </BottomSheet>
                    </SafeAreaView>
                </SkeletonContainer>

                <View style={sS.productsListRoot}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <SkeletonContainer isLoading={loading}>
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

                                    {/*  Buy Now Button  */}
                                    <TouchableOpacity style={sS.buyNowButton}
                                        onPress={() => buyNowHanlder(item.description, item.product_id, item.image, item.regular_price, item.sale_price,)}
                                    >
                                        <Text style={sS.buttonText}>BUY NOW</Text>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            </SkeletonContainer>

                        )}
                        numColumns={2}
                        keyExtractor={(item, index) => index}
                    />
                </View>

                {/* <SkeletonContainer isLoading={loading}>
                    <SafeAreaView style={styles.container}>
                        <View style={styles1.shorting_root}>
                            <Text style={styles1.name_text}>BestSellers</Text>
                            <TouchableOpacity
                                onPress={() => bs.current.show()}
                                style={styles1.sort_text_root}
                            >
                                <Text style={styles1.sort_text}>Sort</Text>
                                <Ionicons name="swap-vertical" size={25} style={styles1.sort_icon} />
                            </TouchableOpacity>
                        </View>
                        <BottomSheet hasDraggableIcon ref={bs} height={220} >
                            <View style={styles1.panel}>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={styles1.panelTitle}>Sort By</Text>
                                </View>
                                <View style={styles1.btnTextRoot}>
                                    <Text style={styles1.select_text}>Latest</Text>
                                    <RadioButton
                                        value="one"
                                        status={checked === 'one' ? 'checked' : 'unchecked'}
                                        onPress={() => navigation.navigate('AddAddress')}
                                    />
                                </View>
                                <View style={styles1.btnTextRoot}>
                                    <Text style={styles1.select_text}>Popularity</Text>
                                    <RadioButton
                                        value="second"
                                        status={checked === 'second' ? 'checked' : 'unchecked'}
                                        onPress={() => console.log("Popularity")}
                                    />
                                </View>
                                <View style={styles1.btnTextRoot}>
                                    <Text style={styles1.select_text}>Price - Low to High</Text>
                                    <RadioButton
                                        value="third"
                                        status={checked === 'third' ? 'checked' : 'unchecked'}
                                        onPress={() => console.log('Price - Low to High')}
                                    />
                                </View>
                                <View style={styles1.btnTextRoot}>
                                    <Text style={styles1.select_text}>Price - High to Low</Text>
                                    <RadioButton
                                        value="fourth"
                                        status={checked === 'fourth' ? 'checked' : 'unchecked'}
                                        onPress={() => console.log('Price - High to Low')}
                                    />
                                </View>
                            </View>
                        </BottomSheet>
                    </SafeAreaView>
                </SkeletonContainer>

                <View style={sS.productsListRoot}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <SkeletonContainer isLoading={loading}>
                                <TouchableOpacity style={sS.product109} onPress={() => navigation.navigate("Product", item.product_id)} >
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

                                    {/* {/ Buy Now Button  /} */}
                {/* <TouchableOpacity style={sS.buyNowButton}
                                        onPress={() => buyNowHanlder(item.description, item.product_id, item.image, item.regular_price, item.sale_price,)}
                                    >
                                        <Text style={sS.buttonText}>BUY NOW</Text>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            </SkeletonContainer>
                        )}
                        numColumns={2}
                        keyExtractor={(item, index) => index}
                    />
                // </View> */}
            </ScrollView>
        </View>
    )
}

export default ViewAllBestsellers

const styles1 = StyleSheet.create({
    panel: {
        paddingTop: 5,
        // padding: 20,
        // backgroundColor: '#FFFFFF',
        // paddingTop: 20,
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 50,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    shorting_root: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    name_text: {
        fontSize: 25,
        color: '#C68625'
    },
    sort_text_root: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    sort_text: {
        fontSize: 22,
        color: '#C68625'
    },
    sort_icon: {
        color: '#C68625',
        marginLeft: 3
    },
    loader: {
        marginTop: 150
    },
    button: {
        height: 50,
        width: 150,
        backgroundColor: "#140078",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        shadowColor: "#8559da",
        shadowOpacity: 0.7,
        shadowOffset: {
            height: 4,
            width: 4,
        },
        shadowRadius: 5,
        elevation: 6,
    },
    text: {
        color: "white",
        fontWeight: "600",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100
    },
    btnTextRoot: {
        flexDirection: 'row',
        // height: 50,
        width: "100%",
        // borderWidth: 0.3,
        // borderRadius: 4,
        // marginBottom: "6%",
        alignSelf: 'center',
        // justifyContent: 'space-around',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: '#fff'
    },
    select_text: {
        fontSize: 15,
        padding: 6,
        marginLeft: 15,
        // fontWeight: "700",
        // fontFamily: 'Raleway700',
    },
})