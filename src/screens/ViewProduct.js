import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { shopStyle as sS } from '../styles/shopStyle';
import { useStyles } from '../styles/viewAllProductResponsive';
import { useSelector, useDispatch } from 'react-redux';
import { submitActions } from '../store/dataSlice';
import { SkeletonContainer } from 'react-native-dynamic-skeletons';
import { Snackbar } from 'react-native-paper';
import { CONSUMER_KEY, ALL_PRODUCT_API } from "@env";

const ViewProduct = ({ navigation }) => {
    const Va_Style = useStyles();
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

    // const AddToCartHolder = (product_title, product_id, image, regular_price, sale_price) => {
    //     let Data = [...cartData, {
    //         description: product_title,
    //         categoriesDetail_id: product_id,
    //         images: image,
    //         price: regular_price,
    //         oldprice: sale_price,
    //         quantity: 1
    //     }];
    //     dispatch(submitActions.price(
    //         {
    //             cart: Data
    //         }
    //     ));
    //     navigation.navigate('Cart', product_id);
    // }


    return (
        <View>
            {/* <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                duration={2000}
                style={styles.Snackbar_style}
            >
                <Text style={styles.Snackbar_text}>Item is already added to the cart. Please Checkout..</Text>
            </Snackbar> */}
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
                                    onPress={() => navigation.navigate("productDetail", item.product_id)} >
                                    <View style={Va_Style.imgRoot} >
                                        <Image source={{ uri: item.image }} style={Va_Style.productImg} />
                                    </View>

                                    <View style={Va_Style.contentRoot}>
                                        <View style={Va_Style.textRoot}>
                                            <Text style={Va_Style.contentText}>{item.product_title}</Text>
                                        </View>

                                        <View style={Va_Style.baseLine}></View>

                                        <View style={Va_Style.priceRoot}>
                                            <Text style={Va_Style.oldprice}>₹{regular_price}</Text>
                                            <Text style={Va_Style.spaceRoot}>/</Text>
                                            <Text style={Va_Style.price}>₹{sale_price}</Text>
                                        </View>

                                    </View>

                                    {/* {/ Buy Now Button  /} */}
                                    <TouchableOpacity style={Va_Style.buyNowButton}
                                        onPress={() => AddToCartHolder(item.product_title, item.product_id, item.image, item.regular_price, item.sale_price,)}
                                    >
                                        <Text style={Va_Style.buttonText}>BUY NOW</Text>
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

// const styles = StyleSheet.create({
//     deliveryText: {
//         fontSize: 20,
//         alignSelf: 'center',
//         paddingTop: 35,
//         paddingLeft: 20
//     },
//     Snackbar_style: {
//         width: "65%",
//         height: 55,
//         alignSelf: 'center',
//         position: 'absolute',
//         zIndex: 3,
//         bottom: 250,
//         opacity: 0.7
//     },
//     Snackbar_text: {
//         color: '#fff',
//         fontSize: 14,
//         lineHeight: 15,
//         textAlign: 'center'
//     },
// })