import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import Swiper from 'react-native-swiper'
import axios from 'axios'
import Heading from '../components/Heading';
import { List, Snackbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons'
import { productDetailsStyle as pDs } from '../styles/productdetailsStyle';
import { Rating, } from 'react-native-ratings';
import { useSelector, useDispatch } from 'react-redux'
import { submitActions } from '../store/dataSlice'
const bestSellingProduct = require('../../Data/bestSellingProduct.json')
import axios from 'axios'
import { SkeletonContainer } from 'react-native-dynamic-skeletons';

const ProductDetailScreen = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const newData = useSelector(state => state.reviewData.review);
    const storeData = useSelector(state => state.cartData.cart);
    const [visible, setVisible] = useState(false);
    const [star, setStar] = useState('')
    const [page, setPage] = useState('1')
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [heart, setHeart] = useState(false);
    const id = route.params;
    const [test, setTest] = useState(false);
    // console.log("tessssstttt", storeData,)
    // const idd = route.params;
    useEffect(() => {
        Single_Product();
    }, [id])

    const Single_Product = () => {
        axios.get(`https://craggycosmetic.com/api/products/`,
            {
                params: {
                    product_id: id
                },
                headers: {
                    'Content-Type': 'application/json',
                    'consumer_key': '3b137de2b677819b965ddb7288bd73f62fc6c1f04a190678ca6e72fca3986629',
                }
            }
        ).then((res) => {
            setData(res.data)
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        })
    }

    const ratingCompleted = (rating) => {
        setStar(rating);
    }

    const [expanded, setExpanded] = useState("1");

    const handlePress = (gg) => {
        setExpanded(gg);
    };

    const onToggleSnackBar = () => {
        setVisible(!visible);
    }
    const subOne = () => {
        if (one <= 1) {
        } else {
            setOne(one - 1)
        }
    }

    const CartHolder = (description, product_id, image, regular_price, sale_price,) => {

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
                    description: description,
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
                description: description,
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

    const wishlistHandler = () => {
        setHeart(!heart);
    }

    return (
        <View>
            <SafeAreaView style={styles.safe_root}>
                {data.map((data, i) => {
                    return (
                        <SkeletonContainer isLoading={loading} key={i}>
                            <Snackbar
                                visible={visible}
                                onDismiss={onDismissSnackBar}
                                duration={2000}
                                style={styles.Snackbar_style}
                            >
                                <Text style={styles.Snackbar_text}>Item is already added to the cart. Please Checkout..</Text>
                            </Snackbar>
                            <View style={styles.sticky_Btn} key={i}>

                                <View style={styles.bottomView1} >
                                    <Text style={[styles.textStyle, styles.color]}>₹{data.regular_price}</Text>
                                </View>
                                <View style={styles.bottomView} >
                                    <View style={styles.inner_bottomView}>
                                        <Button
                                            title='Add'
                                            onPress={() => CartHolder(data.description, data.product_id, data.image, data.sale_price, data.regular_price,)}
                                        />
                                    </View>
                                </View>
                            </View>
                        </SkeletonContainer>
                    )
                })}
                <ScrollView>
                    {data.map((data, index) => {
                        return (
                            <View key={index}>
                                <SkeletonContainer isLoading={loading} key={index}>
                                    <View style={styles.swiperRoot}>
                                        <Swiper dotStyle={{ marginTop: -70 }} activeDotStyle={{ marginTop: -70 }}>
                                            <View key={index}>
                                                <Image source={{ uri: data.image }} style={{ height: '100%', width: '100%' }} />
                                            </View>
                                        </Swiper>
                                        <View style={styles.shadow_Box} elevation={7}>
                                            <TouchableOpacity
                                                onPress={wishlistHandler}
                                                activeOpacity={0.5}
                                                style={styles.fabOne}
                                            >
                                                <Ionicons name={(heart) ? "heart-sharp" : "heart-outline"} size={22} style={{ alignSelf: 'center' }} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.shadow_Box1} elevation={7}>
                                            <TouchableOpacity
                                                onPress={() => console.log("share")}
                                                activeOpacity={0.5}
                                                style={styles.fabOne}
                                            >
                                                <Ionicons name="md-share-social-outline" size={22} style={{ alignSelf: 'center' }} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                    <View style={styles.CraggyTextRoot}>
                                        <View style={styles.textRoot}>
                                            <Text style={styles.craggyText}>{data.product_title}</Text>
                                        </View>
                                        <Snackbar
                                            visible={visible}
                                            onDismiss={onDismissSnackBar}
                                            duration={2000}
                                        >
                                            <Text >Item is already added to the cart, Please chechout...</Text>
                                        </Snackbar>
                                    </View>
                                </SkeletonContainer>

                                <View style={styles.Accordion_Root}>
                                    <View style={styles.description_heading}>
                                        <Text style={styles.titleStyle_description}>DESCRIPTION</Text>
                                    </View>

                                    <View style={styles.li_text_root} >
                                        <Text style={{ color: '#444444' }}>{"\u2B24" + " "}</Text>
                                        <Text style={styles.li_text}>{data.description}</Text>
                                    </View>

                                    <View style={pDs.baseLine} />
                                    <View style={styles.description_heading}>
                                        <Text style={styles.titleStyle_description}>KEY FEATURES</Text>
                                    </View>


                                    <View style={styles.li_text_root} >
                                        <Text style={{ color: '#444444' }}>{"\u2B24" + " "}</Text>
                                        <Text style={styles.li_text}>{data.key_feature}</Text>
                                    </View>

                                    <View style={pDs.baseLine} />

                                    <View style={styles.description_heading}>
                                        <Text style={styles.titleStyle_description}>HOW TO USE</Text>
                                    </View>


                                    <View style={styles.li_text_root}>
                                        <Text style={{ color: '#444444' }}>{"\u2B24" + " "}</Text>
                                        <Text style={styles.li_text}>{data.how_to_use}</Text>
                                    </View>

                                </View>

                                <View style={styles.review_outerRoot}>
                                    <View style={styles.review_innerRoot}>
                                        <View style={styles.reviews_root} >
                                            <Text style={styles.review_MainHeading}>REVIEWS</Text>
                                            <TouchableOpacity
                                                activeOpacity={0.8}
                                                onPress={() => navigation.navigate('write_review')}
                                                style={styles.write_review}
                                            >
                                                <Text style={styles.review_heading}> WRITE A REVIEW </Text>
                                            </TouchableOpacity>
                                        </View>

                                        <View style={styles.reviews_root}>
                                            <Text style={styles.reviews_length}>REVIEWS  ({newData.length - 1})</Text>
                                            <Text style={styles.review_Short}>SHORT:</Text>
                                        </View>

                                        <View style={[pDs.baseLine2, { height: 1, }]} />

                                        {newData.map((value, k) => {
                                            let ending = parseInt(page) * 3;
                                            let starting = ending - 2;
                                            if (k >= starting && k <= ending) {
                                                return (
                                                    <View style={{ marginTop: 30 }} key={k}>
                                                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                                                            <Text style={styles.review_Name}>{value.title}</Text>
                                                            <Text style={styles.review_Date}>{value.date}</Text>
                                                        </View>
                                                        <View style={{ flexDirection: 'row', marginLeft: -8 }} >
                                                            <Rating
                                                                readonly={true}
                                                                ratingCount={5}
                                                                startingValue={value.star}
                                                                imageSize={28}
                                                                style={{ padding: 10 }}

                                                            />
                                                            <Text style={styles.starReviws}>{value.star}</Text>
                                                        </View>
                                                        <Text style={styles.review_Title}>{value.title}</Text>
                                                        <Text style={styles.review_Review}>{value.description}</Text>
                                                        <View style={pDs.baseLine} />
                                                    </View>
                                                )
                                            }
                                        })}

                                        <TouchableOpacity
                                            activeOpacity={0.5}
                                            onPress={() => navigation.navigate('offers')}
                                            style={styles.allreview_root}
                                        >
                                            <Text style={{ paddingLeft: 20 }}>All {newData.length - 1} reviews </Text>
                                            <Ionicons
                                                name="chevron-forward-outline"
                                                color={'black'}
                                                size={25}
                                                style={{ marginRight: 20 }}
                                            />
                                        </TouchableOpacity>

                                        <View style={styles.youMayAlso}>
                                            <Heading title=' YOU MAY ALSO LIKE ' />
                                            <TouchableOpacity
                                                activeOpacity={0.6}
                                                onPress={() => console.log("first")}
                                                style={styles.viewLatestProduct}
                                            >
                                                <Text style={styles.latestProductText}>
                                                    View All
                                                </Text>
                                            </TouchableOpacity>
                                        </View>

                                        <View style={pDs.productsListRoot}>
                                            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                                                {bestSellingProduct.map((e, i) => {
                                                    return (
                                                        <TouchableOpacity
                                                            activeOpacity={0.8}
                                                            style={pDs.product109}
                                                            onPress={() => navigation.navigate('Product', e.sellingProduct_id)}
                                                            key={i}
                                                        >
                                                            <View style={pDs.imgRoot}>
                                                                <Image source={{ uri: e.images }} style={pDs.productImg} />
                                                            </View>
                                                            <View style={pDs.contentRoot}  >
                                                                <View style={pDs.textRoot1}>
                                                                    <Text style={pDs.contentText}>{e.description}</Text>
                                                                </View>

                                                                <View style={pDs.baseLine}></View>

                                                                <View style={pDs.priceRoot}>
                                                                    <Text style={pDs.price}>₹{e.price}</Text>
                                                                    <Text style={pDs.spaceRoot}>/ </Text>
                                                                    <Text style={pDs.oldprice}> ₹{e.oldprice}</Text>
                                                                </View>
                                                            </View>

                                                            <TouchableOpacity
                                                                activeOpacity={0.8}
                                                                style={pDs.buyNowButton1}
                                                                onPress={() => bestSellingHolder(e.description, e.sellingProduct_id, e.images, e.price, e.oldprice, e.quantity)}
                                                            >
                                                                <Text style={pDs.buttonText1}>BUY NOW</Text>
                                                            </TouchableOpacity>
                                                        </TouchableOpacity>
                                                    )
                                                })}
                                            </ScrollView>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView >
            </SafeAreaView>
        </View>
    )
}
export default ProductDetailScreen;
const styles = StyleSheet.create({
    safe_root: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
    },
    swiperRoot: {
        height: 400,
        position: 'relative'
    },
    buyNowButton: {
        height: 40,
        width: "85%",
        paddingTop: 5,
        borderRadius: 20,
        marginTop: 13,
        backgroundColor: '#C68625',
        alignSelf: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        paddingTop: 9,
        fontWeight: "700",
        fontFamily: 'Raleway700',
        fontSize: 10,
        lineHeight: 13

    },
    Accordion_Root: {
        alignContent: 'center',
        width: '90%',
        alignSelf: 'center'
    },

    CraggyTextRoot: {
        // height: 130,
        padding: 15,
        backgroundColor: '#fff',
        // borderTopLeftRadius: 50,
        // borderTopRightRadius: 50,
        marginTop: '-12%'
    },
    textRoot: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        width: "90%"
    },
    craggyText: {
        color: '#CC933B',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Raleway500',
        lineHeight: 22,
        letterSpacing: 0.5
    },

    productButtonRoot: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: '#333333',
        // borderWidth: 2,
        borderRadius: 15,
        height: 40,
        width: 55
    },
    blackButton: {
        backgroundColor: 'black',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 50,
        height: 20,
        width: 20,
        marginTop: 7,
        color: 'white'
    },
    whiteButton: {
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 50,
        height: 20,
        width: 20,
        marginTop: 7,
        color: 'black'
    },
    whiteText: {
        color: 'white',
        alignSelf: "center",
        marginTop: -2,
        fontWeight: '800'
    },
    blackText: {
        color: 'black',
        alignSelf: "center",
        marginTop: -2,

    },
    Textone: {
        fontWeight: '400',
        fontFamily: 'Lato400',
        fontSize: 12,
        lineHeight: 20,
        marginTop: 6,
    },
    description_heading: {
        height: 50,
        width: '100%',
        justifyContent: 'center'
    },
    titleStyle_description: {
        color: '#222222',
        fontFamily: 'Raleway500',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 17,
        padding: 10
    },
    li_text_root: {
        flexDirection: 'row',
        // width: '100%',
        alignSelf: 'center',
        // marginLeft: -60
    },
    li_text: {
        textAlign: "justify",
        marginLeft: 10,
        fontSize: 14,
        letterSpacing: 0.2,
        lineHeight: 27,
        fontFamily: 'Lato400',
        fontWeight: '400',
        width: '85%',
        color: '#444444'
    },
    review_MainHeading: {
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Raleway500',
        lineHeight: 19
    },
    review_outerRoot: {
        backgroundColor: '#ffffff',
        marginTop: 20,
        width: '100%',
        marginBottom: 30
    },
    review_innerRoot: {
        width: '90%',
        alignSelf: 'center',
    },
    reviews_root: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        // width: '90%',
        // alignSelf: 'center'
    },
    write_review: {
        borderWidth: 1,
        borderRadius: 4,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 35,
        paddingRight: 35,
        borderColor: '#333333'
    },
    reviews_length: {
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'Raleway600',
        lineHeight: 17
    },
    review_heading: {
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Lato400'
    },
    review_Short: {
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'Lato400',
        lineHeight: 15
    },
    BestSellingRoot: {
        height: 'auto',
        backgroundColor: '#fff'
    },
    sellingTitleRoot: {
        height: 330,
        width: 465,
        marginLeft: 15,
        marginTop: 26
    },
    allreview_root: {
        height: 40,
        width: '100%',
        borderWidth: 0.4,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 4
    },
    youMayAlso: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 10
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
    },
    review_Name: {
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Raleway400',
        lineHeight: 19,
    },
    review_Date: {
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'Lato400',
        lineHeight: 15
    },
    review_Title: {
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'Raleway700',
        lineHeight: 17,
        marginTop: 2
    },
    review_Review: {
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Lato400',
        lineHeight: 20,
        marginTop: 5,
        textAlign: 'justify'
    },
    starReviws: {
        marginTop: 17,
        fontSize: 14,
        lineHeight: 17,
        fontWeight: '700',
        fontFamily: 'Lato700'
    },
    boxStyle: {
        borderWidth: 1,
        marginLeft: -10,
        borderColor: 'transparent',
    },
    paginationStyle: {
        marginTop: 15,
        alignSelf: 'center'
    },
    shadow_Box: {
        flex: 1,
        justifyContent: 'center',
        height: 50,
        width: 50,
        borderRadius: 100,
        // backgroundColor: '#171717',
        // opacity: 0.5,
        position: 'absolute',
        bottom: '15%',
        left: '8%'
    },
    shadow_Box1: {
        flex: 1,
        justifyContent: 'center',
        height: 50,
        width: 50,
        borderRadius: 100,
        // backgroundColor: '#171717',
        // opacity: 0.5,
        position: 'absolute',
        bottom: '15%',
        right: '8%'
    },
    fabOne: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        height: 35,
        width: 35,
        borderRadius: 100,
        backgroundColor: '#fff',
        position: 'absolute',
        // bottom: '15%',
        // left: '8%'
    },
    // fabOne1: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     height: 40,
    //     width: 40,
    //     borderRadius: 100,
    //     backgroundColor: '#7aebda',
    //     position: 'absolute',
    //     // bottom: '15%',
    //     // right: '8%',
    // },
    Snackbar_style: {
        width: "65%",
        height: 55,
        alignSelf: 'center',
        position: 'absolute',
        zIndex: 3,
        bottom: 250,
        opacity: 0.7
    },
    Snackbar_text: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 15,
        textAlign: 'center'
    },
    sticky_Btn: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        zIndex: 2,
        backgroundColor: '#fff',

    },
    bottomView: {
        height: 60,
        width: '50%',
        justifyContent: 'center',
        // backgroundColor: '#FF9800',
        // alignItems: 'center',
        // position: 'absolute',
        // bottom: 0,
        // zIndex: 99,
    },
    inner_bottomView: {
        height: 50,
        width: '90%',
        justifyContent: 'center'
    },
    add_btn: {
        backgroundColor: '#blue',
        alignSelf: 'center',
    },
    bottomView1: {
        height: 60,
        width: '50%',
        // borderWidth: 1,
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        // position: 'absolute',
        // bottom: 0,
        // zIndex: 99,
    },
    textStyle: {
        color: '#000',
        fontSize: 22
    },
    // color: {
    //     color: '#000'
    // }

})