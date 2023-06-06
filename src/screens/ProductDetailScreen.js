import { Text, View, Image, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Swiper from 'react-native-swiper'
import axios from 'axios'
import Heading from '../components/Heading';
import { Snackbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons'
import { Rating, } from 'react-native-ratings';
import { useSelector, useDispatch } from 'react-redux'
import { submitActions } from '../store/dataSlice'
import { addWishActions } from '../store/wishlistSlice';
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
    const cartData = useSelector(state => state.cartData.cart);
    const [visible, setVisible] = useState(false);
    const [star, setStar] = useState('')
    const [page, setPage] = useState('1')
    const [bestSelData, setBestSeldata] = useState([])
    const [singleData, setSingleData] = useState([])
    const [isVisible, setIsVisible] = useState(false);
    const [wishvisible, setWishvisible] = useState(false);
    const [wishremove, setWishremove] = useState(false);
    const [loading, setLoading] = useState(true);
    const [heart, setHeart] = useState(false);
    const id = route.params;
    const addWishData = useSelector(state => state.wishListdata.addWish);

    useEffect(() => {
        Single_Product()
        bestSellingApi()
        conditonhandler()
    }, [])

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
            if (res.data.status = "success") {
                setBestSeldata(res.data.response)
            }
        })
    }

    const conditonhandler = () => {
        if (addWishData.length !== 0) {
            let ss = false;
            addWishData.find(data => {
                if (data.product_id == id) {
                    ss = true;
                }
            })
            if (ss == true) {
                setHeart(true)
            }
        }
    }

    const ratingCompleted = (rating) => {
        setStar(rating);
    }

    const [expanded, setExpanded] = useState("1");

    const handlePress = (gg) => {
        setExpanded(gg);
    };

    const onDismissSnackBar = () => setVisible(false);
    const subOne = () => {
        if (one <= 1) {
        } else {
            setOne(one - 1)
        }
    }

    const onDismissWishlist = () => setWishvisible(false);
    const onDismissRemovewish = () => setWishremove(false);
    const CartHolder = (product_title, product_id, image, regular_price, sale_price,) => {

        if (cartData.length !== 0) {
            let dd = false;
            cartData.find(data => {
                if (data.categoriesDetail_id == product_id) {
                    dd = true;
                }
            })
            if (dd == true) {
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

    const wishlistHandler = (product_title, product_id, image, regular_price, sale_price, i) => {

        let wishArr = [];

        if (addWishData.length !== 0) {
            let ss = false;
            addWishData.find(data => {
                if (data.product_id == product_id) {
                    ss = true;
                }
            })
            if (ss == true) {
                setHeart(false)
                setWishremove(!wishremove);
                dispatch(addWishActions.remove({ index: i }))
            }
            else {
                wishArr.push(...addWishData, {
                    product_title: product_title,
                    product_id: product_id,
                    image: image,
                    regular_price: sale_price,
                    sale_price: regular_price,
                })
                setHeart(true)
                setWishvisible(!wishvisible);
                dispatch(addWishActions.addtoWish({ wishdata: wishArr }))
                // setVisible(false);
            }
        }
        else {
            wishArr.push(...addWishData, {
                product_title: product_title,
                product_id: product_id,
                image: image,
                regular_price: sale_price,
                sale_price: regular_price,
            })
            setHeart(true)
            setWishvisible(!wishvisible);
            dispatch(addWishActions.addtoWish({ wishdata: wishArr }))
        }
    }

    return (
        <View>
            <SafeAreaView style={Pd_Style.safe_root}>
                <ScrollView>
                    {singleData.map((data, i) => {
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
                                    <SkeletonContainer isLoading={loading} >
                                        <View style={Pd_Style.shadow_Box} elevation={7}>
                                            <TouchableOpacity
                                                onPress={() => wishlistHandler(data.product_title, data.product_id, data.image, data.sale_price, data.regular_price, i)}
                                                activeOpacity={0.8}
                                                style={Pd_Style.fabOne}
                                            >

                                                {heart ?
                                                    <Ionicons name={"heart-sharp"} size={22} style={{ alignSelf: 'center' }} /> :
                                                    <Ionicons name={"heart-outline"} size={22} style={{ alignSelf: 'center' }} />
                                                }

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
                                                        </View>
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
                <Snackbar
                    visible={wishvisible}
                    onDismiss={onDismissWishlist}
                    duration={500}
                    style={Pd_Style.product_Snackbar_style}
                >
                    <Text style={Pd_Style.product_Snackbar_text}> Item has added to the wishlist</Text>
                </Snackbar>
                <Snackbar
                    visible={wishremove}
                    onDismiss={onDismissRemovewish}
                    duration={500}
                    style={Pd_Style.product_Snackbar_style}
                >
                    <Text style={Pd_Style.product_Snackbar_text}> Item has deleted from the wishlist</Text>
                </Snackbar>
                {
                    singleData.map((data, i) => {
                        const sp = data.sale_price;
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
                    })
                }
            </SafeAreaView >
        </View >
    )
}
export default ProductDetailScreen;
