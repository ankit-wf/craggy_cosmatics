import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Swiper from 'react-native-swiper'
import { List, Snackbar } from 'react-native-paper';
import { shopStyle as sS } from '../styles/shopStyle'
import { useStyles } from '../styles/responsiveStyle'
import { useDispatch, useSelector } from 'react-redux'
import { submitActions } from '../store/dataSlice'
import { ScrollView } from 'react-native-virtualized-view';
import BottomSheet from 'react-native-gesture-bottom-sheet'
import { SkeletonContainer } from 'react-native-dynamic-skeletons';
import { RadioButton } from 'react-native-paper'
const bannerImg = require('../../Data/bannerSlider.json')

const ProductListingScreen = ({ navigation, route }) => {
    const styles = useStyles()
    const dispatch = useDispatch();
    const storeData = useSelector(state => state.cartData.cart);
    const [loading, setLoading] = useState(true);
    const [bottomSheet, setBottomSheet] = useState(true);
    const [data, setData] = useState([]);
    const [bannerData, setBannerData] = useState([]);
    // console.log("dDDDDD", bannerData)
    const name = route.params.name;
    const id = route.params.id;
    const [checked, setChecked] = useState('Latest');
    const [visible, setVisible] = useState(false);
    const bs = useRef();

    useEffect(() => {

        if (id) {
            allProductsApi()
        }
        if (name == "BestSellers") {
            bestSellingApi()
        }
        if (name == "latest Product") {
            latestProductApi()
        }
        bannerApi();
    }, [id])

    const allProductsApi = () => {
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
            setTimeout(() => {
                setLoading(false)
            }, 1000);
        })
    }
    const bestSellingApi = () => {
        axios.get(
            `https://craggycosmetic.com/api/products/best-selling/`,
            {
                headers: {
                    'consumer_key': '3b137de2b677819b965ddb7288bd73f62fc6c1f04a190678ca6e72fca3986629',
                }
            }
        ).then((res) => {
            // console.log("resss", res.data)
            if (res.data.status = "success") {
                setData(res.data.response)
                setTimeout(() => {
                    setLoading(false)
                },);
            }
        })
    }

    const latestProductApi = () => {
        axios.get(
            `https://craggycosmetic.com/api/home/`,
            {
                headers: {
                    'consumer_key': '3b137de2b677819b965ddb7288bd73f62fc6c1f04a190678ca6e72fca3986629',
                }
            }
        ).then((res) => {
            setData(res.data.latest_products)
            setTimeout(() => {
                setLoading(false)
            },);
        })
    }
    const bannerApi = () => {
        axios.get(
            ` https://craggycosmetic.com/api/banner/`,
            {
                headers: {
                    // 'Content-Type': 'application/json',
                    'consumer_key': '3b137de2b677819b965ddb7288bd73f62fc6c1f04a190678ca6e72fca3986629',
                }
            }
        ).then((res) => {
            setBannerData(res.data.response)
            setTimeout(() => {
                setLoading(false)
            }, 3000);
        })
    }

    const onDismissSnackBar = () => setVisible(false);
    const CartHolder = (product_title, product_id, image, regular_price, sale_price,) => {
        if (storeData.length !== 0) {
            let ss = false;
            storeData.find(data => {
                if (data.categoriesDetail_id == product_id) {
                    ss = true;
                }
            })
            if (ss == true) {
                // console.log("already in list")
                setVisible(!visible);
            }
            else {
                let Data = [...storeData, {
                    description: product_title,
                    categoriesDetail_id: product_id,
                    images: image,
                    oldprice: regular_price,
                    price: sale_price,
                    quantity: 1
                }];
                dispatch(submitActions.price({ cart: Data }));
                navigation.navigate("Cart");
            }
        }
        else {
            let Data = [...storeData, {
                description: product_title,
                categoriesDetail_id: product_id,
                images: image,
                oldprice: regular_price,
                price: sale_price,
                quantity: 1
            }];
            dispatch(submitActions.price({ cart: Data }));
            navigation.navigate("Cart");
        }

    }

    return (
        <View>
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                duration={2000}
                style={styles.Snackbar_style}
            >
                <Text style={styles.Snackbar_text}>Item is already added to the cart. Please Checkout..</Text>
            </Snackbar>
            <ScrollView
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
            >
                {/* <SkeletonContainer isLoading={loading}> */}
                <View style={styles.swiperRoot}>
                    <Swiper style={styles.wrapper}  >
                        {bannerData.map((e, i) => {
                            return (
                                <View key={i} >
                                    <Image source={{ uri: e }} style={styles1.banner_img} />
                                    {/* <View style={styles.sliderContent}>
                                        <View style={styles.bannerTextRoot}>
                                            <Text style={styles.bannerText}>{e.line}</Text>
                                        </View>
                                        <View style={styles.bannerCode} >
                                            <Image source={require('../../assets/CodeImg.png')} />
                                        </View>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            style={styles.bannerButton}
                                        >
                                            <Text style={styles.bannerShopNow}>{e.buttonText}</Text>
                                        </TouchableOpacity>
                                    </View> */}
                                </View>
                            )
                        })}
                    </Swiper>
                </View>
                {/* </SkeletonContainer> */}
                <SafeAreaView style={styles.container}>
                    <SkeletonContainer isLoading={loading}>
                        <View style={styles1.bestSellerRoot}>
                            <Text style={styles1.productListing_name}>{name}</Text>
                            <TouchableOpacity style={styles1.viewLatestProduct} onPress={() => bs.current.show()} >
                                <Text style={styles1.latestProductText}>Sort</Text>
                                <Text style={styles1.dots}>:</Text>
                                <Text style={styles1.latestProductText}>{checked}</Text>
                            </TouchableOpacity>
                        </View>
                    </SkeletonContainer>

                    <BottomSheet hasDraggableIcon ref={bs} height={220} >
                        <View style={styles1.panel}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={styles1.panelTitle}>Sort By</Text>
                            </View>
                            <View style={styles1.btnTextRoot}>
                                <Text style={styles1.select_text}>Latest</Text>
                                <RadioButton
                                    value="Latest"
                                    status={checked === 'Latest' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('Latest')}
                                />
                            </View>
                            <View style={styles1.btnTextRoot}>
                                <Text style={styles1.select_text}>Popularity</Text>
                                <RadioButton
                                    value="Popularity"
                                    status={checked === 'Popularity' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('Popularity')}
                                />
                            </View>
                            <View style={styles1.btnTextRoot}>
                                <Text style={styles1.select_text}>Price - Low to High</Text>
                                <RadioButton
                                    value="Low"
                                    status={checked === 'Low' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('Price Low to High')}
                                />
                            </View>
                            <View style={styles1.btnTextRoot}>
                                <Text style={styles1.select_text}>Price - High to Low</Text>
                                <RadioButton
                                    value="High"
                                    status={checked === 'High' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('Price High to Low')}
                                />
                            </View>
                        </View>
                    </BottomSheet>
                </SafeAreaView>


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

                                    {/* Buy Now Button  */}
                                    <TouchableOpacity style={sS.buyNowButton}
                                        onPress={() => CartHolder(item.product_title, item.product_id, item.image, item.regular_price, item.sale_price,)}
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
            </ScrollView >
        </View>
    )
}

