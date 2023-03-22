import { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image, ActivityIndicator } from 'react-native'
import BackButton from '../components/BackButton'
import { Snackbar } from 'react-native-paper';
import Heading from '../components/Heading'
import { bestSellingProductStyle as bsP } from '../styles/bestSellingProductStyle'
import { useStyles } from '../styles/responsiveStyle'
import axios from 'axios'
import { submitActions } from '../store/dataSlice'
import { useSelector, useDispatch } from 'react-redux';
import { BEST_SELLING_API, CONSUMER_KEY } from "@env";

const OrderScreen = ({ navigation }) => {
    let bs = "BestSellers";
    const Hm_Style = useStyles();
    const dispatch = useDispatch();
    const [bestData, setBestData] = useState([])
    const cartData = useSelector(state => state.cartData.cart);
    const [loading, setLoading] = useState(true);
    const [visible, setVisible] = useState(false);
    const onDismissSnackBar = () => setVisible(false);

    useEffect(() => {
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
                setBestData(res.data.response)
                setLoading(false)
            }
        })
    }, [])

    const CartHolder = (product_title, product_id, image, sale_price, regular_price,) => {
        // let Data = [...cartData, {
        //     description: product_title,
        //     sellingProduct_id: product_id,
        //     images: image,
        //     oldprice: sale_price,
        //     price: regular_price,
        //     quantity: 1
        // }];
        // dispatch(submitActions.price(
        //     {
        //         cart: Data
        //     }
        // ));
        // navigation.navigate('cart', product_id);
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

        <View style={styles.root} >
            {/* <View style={{ flexDirection: 'row', }}>
        <BackButton goBack={navigation.goBack} Color={'#666666'} />
        <Text style={styles.deliveryText}>MY ORDERS</Text>
      </View> */}
            {/* <View style={{ alignItems: 'center', marginTop: '40%' }}>
        <Text style={{ fontSize: 20 }}> Order List Empty</Text>
      </View> */}
            {/* <View>
        <TouchableOpacity style={styles.shopping_btn}>
          <Text style={styles.shopping_text}>Continue Shopping</Text>
        </TouchableOpacity>
      </View> */}

            <View>
                {
                    loading ?
                        <View>
                            <ActivityIndicator size="large" />
                        </View>
                        :
                        <ScrollView>
                            <View>
                                <Text style={Hm_Style.no_order_text}>No orders placed</Text>

                                <View style={Hm_Style.bestSellerRoot}>
                                    <Heading title=' best selling ' />
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        style={Hm_Style.viewLatestProduct}
                                        onPress={() => { navigation.navigate('productListing', { name: bs }) }}
                                    >
                                        <Text style={Hm_Style.latestProductText}>
                                            View All
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={Hm_Style.productsListRoot}>
                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                                        {bestData.map((e, i) => {
                                            return (
                                                <TouchableOpacity
                                                    activeOpacity={0.8}
                                                    style={Hm_Style.best_touchable}
                                                    onPress={() => navigation.navigate('productDetail', e.product_id)}
                                                    key={i}
                                                >
                                                    <View style={bsP.imgRoot} >
                                                        <Image source={{ uri: e.image }} style={bsP.productImg} />
                                                    </View>
                                                    <View style={bsP.contentRoot}>
                                                        <View style={bsP.descriptionRoot}>
                                                            <Text style={bsP.descriptionText}>{e.product_title}</Text>
                                                        </View>
                                                        <View style={bsP.baseLine}></View>
                                                        <View style={bsP.priceRoot}>
                                                            <Text style={bsP.oldprice}>₹{e.regular_price}</Text>
                                                            <Text style={bsP.spaceRoot}>/ </Text>
                                                            <Text style={bsP.price}>₹{e.sale_price}</Text>

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
                                <TouchableOpacity style={Hm_Style.shopping_btn} onPress={() => navigation.navigate('Home')} >
                                    <Text style={Hm_Style.shopping_text}>Continue Shopping</Text>
                                </TouchableOpacity>

                            </View>
                        </ScrollView>
                }
            </View>
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                duration={2000}
                style={Hm_Style.Snackbar_style}
            >
                <Text style={Hm_Style.Snackbar_text}>Item is already added to the cart. Please Checkout..</Text>
            </Snackbar>
        </View>
    )
}

export default OrderScreen

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'space-around'
    },
    no_order_text: {
        fontSize: 18,
        fontWeight: '700',
        alignSelf: 'center',
    },
    best_root: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 10,
    },
    deliveryText: {
        fontSize: 20,
        alignSelf: 'center',
        paddingTop: 35,
        paddingLeft: '25%'
    },
    // shopping_btn: {
    //     height: 40,
    //     width: 150,
    //     borderWidth: 1,
    //     borderRadius: 5,
    //     alignSelf: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: '#C68625',
    //     marginTop: 50
    // },
    // shopping_text: {
    //     fontSize: 16,
    //     alignSelf: 'center',
    //     color: '#fff',

    // },
    // Snackbar_style: {
    //     width: "65%",
    //     height: 55,
    //     alignSelf: 'center',
    //     position: 'absolute',
    //     zIndex: 9,
    //     bottom: 250,
    //     opacity: 0.7
    // },
    // Snackbar_text: {
    //     color: '#fff',
    //     fontSize: 14,
    //     lineHeight: 15,
    //     textAlign: 'center'
    // },
})