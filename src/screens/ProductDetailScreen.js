import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import Swiper from 'react-native-swiper'
import axios from 'axios'
import Heading from '../components/Heading';
import { Snackbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons'
import { Rating, } from 'react-native-ratings';
import { useSelector, useDispatch } from 'react-redux'
import { submitActions } from '../store/dataSlice'
import { SkeletonContainer } from 'react-native-dynamic-skeletons';
import ImageView from "react-native-image-viewing"
import { useStyles } from '../styles/responsiveStyle'
import { useStyles as h_Style } from '../styles/homeResponsive'
import { CONSUMER_KEY, BEST_SELLING_API, SINGLE_PRODUCT_API } from "@env";

const ProductDetailScreen = ({ navigation, route }) => {
    let bs = "BestSellers";
    const dispatch = useDispatch();
    const Pd_Style = useStyles();
    const home_Style = h_Style()
    const reviewData = useSelector(state => state.reviewData.review);
    // console.log("gggggg", reviewData[5].title)
    const cartData = useSelector(state => state.cartData.cart);
    const [visible, setVisible] = useState(false);
    const [star, setStar] = useState('')
    const [page, setPage] = useState('1')
    const [bestSelData, setBestSeldata] = useState([])
    const [singleData, setSingleData] = useState([])
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

    // useEffect(() => {
    //     const handleDeepLink = (url) => {
    //         console.log('url', url)
    //         if (url && url.startsWith('myapp://HomeScreen')) {
    //             navigation.navigate('HomeScreen');
    //         }
    //     };

    //     Linking.addEventListener('url', ({ url }) => handleDeepLink(url));

    //     return () => {
    //         // Linking.removeEventListener('url', ({ url }) => handleDeepLink(url));
    //     };
    // }, []);

    const Single_Product = () => {
        axios.get(
            SINGLE_PRODUCT_API,
            {
                params: {
                    product_id: id
                },
                headers: {
                    'Content-Type': 'application/json',
                    'consumer_key': CONSUMER_KEY,
                }
            }
        ).then((res) => {
            setSingleData(res.data)
            setTimeout(() => {
                setLoading(false);
            },);
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
            // console.log("resss", res.data)
            if (res.data.status = "success") {
                setBestSeldata(res.data.response)
                // setTimeout(() => {
                //     setLoading(false)
                // },);
            }
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
                    price: regular_price,
                    oldprice: sale_price,
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
                price: regular_price,
                oldprice: sale_price,
                quantity: 1
            }];
            dispatch(submitActions.price({ cart: Data }));
            navigation.navigate("cart");
        }

    }

    const wishlistHandler = () => {
        // console.log("iiiddddddd", id)
        setHeart(!heart);
        // navigation.navigate('wishlist', id)
    }

    return (
        <View>
            <SafeAreaView style={Pd_Style.safe_root}>

                <ScrollView>
                    {singleData.map((data, i) => {
                        // console.log("gallery_images", data)
                        return (
                            <View key={i}>
                                <View style={Pd_Style.product_swiperRoot}>
                                    <Swiper dotStyle={{ marginTop: -70 }} activeDotStyle={{ marginTop: -70 }} style={Pd_Style.wrapper} >
                                        {data.gallery_images == "" ?
                                            <View key={i}>
                                                <SkeletonContainer isLoading={loading} key={i}>
                                                    <View>
                                                        <Image source={{ uri: data.image }} style={Pd_Style.swiper_image} />
                                                    </View>
                                                </SkeletonContainer>

                                            </View>
                                            :
                                            data.gallery_images.map((i, e) => {
                                                return (
                                                    <View key={e}>
                                                        <SkeletonContainer isLoading={loading} key={e}>
                                                            <TouchableOpacity onPress={() => setIsVisible(true)}>
                                                                <Image source={{ uri: i.uri }} style={Pd_Style.swiper_image} />
                                                            </TouchableOpacity>
                                                        </SkeletonContainer>
                                                    </View>
                                                )
                                            })}
                                    </Swiper>

                                    {/* <ImageView
                                        images={data.gallery_images}
                                        imageIndex={i}
                                        visible={isVisible}
                                        onRequestClose={() => setIsVisible(false)}
                                    /> */}

                                    <SkeletonContainer isLoading={loading} >
                                        <View style={Pd_Style.shadow_Box} elevation={7}>
                                            <TouchableOpacity
                                                onPress={wishlistHandler}
                                                // onPress={() => wishlistHandler(data.product_id)}
                                                activeOpacity={0.8}
                                                style={Pd_Style.fabOne}
                                            >
                                                <Ionicons name={(heart) ? "heart-sharp" : "heart-outline"} size={22} style={{ alignSelf: 'center' }} />
                                            </TouchableOpacity>
                                        </View>
                                    </SkeletonContainer>
                                    <SkeletonContainer isLoading={loading} >
                                        <View style={Pd_Style.shadow_Box1} elevation={7}>
                                            <TouchableOpacity
                                                onPress={() => console.log("share")}
                                                activeOpacity={0.5}
                                                style={Pd_Style.fabOne}
                                            >
                                                <Ionicons name="md-share-social-outline" size={22} style={{ alignSelf: 'center' }} />
                                            </TouchableOpacity>
                                        </View>
                                    </SkeletonContainer>
                                </View>


                                <View style={Pd_Style.product_Title_Root}>
                                    <SkeletonContainer isLoading={loading} key={i} >
                                        <View style={Pd_Style.Title_text_Root}>
                                            <Text style={Pd_Style.Title_craggy_Text}>{data.product_title}</Text>
                                        </View>
                                    </SkeletonContainer>
                                </View>

                                <View style={Pd_Style.Accordion_Root}>
                                    <View style={Pd_Style.description_heading}>
                                        <SkeletonContainer isLoading={loading} >
                                            <Text style={Pd_Style.titleStyle_description}>DESCRIPTION</Text>
                                        </SkeletonContainer>
                                    </View>
                                    <SkeletonContainer isLoading={loading}  >
                                        <View style={Pd_Style.li_text_root} >
                                            <Text style={{ color: '#444444' }}>{"\u2B24" + " "}</Text>

                                            <Text style={Pd_Style.li_text}>{data.description}</Text>
                                        </View>
                                    </SkeletonContainer>

                                    <View style={Pd_Style.ProductDetail_baseLine} />
                                    <View style={Pd_Style.description_heading}>
                                        <SkeletonContainer isLoading={loading} >
                                            <Text style={Pd_Style.titleStyle_description}>KEY FEATURES</Text>
                                        </SkeletonContainer>
                                    </View>

                                    <SkeletonContainer isLoading={loading}  >
                                        <View style={Pd_Style.li_text_root} >
                                            <Text style={{ color: '#444444' }}>{"\u2B24" + " "}</Text>
                                            <Text style={Pd_Style.li_text}>{data.key_feature}</Text>
                                        </View>
                                    </SkeletonContainer>

                                    <View style={Pd_Style.ProductDetail_baseLine} />

                                    <View style={Pd_Style.description_heading}>
                                        <SkeletonContainer isLoading={loading} >
                                            <Text style={Pd_Style.titleStyle_description}>HOW TO USE</Text>
                                        </SkeletonContainer>
                                    </View>

                                    <SkeletonContainer isLoading={loading} >
                                        <View style={Pd_Style.li_text_root}>
                                            <Text style={{ color: '#444444' }}>{"\u2B24" + " "}</Text>
                                            <Text style={Pd_Style.li_text}>{data.how_to_use}</Text>
                                        </View>
                                    </SkeletonContainer>

                                </View>


                                <View style={Pd_Style.review_outerRoot}>
                                    <View style={Pd_Style.review_innerRoot}>
                                        <SkeletonContainer isLoading={loading} >
                                            <View style={Pd_Style.reviews_root} key={i} >
                                                <Text style={Pd_Style.review_MainHeading}>REVIEWS</Text>
                                                <TouchableOpacity
                                                    activeOpacity={0.8}
                                                    onPress={() => navigation.navigate('writeReview')}
                                                    style={Pd_Style.write_review}
                                                >
                                                    <Text style={Pd_Style.review_heading}> WRITE A REVIEW </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </SkeletonContainer>
                                        <SkeletonContainer isLoading={loading} >
                                            <View style={Pd_Style.reviews_root} key={i}>
                                                <Text style={Pd_Style.reviews_length}>REVIEWS  ({reviewData.length - 1})</Text>
                                                <Text style={Pd_Style.review_Short}>SHORT:</Text>
                                            </View>
                                        </SkeletonContainer>

                                        <View style={[Pd_Style.ProductDetail_baseLine2, { height: 1, }]} />

                                        {reviewData.map((value, k) => {
                                            let ending = parseInt(page) * 3;
                                            let starting = ending - 2;
                                            if (k >= starting && k <= ending) {
                                                return (
                                                    <View style={{ marginTop: 30 }} key={k}>
                                                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                                                            <Text style={Pd_Style.review_Name}>{value.title}</Text>
                                                            <Text style={Pd_Style.review_Date}>{value.date}</Text>
                                                        </View>
                                                        <View style={{ flexDirection: 'row', marginLeft: -8 }} >
                                                            <Rating
                                                                readonly={true}
                                                                ratingCount={5}
                                                                startingValue={value.star}
                                                                imageSize={28}
                                                                style={{ padding: 10 }}

                                                            />
                                                            {/* <Text style={styles.starReviws}>{value.star}</Text> */}
                                                        </View>
                                                        {/* <Text style={styles.review_Title}>{value.title}</Text> */}
                                                        <Text style={Pd_Style.review_Review}>{value.description}</Text>
                                                        <View style={Pd_Style.ProductDetail_baseLine} />
                                                    </View>
                                                )
                                            }
                                        })}
                                        <SkeletonContainer isLoading={loading} >
                                            <TouchableOpacity
                                                activeOpacity={0.5}
                                                onPress={() => navigation.navigate('reviews')}
                                                style={Pd_Style.allreview_root}
                                                key={i}
                                            >
                                                <Text style={Pd_Style.all_review_text}>All {reviewData.length - 1} reviews </Text>
                                                <Ionicons
                                                    name="chevron-forward-outline"
                                                    color={'black'}
                                                    size={24}
                                                    style={{ marginRight: 20 }}
                                                />
                                            </TouchableOpacity>
                                        </SkeletonContainer>
                                        <SkeletonContainer isLoading={loading} >

                                            <View style={Pd_Style.youMayAlso}>
                                                <Heading title=' YOU MAY ALSO LIKE ' />
                                                <TouchableOpacity
                                                    activeOpacity={0.6}
                                                    onPress={() => { navigation.navigate('productListing', { name: bs }) }}
                                                    // onPress={() => console.log("first")}
                                                    style={Pd_Style.product_viewLatest_Product}
                                                >
                                                    <Text style={Pd_Style.latestProduct_Text}>
                                                        View All
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </SkeletonContainer>
                                        <SkeletonContainer isLoading={loading} >

                                            <View style={Pd_Style.products_Details_ListRoot}>
                                                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                                                    {bestSelData.map((e, i) => {
                                                        const rp = e.regular_price;
                                                        const sp = e.sale_price;
                                                        const regular_price = Number(rp).toFixed(2);
                                                        const sale_price = Number(sp).toFixed(2);
                                                        return (
                                                            <TouchableOpacity
                                                                activeOpacity={0.8}
                                                                style={home_Style.best_touchable}
                                                                onPress={() => navigation.navigate('productDetail', e.product_id)}
                                                                key={i}
                                                            >
                                                                <View style={home_Style.imgRoot} >
                                                                    <Image source={{ uri: e.image }} style={home_Style.productImg} />
                                                                </View>

                                                                <View style={home_Style.contentRoot}>
                                                                    <View style={home_Style.descriptionRoot}>
                                                                        <Text style={home_Style.descriptionText}>{e.product_title}</Text>
                                                                    </View>

                                                                    <View style={Pd_Style.ProductDetail_baseLine}></View>

                                                                    <View style={home_Style.priceRoot}>
                                                                        <Text style={home_Style.oldprice}>₹{regular_price}</Text>
                                                                        <Text style={home_Style.spaceRoot}></Text>
                                                                        <Text style={home_Style.price}>₹{sale_price}</Text>
                                                                    </View>
                                                                </View>

                                                                {/* Buy Now Button  */}
                                                                <TouchableOpacity
                                                                    activeOpacity={0.8}
                                                                    style={home_Style.buyNowButton}
                                                                    onPress={() => CartHolder(e.product_title, e.product_id, e.image, e.sale_price, e.regular_price)}
                                                                >
                                                                    <Text style={home_Style.buttonText}>BUY NOW</Text>
                                                                </TouchableOpacity>

                                                            </TouchableOpacity>
                                                        )
                                                    })}

                                                </ScrollView>
                                            </View>
                                        </SkeletonContainer>
                                    </View>
                                </View>
                                <ImageView
                                    images={data.gallery_images}
                                    imageIndex={i}
                                    visible={isVisible}
                                    onRequestClose={() => setIsVisible(false)}
                                />
                            </View>

                        )

                    })}
                </ScrollView >
                <Snackbar
                    visible={visible}
                    onDismiss={onDismissSnackBar}
                    duration={2000}
                    style={Pd_Style.product_Snackbar_style}
                >
                    <Text style={Pd_Style.product_Snackbar_text}>Item is already added to the cart. Please Checkout..</Text>
                </Snackbar>
                {singleData.map((data, i) => {
                    const sp = data.sale_price;
                    // const rp = data.regular_price;
                    // const regular_price = Number(rp).toFixed(2);
                    const sale_price = Number(sp).toFixed(2);
                    return (
                        <SkeletonContainer isLoading={loading} key={i}>
                            <View style={Pd_Style.sticky_Btn} key={i}>
                                <View style={Pd_Style.bottomView1} >
                                    <Text style={[Pd_Style.textStyle,]}>₹{sale_price}</Text>
                                </View>
                                <View style={Pd_Style.bottomView} >
                                    <View style={Pd_Style.inner_bottomView}>
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
            </SafeAreaView>

        </View>
    )
}
export default ProductDetailScreen;
const styles = StyleSheet.create({
    // safe_root: {
    //     height: '100%',
    //     width: '100%',
    //     alignSelf: 'center',
    // },
    // wrapper: {},
    // swiperRoot: {
    //     height: 400,
    //     position: 'relative'
    // },
    // buyNowButton: {
    //     height: 40,
    //     width: "85%",
    //     paddingTop: 5,
    //     borderRadius: 20,
    //     marginTop: 13,
    //     backgroundColor: '#C68625',
    //     alignSelf: 'center',
    //     alignItems: 'center',
    // },
    // buttonText: {
    //     color: 'white',
    //     textAlign: 'center',
    //     paddingTop: 9,
    //     fontWeight: "700",
    //     fontFamily: 'Raleway',
    //     fontSize: 10,
    //     lineHeight: 13

    // },
    // Accordion_Root: {
    //     alignContent: 'center',
    //     width: '90%',
    //     alignSelf: 'center'
    // },

    // CraggyTextRoot: {
    //     // height: 130,
    //     padding: 15,
    //     backgroundColor: '#fff',
    //     // borderTopLeftRadius: 50,
    //     // borderTopRightRadius: 50,
    //     marginTop: '-12%'
    // },
    // textRoot: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignSelf: 'center',
    //     width: "90%"
    // },
    // craggyText: {
    //     color: '#CC933B',
    //     fontSize: 16,
    //     fontWeight: '600',
    //     fontFamily: 'Raleway',
    //     lineHeight: 22,
    //     letterSpacing: 0.5
    // },

    // productButtonRoot: {
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     borderColor: '#333333',
    //     // borderWidth: 2,
    //     borderRadius: 15,
    //     height: 40,
    //     width: 55
    // },
    // blackButton: {
    //     backgroundColor: 'black',
    //     borderColor: 'black',
    //     borderWidth: 2,
    //     borderRadius: 50,
    //     height: 20,
    //     width: 20,
    //     marginTop: 7,
    //     color: 'white'
    // },
    // whiteButton: {
    //     borderColor: 'transparent',
    //     borderWidth: 1,
    //     borderRadius: 50,
    //     height: 20,
    //     width: 20,
    //     marginTop: 7,
    //     color: 'black'
    // },
    // whiteText: {
    //     color: 'white',
    //     alignSelf: "center",
    //     marginTop: -2,
    //     fontWeight: '800'
    // },
    // blackText: {
    //     color: 'black',
    //     alignSelf: "center",
    //     marginTop: -2,

    // },
    // Textone: {
    //     fontWeight: '400',
    //     fontFamily: 'Lato',
    //     fontSize: 12,
    //     lineHeight: 20,
    //     marginTop: 6,
    // },
    // description_heading: {
    //     height: 50,
    //     width: '40%',
    //     justifyContent: 'center'
    // },
    // titleStyle_description: {
    //     color: '#222222',
    //     fontFamily: 'Raleway',
    //     fontWeight: '500',
    //     fontSize: 14,
    //     lineHeight: 17,
    //     padding: 10
    // },
    // li_text_root: {
    //     flexDirection: 'row',
    //     // width: '100%',
    //     alignSelf: 'center',
    //     // marginLeft: -60
    // },
    // li_text: {
    //     textAlign: "justify",
    //     marginLeft: 10,
    //     fontSize: 14,
    //     letterSpacing: 0.2,
    //     lineHeight: 27,
    //     fontFamily: 'Lato',
    //     fontWeight: '400',
    //     width: '85%',
    //     color: '#444444'
    // },
    // baseLine2: {
    //     height: 1,
    //     width: '100%',
    //     alignSelf: 'center',
    //     backgroundColor: '#C4C4C4',
    //     marginTop: 20
    // },
    // baseLine: {
    //     height: 1,
    //     // width: '100%',
    //     // alignSelf: 'center',
    //     backgroundColor: '#C4C4C4',
    //     marginTop: 5
    // },
    // review_MainHeading: {
    //     fontSize: 16,
    //     fontWeight: '500',
    //     fontFamily: 'Raleway',
    //     lineHeight: 19
    // },
    // review_outerRoot: {
    //     backgroundColor: '#ffffff',
    //     marginTop: 20,
    //     width: '100%',
    //     marginBottom: 30
    // },
    // review_innerRoot: {
    //     width: '90%',
    //     alignSelf: 'center',
    // },
    // reviews_root: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     marginTop: 20,
    //     // width: '90%',
    //     // alignSelf: 'center'
    // },
    // write_review: {
    //     borderWidth: 1,
    //     borderRadius: 4,
    //     paddingTop: 15,
    //     paddingBottom: 15,
    //     paddingLeft: 35,
    //     paddingRight: 35,
    //     borderColor: '#333333'
    // },
    // reviews_length: {
    //     fontSize: 14,
    //     fontWeight: '600',
    //     fontFamily: 'Raleway',
    //     lineHeight: 17
    // },
    // review_heading: {
    //     fontSize: 10,
    //     fontWeight: '400',
    //     fontFamily: 'Lato'
    // },
    // review_Short: {
    //     fontSize: 12,
    //     fontWeight: '400',
    //     fontFamily: 'Lato',
    //     lineHeight: 15
    // },
    // BestSellingRoot: {
    //     height: 'auto',
    //     backgroundColor: '#fff'
    // },
    // sellingTitleRoot: {
    //     height: 330,
    //     width: 465,
    //     marginLeft: 15,
    //     marginTop: 26
    // },
    // allreview_root: {
    //     height: 40,
    //     width: '100%',
    //     borderWidth: 0.4,
    //     marginTop: 15,
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     borderRadius: 4
    // },
    // youMayAlso: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     marginTop: 20,
    //     marginBottom: 10
    // },
    // viewLatestProduct: {
    //     height: 25,
    //     width: 70,
    //     borderRadius: 15,
    //     borderWidth: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     marginTop: 10,
    //     marginRight: 20,
    //     alignSelf: 'center'
    // },
    // latestProductText: {
    //     fontSize: 12,
    //     lineHeight: 14.09,
    //     fontWeight: '600',
    // },
    // productsListRoot: {
    //     height: 252,
    //     width: '95%',
    //     alignSelf: 'center',
    //     marginBottom: "10%"
    // },
    // review_Name: {
    //     fontSize: 16,
    //     fontWeight: '700',
    //     fontFamily: 'Raleway',
    //     lineHeight: 19,
    // },
    // review_Date: {
    //     fontSize: 12,
    //     fontWeight: '400',
    //     fontFamily: 'Lato',
    //     lineHeight: 15
    // },
    // review_Title: {
    //     fontSize: 14,
    //     fontWeight: '700',
    //     fontFamily: 'Raleway',
    //     lineHeight: 17,
    //     marginTop: 2
    // },
    // review_Review: {
    //     fontSize: 16,
    //     fontWeight: '400',
    //     fontFamily: 'Lato',
    //     lineHeight: 20,
    //     marginTop: 5,
    //     textAlign: 'justify'
    // },
    // starReviws: {
    //     marginTop: 17,
    //     fontSize: 14,
    //     lineHeight: 17,
    //     fontWeight: '700',
    //     fontFamily: 'Lato'
    // },
    // boxStyle: {
    //     borderWidth: 1,
    //     marginLeft: -10,
    //     borderColor: 'transparent',
    // },
    // paginationStyle: {
    //     marginTop: 15,
    //     alignSelf: 'center'
    // },
    // shadow_Box: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     height: 50,
    //     width: 50,
    //     borderRadius: 100,
    //     // backgroundColor: '#171717',
    //     // opacity: 0.5,
    //     position: 'absolute',
    //     bottom: '15%',
    //     left: '8%'
    // },
    // shadow_Box1: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     height: 50,
    //     width: 50,
    //     borderRadius: 100,
    //     // backgroundColor: '#171717',
    //     // opacity: 0.5,
    //     position: 'absolute',
    //     bottom: '15%',
    //     right: '8%'
    // },
    // fabOne: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignSelf: 'center',
    //     height: 35,
    //     width: 35,
    //     borderRadius: 100,
    //     backgroundColor: '#fff',
    //     position: 'absolute',
    //     // bottom: '15%',
    //     // left: '8%'
    // },
    // // fabOne1: {
    // //     flex: 1,
    // //     justifyContent: 'center',
    // //     height: 40,
    // //     width: 40,
    // //     borderRadius: 100,
    // //     backgroundColor: '#7aebda',
    // //     position: 'absolute',
    // //     // bottom: '15%',
    // //     // right: '8%',
    // // },
    // Snackbar_style: {
    //     width: "70%",
    //     height: 70,
    //     alignSelf: 'center',
    //     position: 'absolute',
    //     zIndex: 3,
    //     bottom: 250,
    //     opacity: 0.7
    // },
    // Snackbar_text: {
    //     color: '#fff',
    //     fontSize: 15,
    //     textAlign: 'center'
    // },
    // sticky_Btn: {
    //     flexDirection: 'row',
    //     position: 'absolute',
    //     bottom: 0,
    //     zIndex: 2,
    //     backgroundColor: '#fff',

    // },
    // bottomView: {
    //     height: 60,
    //     width: '50%',
    //     justifyContent: 'center',
    //     // backgroundColor: '#FF9800',
    //     // alignItems: 'center',
    //     // position: 'absolute',
    //     // bottom: 0,
    //     // zIndex: 99,
    // },
    // inner_bottomView: {
    //     height: 50,
    //     width: '90%',
    //     justifyContent: 'center'
    // },
    // add_btn: {
    //     backgroundColor: '#blue',
    //     alignSelf: 'center',
    // },
    // bottomView1: {
    //     height: 60,
    //     width: '50%',
    //     // borderWidth: 1,
    //     // backgroundColor: 'blue',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     // position: 'absolute',
    //     // bottom: 0,
    //     // zIndex: 99,
    // },
    // textStyle: {
    //     color: '#000',
    //     fontSize: 22
    // },
    // // color: {
    // //     color: '#000'
    // // }

})