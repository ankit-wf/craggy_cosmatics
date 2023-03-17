import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
// import Swiper from 'react-native-swiper'
import { List, Snackbar } from 'react-native-paper';
import { shopStyle as sS } from '../styles/shopStyle'
import { useStyles } from '../styles/responsiveStyle'
import { useDispatch, useSelector } from 'react-redux'
import { submitActions } from '../store/dataSlice'
import { ScrollView } from 'react-native-virtualized-view';
import BottomSheet from 'react-native-gesture-bottom-sheet'
import { SkeletonContainer } from 'react-native-dynamic-skeletons';
import { RadioButton } from 'react-native-paper';
import { CONSUMER_KEY, ALL_PRODUCT_API, BEST_SELLING_API, HOME_API } from "@env";
import SocialIcon from '../components/SocialIcon'

const ProductListingScreen = ({ navigation, route }) => {
    const Pl_Style = useStyles()
    const dispatch = useDispatch();
    const cartData = useSelector(state => state.cartData.cart);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const name = route.params.name;
    const id = route.params.id;
    const banner = route.params.banner;
    const [checked, setChecked] = useState('Popularity');
    const [visible, setVisible] = useState(false);
    const bs = useRef();

    useEffect(() => {
        if (id) {
            allProductsApi()
            setTimeout(() => {
                setLoading(false)
            },);
        }
        if (name == "BestSellers") {
            bestSellingApi()
            setTimeout(() => {
                setLoading(false)
            },);
        }
        if (name == "latest Product") {
            latestProductApi()
            setTimeout(() => {
                setLoading(false)
            },);
        }
        // bannerApi();
        // setTimeout(() => {
        //     setLoading(false)
        // },);
    }, [id])

    const allProductsApi = () => {
        axios.get(
            ALL_PRODUCT_API,
            {
                params: {
                    category_id: id
                },
                headers: {
                    'Content-Type': 'application/json',
                    'consumer_key': CONSUMER_KEY,
                }
            }
        ).then((res) => {
            setData(res.data)
        })
    }
    const bestSellingApi = () => {
        axios.get(
            BEST_SELLING_API,
            {
                headers: {
                    'consumer_key': CONSUMER_KEY,
                }
            }
        ).then((res) => {
            if (res.data.status = "success") {
                setData(res.data.response)
            }
        })
    }

    const latestProductApi = () => {
        axios.get(
            HOME_API,
            {
                headers: {
                    'consumer_key': CONSUMER_KEY,
                }
            }
        ).then((res) => {
            setData(res.data.latest_products)
        })
    }
    // const bannerApi = () => {
    //     axios.get(
    //         ` https://craggycosmetic.com/api/banner/`,
    //         {
    //             headers: {
    //                 // 'Content-Type': 'application/json',
    //                 'consumer_key': '3b137de2b677819b965ddb7288bd73f62fc6c1f04a190678ca6e72fca3986629',
    //             }
    //         }
    //     ).then((res) => {
    //         setBannerData(res.data.response)
    //     })
    // }
    const onDismissSnackBar = () => setVisible(false);
    const CartHolder = (product_title, product_id, image, regular_price, sale_price,) => {
        if (cartData.length !== 0) {
            let ss = false;
            cartData.find(data => {
                if (data.categoriesDetail_id == product_id) {
                    ss = true;
                }
            })
            if (ss == true) {
                // console.log("already in list")
                setVisible(!visible);
            }
            else {
                let Data = [...cartData, {
                    description: product_title,
                    categoriesDetail_id: product_id,
                    images: image,
                    oldprice: regular_price,
                    price: sale_price,
                    quantity: 1
                }];
                dispatch(submitActions.price({ cart: Data }));
                navigation.navigate("cart");
            }
        }
        else {
            let Data = [...cartData, {
                description: product_title,
                categoriesDetail_id: product_id,
                images: image,
                oldprice: regular_price,
                price: sale_price,
                quantity: 1
            }];
            dispatch(submitActions.price({ cart: Data }));
            navigation.navigate("cart");
        }

    }

    const latestData = () => {
        setChecked('Latest')
        data.sort((a, b) => b.publish_data.localeCompare(a.publish_data));
        // console.log(data)
        setData(data)
    }
    const LowestData = () => {
        setChecked('Low to High')
        data.sort((a, b) => a.sale_price.localeCompare(b.sale_price));
        setData(data)
    }
    const HighestData = () => {
        setChecked("High to Low")
        data.sort((a, b) => b.sale_price.localeCompare(a.sale_price));
        setData(data)
    }

    return (
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
            >
                <SkeletonContainer isLoading={loading}>
                    <View style={Pl_Style.banner_img_root}>
                        <Image source={{ uri: banner }} style={Pl_Style.banner_img} />
                    </View>
                </SkeletonContainer>
                <SafeAreaView style={Pl_Style.container}>
                    <SkeletonContainer isLoading={loading}>
                        <View style={Pl_Style.Cat_Seller_Root}>
                            <Text style={Pl_Style.productListing_name}>{name}</Text>
                            <TouchableOpacity style={Pl_Style.touchable_sort} onPress={() => bs.current.show()} >
                                <Text style={Pl_Style.sort_Text}>Sort</Text>
                                <Text style={Pl_Style.dots}>:</Text>
                                <Text style={Pl_Style.sort_Text}>{checked}</Text>
                            </TouchableOpacity>
                        </View>
                    </SkeletonContainer>

                    <BottomSheet hasDraggableIcon ref={bs} height={220} >
                        <View style={Pl_Style.panel}>
                            <View style={Pl_Style.sort_align_root}>
                                <Text style={Pl_Style.panelTitle}>Sort By</Text>
                            </View>

                            <View style={Pl_Style.panel_btnText_Root}>
                                <Text style={Pl_Style.panel_select_text}>Popularity</Text>
                                <RadioButton
                                    value="Popularity"
                                    status={checked === 'Popularity' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('Popularity')}
                                />
                            </View>
                            <View style={Pl_Style.panel_btnText_Root}>
                                <Text style={Pl_Style.panel_select_text}>Latest</Text>
                                <RadioButton
                                    value="Latest"
                                    status={checked === 'Latest' ? 'checked' : 'unchecked'}
                                    onPress={latestData}
                                />
                            </View>
                            <View style={Pl_Style.panel_btnText_Root}>
                                <Text style={Pl_Style.panel_select_text}>Price - Low to High</Text>
                                <RadioButton
                                    value="Low"
                                    status={checked === 'Low' ? 'checked' : 'unchecked'}
                                    onPress={LowestData}
                                />
                            </View>
                            <View style={Pl_Style.panel_btnText_Root}>
                                <Text style={Pl_Style.panel_select_text}>Price - High to Low</Text>
                                <RadioButton
                                    value="High"
                                    status={checked === 'High' ? 'checked' : 'unchecked'}
                                    onPress={HighestData}
                                />
                            </View>
                        </View>
                    </BottomSheet>
                </SafeAreaView>

                <View style={Pl_Style.flatList_Root}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <SkeletonContainer isLoading={loading}>
                                < TouchableOpacity
                                    style={Pl_Style.flatList_tochable_root}
                                    activeOpacity={0.8}
                                    onPress={() => navigation.navigate("productDetail", item.product_id)}
                                >
                                    <View style={Pl_Style.flatList_imgRoot} >
                                        <Image source={{ uri: item.image }} style={Pl_Style.flatList_Img} />
                                    </View>

                                    <View style={Pl_Style.flatList_contentRoot}>
                                        <View style={Pl_Style.flatList_textRoot}>
                                            <Text style={Pl_Style.flatList_contentText}>{item.product_title}</Text>
                                        </View>
                                        <View style={Pl_Style.flatList_baseLine}></View>
                                        <View style={Pl_Style.flatList_priceRoot}>
                                            <Text style={Pl_Style.flatList_oldprice}>₹{item.regular_price}</Text>
                                            <Text style={Pl_Style.flatList_spaceRoot}>/ </Text>
                                            <Text style={Pl_Style.flatList_price}>₹{item.sale_price}</Text>
                                        </View>
                                    </View>

                                    {/* Buy Now Button  */}
                                    <View style={Pl_Style.btn_btn}>
                                        <TouchableOpacity style={Pl_Style.flatList_buyNowButton}
                                            onPress={() => CartHolder(item.product_title, item.product_id, item.image, item.regular_price, item.sale_price,)}
                                        >
                                            <Text style={Pl_Style.flatList_buttonText}>BUY NOW</Text>
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            </SkeletonContainer>
                        )}
                        numColumns={2}
                        keyExtractor={(item, index) => index}
                    />
                    <SocialIcon />
                </View>
            </ScrollView >
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                duration={2000}
                style={Pl_Style.Snackbar_style}
            >
                <Text style={Pl_Style.Snackbar_text}>Item is already added to the cart. Please Checkout..</Text>
            </Snackbar>
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
        fontFamily: 'Raleway',
        fontWeight: '600',
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
    banner_img_root: {
        height: 200,
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
        fontFamily: 'Raleway',
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
        fontSize: 11,
        lineHeight: 14.09,
        // fontWeight: '600',
        paddingLeft: 5,
        fontFamily: 'Raleway',
        fontWeight: '500',
    },
    dots: {
        fontSize: 12,
        lineHeight: 14.09,
        fontFamily: 'Raleway',
        fontWeight: '500',
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
        // fontFamily: 'Raleway',
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
    panel_btnText_Root: {
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
    panel_select_text: {
        fontSize: 15,
        padding: 6,
        marginLeft: 15,
        fontWeight: "700",
        fontFamily: 'Raleway',
    },
})