import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import Swiper from 'react-native-swiper'
import axios from 'axios'
import Heading from '../components/Heading';
import { Snackbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons'
import { bestSellingProductStyle as bsP } from '../styles/bestSellingProductStyle'
import { Rating, } from 'react-native-ratings';
import { useSelector, useDispatch } from 'react-redux'
import { submitActions } from '../store/dataSlice'
import { SkeletonContainer } from 'react-native-dynamic-skeletons';
import ImageView from "react-native-image-viewing"

const ProductDetailScreen = ({ navigation, route }) => {
    let bs = "BestSellers";
    const dispatch = useDispatch();
    const newData = useSelector(state => state.reviewData.review);
    const cartData = useSelector(state => state.cartData.cart);
    const [visible, setVisible] = useState(false);
    const [star, setStar] = useState('')
    const [page, setPage] = useState('1')
    const [bestSelData, setBestSeldata] = useState([])
    const [singleProduct, setSingleProduct] = useState([])
    const [isVisible, setIsVisible] = useState(false);
    // console.log("wwwwwww", data)
    const [loading, setLoading] = useState(true);
    const [heart, setHeart] = useState(false);
    const id = route.params;
    // const [test, setTest] = useState(false);
    // console.log("tessssstttt", storeData,)
    // const idd = route.params;
    useEffect(() => {
        Single_Product()
        bestSellingApi()
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
            setSingleProduct(res.data)
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

    // const onToggleSnackBar = () => {
    //     setVisible(!visible);
    // }
    const onDismissSnackBar = () => setVisible(false);
    const subOne = () => {
        if (one <= 1) {
        } else {
            setOne(one - 1)
        }
    }

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
                navigation.navigate("Cart");
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
            navigation.navigate("Cart");
        }

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
                setBestSeldata(res.data.response)
                // setTimeout(() => {
                //     setLoading(false)
                // },);
            }
        })
    }


    const wishlistHandler = () => {
        setHeart(!heart);
    }

    return (
        <View>
            <SafeAreaView style={styles.safe_root}>
                <Snackbar
                    visible={visible}
                    onDismiss={onDismissSnackBar}
                    duration={2000}
                    style={styles.Snackbar_style}
                >
                    <Text style={styles.Snackbar_text}>Item is already added to the cart. Please Checkout..</Text>
                </Snackbar>
                {singleProduct.map((data, i) => {
                    return (
                        <SkeletonContainer isLoading={loading} key={i}>
                            <View style={styles.sticky_Btn} key={i}>
                                <View style={styles.bottomView1} >
                                    <Text style={[styles.textStyle, styles.color]}>₹{data.regular_price}</Text>
                                </View>
                                <View style={styles.bottomView} >
                                    <View style={styles.inner_bottomView}>
                                        <Button
                                            title='Add'
                                            onPress={() => CartHolder(data.product_title, data.product_id, data.image, data.sale_price, data.regular_price,)}
                                        />
                                    </View>
                                </View>
                            </View>
                        </SkeletonContainer>
                    )
                })}
                <ScrollView>
                    {singleProduct.map((data, i) => {
                        // console.log("gallery_images", data)
                        return (
                            <View key={i}>
                                <View style={styles.swiperRoot}>
                                    <Swiper dotStyle={{ marginTop: -70 }} activeDotStyle={{ marginTop: -70 }} style={styles.wrapper} >
                                        {data.gallery_images == "" ?
                                            <View key={i}>
                                                <SkeletonContainer isLoading={loading} key={i}>
                                                    <View>
                                                        <Image source={{ uri: data.image }} style={{ height: '100%', width: '100%' }} />
                                                    </View>
                                                </SkeletonContainer>
                                            </View>
                                            :
                                            data.gallery_images.map((i, e) => {
                                                return (
                                                    <View key={e}>
                                                        <SkeletonContainer isLoading={loading} key={e}>
                                                            <TouchableOpacity onPress={() => setIsVisible(true)}>
                                                                <Image source={{ uri: i.uri }} style={{ height: '100%', width: '100%' }} />
                                                            </TouchableOpacity>
                                                        </SkeletonContainer>
                                                    </View>
                                                )
                                            })}
                                    </Swiper>
                                    <ImageView
                                        images={data.gallery_images}
                                        imageIndex={0}
                                        visible={isVisible}
                                        onRequestClose={() => setIsVisible(false)}
                                    />
                                    <SkeletonContainer isLoading={loading} >
                                        <View style={styles.shadow_Box} elevation={7}>
                                            <TouchableOpacity
                                                onPress={wishlistHandler}
                                                activeOpacity={0.5}
                                                style={styles.fabOne}
                                            >
                                                <Ionicons name={(heart) ? "heart-sharp" : "heart-outline"} size={22} style={{ alignSelf: 'center' }} />
                                            </TouchableOpacity>
                                        </View>
                                    </SkeletonContainer>
                                    <SkeletonContainer isLoading={loading} >
                                        <View style={styles.shadow_Box1} elevation={7}>
                                            <TouchableOpacity
                                                onPress={() => console.log("share")}
                                                activeOpacity={0.5}
                                                style={styles.fabOne}
                                            >
                                                <Ionicons name="md-share-social-outline" size={22} style={{ alignSelf: 'center' }} />
                                            </TouchableOpacity>
                                        </View>
                                    </SkeletonContainer>
                                </View>


                                <View style={styles.CraggyTextRoot}>
                                    <SkeletonContainer isLoading={loading} key={i} >
                                        <View style={styles.textRoot}>
                                            <Text style={styles.craggyText}>{data.product_title}</Text>
                                        </View>
                                    </SkeletonContainer>
                                </View>

                                <View style={styles.Accordion_Root}>
                                    <View style={styles.description_heading}>
                                        <SkeletonContainer isLoading={loading} >
                                            <Text style={styles.titleStyle_description}>DESCRIPTION</Text>
                                        </SkeletonContainer>
                                    </View>
                                    <SkeletonContainer isLoading={loading}  >
                                        <View style={styles.li_text_root} >
                                            <Text style={{ color: '#444444' }}>{"\u2B24" + " "}</Text>

                                            <Text style={styles.li_text}>{data.description}</Text>
                                        </View>
                                    </SkeletonContainer>

                                    <View style={styles.baseLine} />
                                    <View style={styles.description_heading}>
                                        <SkeletonContainer isLoading={loading} >
                                            <Text style={styles.titleStyle_description}>KEY FEATURES</Text>
                                        </SkeletonContainer>
                                    </View>

                                    <SkeletonContainer isLoading={loading}  >
                                        <View style={styles.li_text_root} >
                                            <Text style={{ color: '#444444' }}>{"\u2B24" + " "}</Text>
                                            <Text style={styles.li_text}>{data.key_feature}</Text>
                                        </View>
                                    </SkeletonContainer>

                                    <View style={styles.baseLine} />

                                    <View style={styles.description_heading}>
                                        <SkeletonContainer isLoading={loading} >
                                            <Text style={styles.titleStyle_description}>HOW TO USE</Text>
                                        </SkeletonContainer>
                                    </View>

                                    <SkeletonContainer isLoading={loading} >
                                        <View style={styles.li_text_root}>
                                            <Text style={{ color: '#444444' }}>{"\u2B24" + " "}</Text>
                                            <Text style={styles.li_text}>{data.how_to_use}</Text>
                                        </View>
                                    </SkeletonContainer>

                                </View>


                                <View style={styles.review_outerRoot}>
                                    <View style={styles.review_innerRoot}>
                                        <SkeletonContainer isLoading={loading} >
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
                                        </SkeletonContainer>
                                        <SkeletonContainer isLoading={loading} >
                                            <View style={styles.reviews_root}>
                                                <Text style={styles.reviews_length}>REVIEWS  ({newData.length - 1})</Text>
                                                <Text style={styles.review_Short}>SHORT:</Text>
                                            </View>
                                        </SkeletonContainer>

                                        <View style={[styles.baseLine2, { height: 1, }]} />

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
                                                        <View style={styles.baseLine} />
                                                    </View>
                                                )
                                            }
                                        })}
                                        <SkeletonContainer isLoading={loading} >
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
                                        </SkeletonContainer>
                                        <SkeletonContainer isLoading={loading} >

                                            <View style={styles.youMayAlso}>
                                                <Heading title=' YOU MAY ALSO LIKE ' />
                                                <TouchableOpacity
                                                    activeOpacity={0.6}
                                                    onPress={() => { navigation.navigate('ProductListing', { name: bs }) }}
                                                    // onPress={() => console.log("first")}
                                                    style={styles.viewLatestProduct}
                                                >
                                                    <Text style={styles.latestProductText}>
                                                        View All
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </SkeletonContainer>
                                        <SkeletonContainer isLoading={loading} >

                                            <View style={styles.productsListRoot}>
                                                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                                                    {bestSelData.map((e, i) => {
                                                        return (
                                                            <TouchableOpacity
                                                                // activeOpacity={0.8}
                                                                style={bsP.touchable}
                                                                onPress={() => navigation.navigate('Product', e.product_id)}
                                                                key={i}
                                                            >
                                                                <View style={bsP.imgRoot} >
                                                                    <Image source={{ uri: e.image }} style={bsP.productImg} />
                                                                </View>

                                                                <View style={bsP.contentRoot}>
                                                                    <View style={bsP.descriptionRoot}>
                                                                        <Text style={bsP.descriptionText}>{e.product_title}</Text>
                                                                    </View>

                                                                    <View style={styles.baseLine}></View>

                                                                    <View style={bsP.priceRoot}>
                                                                        <Text style={bsP.price}>₹{e.sale_price}</Text>
                                                                        <Text style={bsP.spaceRoot}>/ </Text>
                                                                        <Text style={bsP.oldprice}>₹{e.regular_price}</Text>
                                                                    </View>
                                                                </View>

                                                                {/* Buy Now Button  */}
                                                                <TouchableOpacity
                                                                    activeOpacity={0.8}
                                                                    style={bsP.buyNowButton}
                                                                    onPress={() => CartHolder(e.product_title, e.product_id, e.image, e.sale_price, e.regular_price)}
                                                                >
                                                                    <Text style={bsP.buttonText}>BUY NOW</Text>
                                                                </TouchableOpacity>

                                                            </TouchableOpacity>
                                                        )
                                                    })}

                                                </ScrollView>
                                            </View>
                                        </SkeletonContainer>
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
    wrapper: {},
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
        width: '40%',
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
    baseLine2: {
        height: 1,
        width: '100%',
        alignSelf: 'center',
        backgroundColor: '#C4C4C4',
        marginTop: 20
    },
    baseLine: {
        height: 1,
        // width: '100%',
        // alignSelf: 'center',
        backgroundColor: '#C4C4C4',
        marginTop: 5
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
    productsListRoot: {
        height: 252,
        width: '95%',
        alignSelf: 'center',
        marginBottom: "10%"
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