import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import Swiper from 'react-native-swiper'
import { List, Snackbar } from 'react-native-paper';
import BackButton from '../components/BackButton';
import { Ionicons } from '@expo/vector-icons'
import Heading from '../components/Heading';
import { productDetailsStyle as pDs } from '../styles/productdetailsStyle';
import { Rating, } from 'react-native-ratings';
import { useSelector, useDispatch } from 'react-redux'
import { submitActions } from '../store/dataSlice'
// const productImg = require('../../Data/productDetail.json')
const bestSellingProduct = require('../../Data/bestSellingProduct.json')
// const productDes = require('../../Data/productDescription.json')
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

    useEffect(() => {
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
    }, [id])

    const ratingCompleted = (rating) => {
        setStar(rating);
    }

    const [one, setOne] = useState(1);
    const [expanded, setExpanded] = useState("1");

    const handlePress = (gg) => {
        setExpanded(gg);
    };
    const addOne = () => {
        setOne(one + 1)
    }
    const subOne = () => {
        if (one <= 1) {
        } else {
            setOne(one - 1)
        }
    }

    const CartHolder = (description, product_id, image, regular_price, sale_price) => {
        let Data = [...storeData, {
            description: description,
            categoriesDetail_id: product_id,
            images: image,
            oldprice: regular_price,
            price: sale_price,
            quantity: 1
        }];
        dispatch(submitActions.price(
            {
                cart: Data
            }
        ));
        onToggleSnackBar();
        // navigation.navigate("Cart", product_id);
    }
    const onToggleSnackBar = () => {
        setVisible(!visible)
    }
    const onDismissSnackBar = () => {
        setVisible(false)
    }
    const wishlistHandler = () => {
        setHeart(!heart);
    }


    return (
        <View>
            <SafeAreaView style={styles.safe_root}>

                <ScrollView
                // onScroll={() => navigation.setOptions({ headerTitle: 'updated' })}
                // onScrollEndDrag={() => navigation.setOptions({ headerTitle: 'done' })}
                >
                    {data.map((data, index) => {
                        return (

                            <View>
                                {/* <View style={{ position: 'absolute', zIndex: 1, marginLeft: '5%', }}>
                                    <BackButton goBack={navigation.goBack} Color={'#E2AB57'} />
                                </View> */}
                                <SkeletonContainer isLoading={loading} key={index}>
                                    <View style={styles.swiperRoot}>
                                        <Swiper dotStyle={{ marginTop: -70 }} activeDotStyle={{ marginTop: -70 }}>
                                            <View key={index}>
                                                <Image source={{ uri: data.image }} style={{ height: '100%', width: '100%' }} />
                                            </View>
                                        </Swiper>
                                    </View>

                                    <View style={styles.CraggyTextRoot}>
                                        <View style={styles.textRoot}>
                                            <Text style={styles.craggyText}>{data.product_title}</Text>
                                        </View>
                                    </View>
                                </SkeletonContainer>
                                <View style={{ width: '100%' }}>
                                    <View style={pDs.productRoot}>
                                        <SkeletonContainer isLoading={loading} key={index}>
                                            <View style={pDs.priceRoot}>
                                                <Text style={pDs.price}>₹{data.sale_price}</Text>
                                                <Text style={pDs.spaceRoot}>/ </Text>
                                                <Text style={pDs.oldprice}>₹{data.regular_price}</Text>
                                            </View>

                                            <View>
                                                <TouchableOpacity
                                                    onPress={wishlistHandler}
                                                    activeOpacity={0.5}
                                                >
                                                    <Ionicons name={(heart) ? "heart-sharp" : "heart-outline"} size={25} />
                                                </TouchableOpacity>
                                            </View>
                                        </SkeletonContainer>

                                        {/* <View style={styles.productButtonRoot}>
                                                    <TouchableOpacity onPress={subOne} style={(one < 1) ? styles.blackButton : styles.whiteButton} >
                                                        <Text style={styles.blackText}>-</Text>
                                                    </TouchableOpacity>
                                                    <Text style={styles.Textone}>{one < 1 ? 1 : one}</Text>
                                                    <TouchableOpacity onPress={addOne} style={(one >= 1) ? styles.blackButton : styles.whiteButton} >
                                                        <Text style={(one >= 1) ? styles.whiteText : styles.blackText} >+</Text>
                                                    </TouchableOpacity>
                                                </View> */}
                                    </View>
                                    <View>
                                        <SkeletonContainer isLoading={loading}>
                                            <TouchableOpacity
                                                activeOpacity={0.8}
                                                onPress={() => CartHolder(data.description, data.product_id, data.image, data.sale_price, data.regular_price,)}
                                                style={styles.buyNowButton}
                                            >
                                                <Text style={styles.buttonText}>ADD TO CART </Text>
                                            </TouchableOpacity>
                                        </SkeletonContainer>
                                        <Snackbar
                                            visible={visible}
                                            onDismiss={onDismissSnackBar}
                                            duration={2000}
                                            wrapperStyle={{ maxWidth: 170, alignSelf: 'center', }}
                                        >
                                            Item Added to Cart
                                        </Snackbar>
                                    </View>
                                </View>

                                <View style={pDs.baseLine2} />

                                <View style={styles.Accordion_Root}>
                                    <List.Section >
                                        <List.Accordion
                                            id='1'
                                            title="DESCRIPTION"
                                            titleStyle={styles.titleStyle_description}
                                            expanded={((expanded === "1") ? true : false)}
                                            onPress={() => handlePress("1")}
                                            right={() => <List.Icon icon={(expanded === "1") ? 'minus' : 'plus'} />}>
                                            <View style={styles.li_text_root} >
                                                <Text style={{ color: '#444444' }}>{"\u2B24" + " "}</Text>
                                                <Text style={styles.li_text}>{data.description}</Text>
                                            </View>
                                        </List.Accordion>

                                        <View style={pDs.baseLine} />

                                        <List.Accordion
                                            id='2'
                                            title="KEY FEATURES"
                                            titleStyle={styles.titleStyle_description}
                                            expanded={(expanded === "2") ? true : false}
                                            onPress={() => handlePress("2")}
                                            right={() => <List.Icon icon={(expanded === "2") ? 'minus' : 'plus'} />}>
                                            <View style={styles.li_text_root} >
                                                <Text style={{ color: '#444444' }}>{"\u2B24" + " "}</Text>
                                                <Text style={styles.li_text}>{data.key_feature}</Text>
                                            </View>
                                        </List.Accordion>

                                        <View style={pDs.baseLine} />

                                        <List.Accordion
                                            id='3'
                                            title="HOW TO USE"
                                            titleStyle={styles.titleStyle_description}
                                            expanded={(expanded === "3") ? true : false}
                                            onPress={() => handlePress("3")}
                                            right={() => <List.Icon icon={(expanded === "3") ? 'minus' : 'plus'} />}>
                                            <View style={styles.li_text_root}>
                                                <Text style={{ color: '#444444' }}>{"\u2B24" + " "}</Text>
                                                <Text style={styles.li_text}>{data.how_to_use}</Text>
                                            </View>
                                        </List.Accordion>
                                        <View style={pDs.baseLine} />
                                    </List.Section>
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
                                            activeOpacity={0.8}
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
                                                activeOpacity={0.8}
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
                                                        <TouchableOpacity style={pDs.product109} key={i} onPress={() => navigation.navigate('Product', e.sellingProduct_id)} >
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

                                                            {/* {/ Buy Now Button  /} */}
                                                            <TouchableOpacity style={pDs.buyNowButton1}
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

export default ProductDetailScreen

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
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginTop: '-12%'
    },
    textRoot: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        width: "90%"
    },
    craggyText: {
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
    titleStyle_description: {
        color: '#222222',
        fontFamily: 'Raleway500',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 17
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
    }

})