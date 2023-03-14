import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { shopStyle as sS } from '../styles/shopStyle'
import axios from 'axios'
import { Snackbar } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { submitActions } from '../store/dataSlice'
import BackButton from '../components/BackButton'
import { SkeletonContainer } from 'react-native-dynamic-skeletons';
import { CONSUMER_KEY, ALL_PRODUCT_API } from "@env";

const WishListScreen = ({ navigation }) => {
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
            </View> */}
            {/* <Text style={styles.deliveryText}>MY WISHLIST</Text> */}

            {/* <View style={{ height: 40, width: 70, borderWidth: 1, borderRadius: 30, marginTop: 10, marginHorizontal: 15, display: 'flex', justifyContent: 'center', }}>
                <Text style={{ alignSelf: 'center' }} >All</Text>
            </View> */}

            <View style={sS.productsListRoot}>
                <SkeletonContainer isLoading={loading}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={sS.product109}
                                onPress={() => navigation.navigate("productDetail", item.product_id)}
                            >
                                <View style={sS.imgRoot} >
                                    <Image source={{ uri: item.image }} style={sS.productImg} />
                                    <TouchableOpacity
                                        activeOpacity={0.5}
                                        style={styles.img_icon_root}
                                    >
                                        <Ionicons
                                            name="close-outline"
                                            color={'#000'}
                                            size={20}
                                            style={styles.icon_style}
                                        //   onPress={() => removeHandler(e)}
                                        />
                                    </TouchableOpacity>
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
                                <TouchableOpacity
                                    activeOpacity={0.6}
                                    style={sS.buyNowButton}
                                    onPress={() => buyNowHanlder(item.product_title, item.product_id, item.image, item.regular_price, item.sale_price,)}
                                >
                                    <Text style={sS.buttonText}>BUY NOW</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        )}
                        numColumns={2}
                        keyExtractor={(item, index) => index}
                    />
                </SkeletonContainer>
            </View>
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                duration={2000}
                style={styles.Snackbar_style}
            >
                <Text style={styles.Snackbar_text}>Item is already added to the cart. Please Checkout..</Text>
            </Snackbar>
        </View>
    )
}
export default WishListScreen;
const styles = StyleSheet.create({
    deliveryText: {
        fontSize: 20,
        alignSelf: 'center',
        paddingTop: 35,
        // paddingLeft: '25%'
    },
    img_icon_root: {
        position: 'absolute',
        alignSelf: 'flex-end',
        marginTop: 10,
        height: 30,
        width: 30,
        backgroundColor: '#C68625',
        borderRadius: 50,
    },
    icon_style: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 3
    },
    Snackbar_style: {
        width: "65%",
        height: 55,
        alignSelf: 'center',
        position: 'absolute',
        zIndex: 9,
        bottom: 250,
        opacity: 0.7
    },
    Snackbar_text: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 15,
        textAlign: 'center'
    },
})