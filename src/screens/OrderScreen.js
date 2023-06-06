import { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image, ActivityIndicator } from 'react-native'
import BackButton from '../components/BackButton'
import { Snackbar } from 'react-native-paper';
import Heading from '../components/Heading'
import { bestSellingProductStyle as bsP } from '../styles/bestSellingProductStyle'
import { useStyles } from '../styles/responsiveStyle'
import { useStyles as home_style } from '../styles/homeResponsive';
import axios from 'axios'
import { submitActions } from '../store/dataSlice'
import { useSelector, useDispatch } from 'react-redux';
import { BEST_SELLING_API, CONSUMER_KEY } from "@env";

const OrderScreen = ({ navigation }) => {
    let bs = "BestSellers";
    const Or_Style = useStyles();
    const hm = home_style();
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
            if (res.data.status = "success") {
                setBestData(res.data.response)
                setLoading(false)
            }
        })
    }, [])

    const CartHolder = (product_title, product_id, image, sale_price, regular_price,) => {
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
        <View style={styles.root} >
            <View>
                {
                    loading ?
                        <View>
                            <ActivityIndicator size="large" />
                        </View>
                        :
                        <ScrollView>
                            <View>
                                <Text style={hm.no_order_text}>No orders placed</Text>
                                <View style={hm.bestSellerRoot}>
                                    <Heading title=' best selling ' />
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        style={hm.viewLatestProduct}
                                        onPress={() => { navigation.navigate('productListing', { name: bs }) }}
                                    >
                                        <Text style={hm.latestProductText}>
                                            View All
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={hm.productsListRoot}>
                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                                        {bestData.map((e, i) => {
                                            const rp = e.regular_price;
                                            const sp = e.sale_price;
                                            const regular_price = Number(rp).toFixed(2);
                                            const sale_price = Number(sp).toFixed(2);
                                            return (
                                                <TouchableOpacity
                                                    activeOpacity={0.8}
                                                    style={hm.best_touchable}
                                                    onPress={() => navigation.navigate('productDetail', e.product_id)}
                                                    key={i}
                                                >
                                                    <View style={hm.imgRoot} >
                                                        <Image source={{ uri: e.image }} style={hm.productImg} />
                                                    </View>
                                                    <View style={hm.contentRoot}>
                                                        <View style={hm.descriptionRoot}>
                                                            <Text style={hm.descriptionText}>{e.product_title}</Text>
                                                        </View>
                                                        <View style={hm.baseLine}></View>
                                                        <View style={hm.priceRoot}>
                                                            <Text style={hm.oldprice}>₹{regular_price}</Text>
                                                            <Text style={hm.spaceRoot}></Text>
                                                            <Text style={hm.price}>₹{sale_price}</Text>
                                                        </View>
                                                    </View>

                                                    {/* Buy Now Button  */}
                                                    <TouchableOpacity
                                                        activeOpacity={0.8}
                                                        style={hm.buyNowButton}
                                                        onPress={() => CartHolder(e.product_title, e.product_id, e.image, e.sale_price, e.regular_price)}
                                                    >
                                                        <Text style={hm.buttonText}>BUY NOW</Text>
                                                    </TouchableOpacity>
                                                </TouchableOpacity>
                                            )
                                        })}
                                    </ScrollView>
                                </View>
                                <TouchableOpacity style={hm.shopping_btn} onPress={() => navigation.navigate('Home')} >
                                    <Text style={hm.shopping_text}>Continue Shopping</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                }
            </View>
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                duration={2000}
                style={hm.Snackbar_style}
            >
                <Text style={hm.Snackbar_text}>Item is already added to the cart. Please Checkout..</Text>
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
})