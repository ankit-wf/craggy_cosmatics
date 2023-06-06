import { Text, View, SafeAreaView, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useStyles } from '../styles/viewAllProductResponsive';
import { useStyles as h_Style } from '../styles/homeResponsive';
import { useSelector, useDispatch } from 'react-redux';
import { submitActions } from '../store/dataSlice';
import { SkeletonContainer } from 'react-native-dynamic-skeletons';
import { Snackbar } from 'react-native-paper';
import { CONSUMER_KEY, ALL_PRODUCT_API } from "@env";

const ViewProduct = ({ navigation }) => {
    const Va_Style = useStyles();
    const hm = h_Style();
    const dispatch = useDispatch();
    const [allData, setAllData] = useState([])
    const [loading, setLoading] = useState(true);
    const cartData = useSelector(state => state.cartData.cart);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        axios.get(
            ALL_PRODUCT_API,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'consumer_key': CONSUMER_KEY,
                }
            }
        ).then((res) => {
            if (res.data.status = "success") {
                setAllData(res.data.response);
            }
            setTimeout(() => {
                setLoading(false)
            }, 2000);
        })
    }, [])

    const onDismissSnackBar = () => setVisible(false);
    const AddToCartHolder = (product_title, product_id, image, regular_price, sale_price,) => {
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
            <SafeAreaView style={Va_Style.productsListRoot}>
                <FlatList
                    data={allData}
                    renderItem={({ item }) => {
                        const rp = item.regular_price;
                        const sp = item.sale_price;
                        const regular_price = Number(rp).toFixed(2);
                        const sale_price = Number(sp).toFixed(2);
                        return (
                            <SkeletonContainer isLoading={loading}>
                                < TouchableOpacity style={Va_Style.toch_root}
                                    activeOpacity={0.8}
                                    onPress={() => navigation.navigate("productDetail", item.product_id)} >
                                    <View style={Va_Style.imgRoot} >
                                        <Image source={{ uri: item.image }} style={Va_Style.productImg} />
                                    </View>
                                    <View style={Va_Style.contentRoot}>
                                        <View style={Va_Style.textRoot}>
                                            <Text style={hm.descriptionText}>{item.product_title}</Text>
                                        </View>
                                        <View style={Va_Style.baseLine}></View>
                                        <View style={Va_Style.priceRoot}>
                                            <Text style={hm.oldprice}>₹{regular_price}</Text>
                                            <Text style={hm.spaceRoot}></Text>
                                            <Text style={hm.price}>₹{sale_price}</Text>
                                        </View>
                                    </View>

                                    {/* {/ Buy Now Button  /} */}
                                    <TouchableOpacity style={Va_Style.buyNowButton}
                                        onPress={() => AddToCartHolder(item.product_title, item.product_id, item.image, item.regular_price, item.sale_price,)}
                                    >
                                        <Text style={hm.buttonText}>BUY NOW</Text>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            </SkeletonContainer>
                        )
                    }}
                    numColumns={2}
                    keyExtractor={(item, index) => index}
                />
            </SafeAreaView>
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                duration={2000}
                style={Va_Style.Snackbar_style}
            >
                <Text style={Va_Style.Snackbar_text}>Item is already added to the cart. Please Checkout..</Text>
            </Snackbar>
        </View>
    )
}
export default ViewProduct;
