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
import { CONSUMER_KEY, ALL_PRODUCT_API } from "@env";

const WishListScreen = ({ navigation, route }) => {
    // const id = route.params;
    // console.log("dgjdfhjdfh", id)
    const Pl_Style = useStyles();
    const dispatch = useDispatch();
    const cartData = useSelector(state => state.cartData.cart);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(false);
    const onDismissSnackBar = () => setVisible(false);

    useEffect(() => {
        axios.get(
            ALL_PRODUCT_API,
            {
                headers: {
                    'consumer_key': CONSUMER_KEY,
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

    const buyNowHanlder = (product_title, product_id, image, regular_price, sale_price) => {
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

    return (
        <View>
            {/* <View style={{ flexDirection: 'row', }}>
                    <BackButton goBack={navigation.goBack} Color={'#666666'} />
                    <Text style={styles.deliveryText}>MY WISHLIST</Text>
                </View> 
                <Text style={styles.deliveryText}>MY WISHLIST</Text> 

                <View style={{ height: 40, width: 70, borderWidth: 1, borderRadius: 30, marginTop: 10, marginHorizontal: 15, display: 'flex', justifyContent: 'center', }}>
                    <Text style={{ alignSelf: 'center' }} >All</Text>
                </View> */}
            <View style={Pl_Style.flatList_Root}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => {
                        const rp = item.regular_price;
                        const sp = item.sale_price;
                        const regular_price = Number(rp).toFixed(2);
                        const sale_price = Number(sp).toFixed(2);
                        return (
                            <SkeletonContainer isLoading={loading}>
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
                                                onPress={() => removeHandler(e)}
                                            />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={Pl_Style.flatList_contentRoot}>
                                        <View style={Pl_Style.flatList_textRoot}>
                                            <Text style={Pl_Style.flatList_contentText}>{item.product_title}</Text>
                                        </View>
                                        <View style={Pl_Style.flatList_baseLine}></View>
                                        <View style={Pl_Style.flatList_priceRoot}>
                                            <Text style={Pl_Style.flatList_oldprice}>₹{regular_price}</Text>
                                            <Text style={Pl_Style.flatList_spaceRoot}>/</Text>
                                            <Text style={Pl_Style.flatList_price}>₹{sale_price}</Text>
                                        </View>
                                    </View>

                                    {/* Buy Now Button  */}
                                    <View style={Pl_Style.btn_btn}>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            style={Pl_Style.flatList_buyNowButton}
                                            onPress={() => buyNowHanlder(item.product_title, item.product_id, item.image, item.regular_price, item.sale_price,)}
                                        >
                                            <Text style={Pl_Style.flatList_buttonText}>BUY NOW</Text>
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            </SkeletonContainer>
                        )
                    }}
                    numColumns={2}
                    keyExtractor={(item, index) => index}
                />

            </View>
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                duration={2000}
                style={Pl_Style.Snackbar_style}
            >
                <Text style={Pl_Style.Snackbar_text}>Item is already added to the cart. Please Checkout..</Text>
            </Snackbar>
        </View>
        // <View>

        //     <View style={Wl_Style.productsListRoot}>
        //         <SkeletonContainer isLoading={loading}>
        //             <FlatList
        //                 data={data}
        //                 renderItem={({ item }) => (
        //                     <TouchableOpacity
        //                         activeOpacity={0.8}
        //                         style={Wl_Style.product109}
        //                         onPress={() => navigation.navigate("productDetail", item.product_id)}
        //                     >
        //                         <View style={Wl_Style.imgRoot} >
        //                             <Image source={{ uri: item.image }} style={Wl_Style.productImg} />
        // <TouchableOpacity
        //     activeOpacity={0.5}
        //     style={Wl_Style.img_icon_root}
        // >
        //     <Ionicons
        //         name="close-outline"
        //         color={'#000'}
        //         size={20}
        //         style={Wl_Style.icon_style}
        //     //   onPress={() => removeHandler(e)}
        //     />
        // </TouchableOpacity>
        //                         </View>

        //                         <View style={Wl_Style.contentRoot}>
        //                             <View style={Wl_Style.textRoot}>
        //                                 <Text style={Wl_Style.contentText}>{item.product_title}</Text>
        //                             </View>
        //                             <View style={Wl_Style.baseLine}></View>
        //                             <View style={Wl_Style.priceRoot}>
        //                                 <Text style={Wl_Style.price}>₹{item.sale_price}</Text>
        //                                 <Text style={Wl_Style.spaceRoot}>/ </Text>
        //                                 <Text style={Wl_Style.oldprice}>₹{item.regular_price}</Text>
        //                             </View>
        //                         </View>

        //                         {/* Buy Now Button  */}
        //                         <TouchableOpacity
        //                             activeOpacity={0.6}
        //                             style={Wl_Style.buyNowButton}
        //     onPress = {() => buyNowHanlder(item.product_title, item.product_id, item.image, item.regular_price, item.sale_price,)}
        // >
        //                             <Text style={Wl_Style.buttonText}>BUY NOW</Text>
        //                         </TouchableOpacity>
        //                     </TouchableOpacity>
        //                 )}
        //                 numColumns={2}
        //                 keyExtractor={(item, index) => index}
        //             />
        //         </SkeletonContainer>
        //     </View>
        //     <Snackbar
        //         visible={visible}
        //         onDismiss={onDismissSnackBar}
        //         duration={2000}
        //         style={Wl_Style.Snackbar_style}
        //     >
        //         <Text style={Wl_Style.Snackbar_text}>Item is already added to the cart. Please Checkout..</Text>
        //     </Snackbar>
        // </View>

    )
}
export default WishListScreen;