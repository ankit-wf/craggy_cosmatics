import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { useStyles } from '../styles/responsiveStyle'
import axios from 'axios'
import { Snackbar } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { submitActions } from '../store/dataSlice'
import BackButton from '../components/BackButton'
import { SkeletonContainer } from 'react-native-dynamic-skeletons';
import { CONSUMER_KEY, ALL_PRODUCT_API, USER_LOGIN_API } from "@env";
import { addWishActions } from '../store/wishlistSlice'

const WishListScreen = ({ navigation, route }) => {
    const Pl_Style = useStyles();
    const dispatch = useDispatch();
    const cartData = useSelector(state => state.cartData.cart);
    const addWishData = useSelector(state => state.wishListdata.addWish);
    console.log("addWishData", addWishData)
    const userLoginData = useSelector(state => state.userData.user_data);

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(false);
    const [wishremove, setWishremove] = useState(false)
    // console.log("userloginData", userLoginData.wishlist[0].product_id)
    // console.log("wishlistdata", data.length)

    const onDismissSnackBar = () => setVisible(false);
    const onDismissRemovewish = () => setWishremove(false)

    useEffect(() => {
        axios.get(
            ALL_PRODUCT_API,
            {
                headers: {
                    'consumer_key': CONSUMER_KEY,
                }
            }
        ).then((res) => {
            // console.log("ressss", res.data.response)
            if (res.data.status = "success") {
                setData(res.data.response)
                setLoading(false);
            }
        });

    }, [])



    const buyNowHanlder = (product_title, product_id, image, regular_price, sale_price, index) => {
        if (cartData.length !== 0) {
            let ss = false;
            cartData.find(data => {
                if (data.categoriesDetail_id == product_id) {
                    ss = true;
                }
            })
            if (ss == true) {
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
                // navigation.navigate("cart");
                dispatch(addWishActions.remove({ index: index }))
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
            // navigation.navigate("cart");
        }
    }
    const removeHandler = (index) => {
        setWishremove(!wishremove)
        dispatch(addWishActions.remove({ index: index }))
    }
    return (
        <View>
            {addWishData.length > 0 ?
                <View style={Pl_Style.flatList_Root}>
                    <FlatList
                        data={addWishData}
                        renderItem={({ item, index }) => {
                            for (let i = 0; i < data.length; i++) {
                                let element = data[i].product_id;

                                if (item.product_id == element)
                                    return (
                                        < SkeletonContainer isLoading={loading} >
                                            < TouchableOpacity
                                                style={Pl_Style.flatList_tochable_root}
                                                activeOpacity={0.8}
                                                onPress={() => navigation.navigate("productDetail", item.product_id)}
                                            >
                                                <View style={Pl_Style.flatList_imgRoot} >
                                                    <Image source={{ uri: item.image }} style={Pl_Style.flatList_Img} />
                                                    <TouchableOpacity
                                                        activeOpacity={0.5}
                                                        style={Pl_Style.img_icon_root}
                                                    >
                                                        <Ionicons
                                                            name="close-outline"
                                                            color={'#000'}
                                                            size={20}
                                                            style={Pl_Style.icon_style}
                                                            onPress={() => removeHandler(index)}
                                                        />
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={Pl_Style.flatList_contentRoot}>
                                                    <View style={Pl_Style.flatList_textRoot}>
                                                        <Text style={Pl_Style.flatList_contentText}>{item.product_title}</Text>
                                                    </View>
                                                    <View style={Pl_Style.flatList_baseLine}></View>
                                                    <View style={Pl_Style.flatList_priceRoot}>
                                                        <Text style={Pl_Style.flatList_oldprice}>₹{item.regular_price}</Text>
                                                        <Text style={Pl_Style.flatList_spaceRoot}></Text>
                                                        <Text style={Pl_Style.flatList_price}>₹{item.sale_price}</Text>
                                                    </View>
                                                </View>

                                                {/* Buy Now Button  */}
                                                <View style={Pl_Style.btn_btn}>
                                                    <TouchableOpacity
                                                        activeOpacity={0.8}
                                                        style={Pl_Style.flatList_buyNowButton}
                                                        onPress={() => buyNowHanlder(item.product_title, item.product_id, item.image, item.regular_price, item.sale_price,)}
                                                    >
                                                        <Text style={Pl_Style.flatList_buttonText}>add to cart</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </TouchableOpacity>
                                        </SkeletonContainer>
                                    )
                            }

                        }}
                        numColumns={2}
                        keyExtractor={(item, index) => index}
                    />
                </View>
                :
                <View>
                    <Text style={{ fontSize: 20, fontWeight: '500', textAlign: 'center', paddingTop: 100 }}>Add Your wishlist data</Text>
                </View>
            }
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                duration={2000}
                style={Pl_Style.Snackbar_style}
            >
                <Text style={Pl_Style.Snackbar_text}>Item is already added to the cart. Please Checkout..</Text>
            </Snackbar>
            <Snackbar
                visible={wishremove}
                onDismiss={onDismissRemovewish}
                duration={500}
                style={Pl_Style.Snackbar_style}
            >
                <Text style={Pl_Style.Snackbar_text}>Item has deleted...</Text>
            </Snackbar>
        </View >
    )
}
export default WishListScreen;