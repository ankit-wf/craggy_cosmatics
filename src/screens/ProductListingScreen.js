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
import BottomSheet from 'reanimated-bottom-sheet';

const bannerImg = require('../../Data/bannerSlider.json')

const ProductListingScreen = ({ navigation, route }) => {
    const styles = useStyles()
    const dispatch = useDispatch();
    const storeData = useSelector(state => state.cartData.cart);
    const [loading, setLoading] = useState(true);
    const [bottomSheet, setBottomSheet] = useState(false);
    const [data, setData] = useState([])
    const name = route.params.name
    const id = route.params.id;

    useEffect(() => {
        axios.get(
            `https://craggycosmetic.com/api/products/`,
            {
                params: {
                    category_id: id
                },
                headers: {
                    'Content-Type': 'application/json',
                    'consumer_key': '3b137de2b677819b965ddb7288bd73f62fc6c1f04a190678ca6e72fca3986629',
                }
            }
        ).then((res) => {
            setData(res.data)
            setLoading(false);
            //   if (res.data.status = "success") {
            //     setData(res.data.response)
            //   }
            // console.log("first", res.data)
        })
    }, [id])

    const AddToCartHolder = (product_title, product_id, image, regular_price, sale_price) => {
        let Data = [...storeData, {
            description: product_title,
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
        navigation.navigate('Cart', product_id);
    }

    //BottomSheet Style.....
    const bs = useRef();
    // const fall = new Animated.Value(1);
    const renderInner = () => (
        <View style={styles1.panel}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles1.panelTitle}>Sort By</Text>
            </View>
            <TouchableOpacity style={styles1.panelButton} >
                <Text style={styles1.panelButtonTitle}>Latest</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles1.panelButton} >
                <Text style={styles1.panelButtonTitle}>Popularity</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles1.panelButton}>
                <Text style={styles1.panelButtonTitle}>Price - Low to High</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles1.panelButton}>
                <Text style={styles1.panelButtonTitle}>Price - High to Low</Text>
            </TouchableOpacity>
        </View>
    );

    const onScrollHandle = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        if (offsetY > 265) {
            navigation.setParams({ offsetYvalue: offsetY });
        } else {
            navigation.setParams({ offsetYvalue: 0 });
        }
    }

    const bottomSheetHandler = () => {
        if (bottomSheet == true) {
            bs.current.snapTo(0)
            setBottomSheet(false);
        } else {
            bs.current.snapTo(1)
            setBottomSheet(true);
        }
        // (!bottomSheet) ? bs.current.snapTo(1) : bs.current.snapTo(0)
    }

    return (
        <View>
            <ScrollView onScroll={onScrollHandle} >
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

                <View style={{ height: 50, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'black' }}>
                    <Text style={{ fontSize: 25, color: '#C68625' }}>{name}</Text>
                    <TouchableOpacity onPress={bottomSheetHandler} style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, color: '#C68625' }}>Sort</Text>
                        <Ionicons name="swap-vertical" size={25} style={{ color: '#C68625', marginLeft: 3 }} />
                    </TouchableOpacity>
                </View>

                <View style={sS.productsListRoot}>
                    {
                        loading ?
                            <ActivityIndicator size="large" color="#00ff00" style={{ marginTop: 150 }} />
                            :
                            <FlatList
                                data={data}
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

                                        {/* {/ Buy Now Button  /} */}
                                        <TouchableOpacity style={sS.buyNowButton}
                                            onPress={() => AddToCartHolder(item.product_title, item.product_id, item.image, item.regular_price, item.sale_price,)}
                                        >
                                            <Text style={sS.buttonText}>BUY NOW</Text>
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                )}
                                numColumns={2}
                                keyExtractor={(item, index) => index}
                            />
                    }
                </View>
            </ScrollView>
            <BottomSheet
                ref={bs}
                snapPoints={[340, 0]}
                renderContent={renderInner}
                initialSnap={1}
                // callbackNode={fall}
                enabledGestureInteraction={true}
            />
        </View>
    )
}

export default ProductListingScreen

const styles1 = StyleSheet.create({
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
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
})