export default ProductListingScreen

const styles1 = StyleSheet.create({
    panel: {
        // padding: 20,
        // backgroundColor: '#FFFFFF',
        paddingTop: 5,
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
        height: 40,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        marginLeft: 15,
        padding: 6
        // alignItems: 'center',
        // borderRadius: 10,
        // backgroundColor: '#FF6347',
        // marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 15,
        // fontWeight: 'bolt',
        // color: 'white',
    },
    banner_img: {
        height: '100%',
        width: '100%'
    },
    bestSellerRoot: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginTop: 20,
        // marginBottom: 10,
    },
    productListing_name: {
        paddingLeft: 20,
        marginTop: 20,
        marginBottom: 10,
        fontFamily: 'Raleway600',
        fontWeight: '600',
        textTransform: "uppercase",
        color: '#CC933B',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'left'
    },
    viewLatestProduct: {
        height: 30,
        width: 120,
        borderRadius: 15,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginRight: 20,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    latestProductText: {
        fontSize: 10,
        lineHeight: 14.09,
        fontWeight: '600',
        paddingLeft: 5
    },
    dots: {
        fontSize: 12,
        lineHeight: 14.09,
        fontWeight: '600',
        paddingLeft: 3,
    },
    shorting_root: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    name_text: {
        fontSize: 25,
        color: '#C68625'
        // fontFamily: 'Raleway600',
        // fontWeight: '600',
        // textTransform: "uppercase",
        // color: '#CC933B',
        // fontSize: 16,
        // lineHeight: 19,
        // textAlign: 'left'
    },
    sort_text_root: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 10,
        height: 3,
        width: 120
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