import { Text, TouchableOpacity, View, Image, ScrollView, SafeAreaView, Button } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { RadioButton, Snackbar } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons'
import { useStyles } from '../styles/checkOutResponsiveStyle';
import { SkeletonContainer } from 'react-native-dynamic-skeletons';

const CheckOutScreen = ({ navigation, route }) => {
    const AddressData = useSelector(state => state.userData.user_data)

    console.log("AddressData", AddressData)
    const CartData = useSelector(state => state.cartData.cart);
    const Co_Style = useStyles();
    const [loading, setLoading] = useState(true);
    const [checked, setChecked] = useState('ok');
    const Tm = route.params.Tm;
    const fee = route.params.fee;
    const Tp = route.params.Tp;
    let withS = "Pay Now  " + "₹" + (Tm + fee).toFixed(2)
    let withOutS = "Pay Now  " + "₹" + Tm.toFixed(2)
    const dispatch = useDispatch();
    const totalPrice = useRef();
    const totaloldPrice = useRef();
    const [visible, setVisible] = useState(false);
    const onToggleSnackBar = () => {
        setVisible(!visible);
    }
    const onDismissSnackBar = () => {
        setVisible(false);
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])

    const totalOldAmount = () => {
        let sum = 0;
        for (let i = 0; i < CartData.length; i++) {
            sum = sum + CartData[i].price * CartData[i].quantity
        }
        return sum;
    }

    return (
        <View>
            <ScrollView>
                <SafeAreaView>
                    <SkeletonContainer isLoading={loading}>
                        <View style={Co_Style.total_priceRoot}>
                            <Text style={Co_Style.total_text}>Total</Text>
                            {fee ?
                                <Text style={Co_Style.total_price}>₹{(Tm + fee).toFixed(2)}</Text>
                                : <Text style={Co_Style.total_price}>₹{Tm.toFixed(2)}</Text>
                            }
                        </View>
                    </SkeletonContainer>
                    <View style={Co_Style.address_root} >
                        <View>
                            <SkeletonContainer isLoading={loading}>
                                <Text style={Co_Style.delivery_address_text}>Delivery Address :</Text>
                            </SkeletonContainer>
                            <SkeletonContainer isLoading={loading}>
                                <View style={Co_Style.user_adrdress_root}>
                                    <View style={Co_Style.user_name_default_root}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={Co_Style.user_name}>{AddressData.billing_address.first_name} {AddressData.billing_address.last_name}</Text>
                                        </View>
                                        <TouchableOpacity style={Co_Style.home_btn_root} onPress={() => navigation.navigate('editAddress')}>
                                            <Text style={Co_Style.edit_text}>Edit</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={Co_Style.user_address_text_root}>
                                        <Text style={Co_Style.user_address_text}>{AddressData.billing_address.address_1}, {AddressData.billing_address.address_2}, {AddressData.billing_address.city}, {AddressData.billing_address.state} {AddressData.billing_address.postcode}</Text>
                                        <Text style={Co_Style.user_phone}> Phone : {AddressData.billing_address.phone} </Text>
                                    </View>
                                </View>
                            </SkeletonContainer>
                        </View>
                    </View>

                    <SkeletonContainer isLoading={loading}>
                        <View style={Co_Style.order_summary_root}>
                            <Text style={Co_Style.order_summary_text} >Order Summary ({CartData.length} Item)</Text>
                        </View>
                    </SkeletonContainer>

                    {CartData.map((i, e) => {
                        return (
                            <View style={Co_Style.product_detail_root} key={e}>
                                <View key={e} style={Co_Style.dataRoot}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate("productDetail", i.categoriesDetail_id)}
                                        style={Co_Style.dataImgRoot}
                                    >
                                        <SkeletonContainer isLoading={loading}>
                                            <Image source={{ uri: i.images }} style={Co_Style.dataImg} />
                                        </SkeletonContainer>
                                    </TouchableOpacity>
                                    <SkeletonContainer isLoading={loading}>
                                        <View style={Co_Style.textRoot} >
                                            <Text numberOfLines={2} style={Co_Style.textDescription}>{i.description}</Text>
                                        </View>
                                    </SkeletonContainer>
                                    <View>
                                        <View style={Co_Style.blank_div}></View>
                                        <SkeletonContainer isLoading={loading}>
                                            <View style={Co_Style.buttonRoot}>
                                                <Text style={Co_Style.quantity_text} >Qnty</Text>
                                                <Text style={Co_Style.quantity_text} >:</Text>
                                                <Text style={Co_Style.blackText}>{i.quantity}</Text>
                                            </View>
                                        </SkeletonContainer>
                                    </View>
                                    <SkeletonContainer isLoading={loading}>
                                        <View style={Co_Style.textPriceRoot} key={e}>
                                            <Text style={Co_Style.oldprice}>₹{(totalPrice.current = i.oldprice * i.quantity).toFixed(2)}</Text>
                                            <Text style={Co_Style.slace}> </Text>
                                            <Text style={Co_Style.price}>₹{(totaloldPrice.current = i.price * i.quantity).toFixed(2)}</Text>
                                        </View>
                                    </SkeletonContainer>
                                </View>
                            </View>
                        )
                    })}
                    <SkeletonContainer isLoading={loading}>
                        <View style={Co_Style.order_summary_root}>
                            <Text style={Co_Style.order_summary_text} >Price Summary </Text>
                        </View>
                    </SkeletonContainer>
                    <View style={Co_Style.totalRoot}>
                        <SkeletonContainer isLoading={loading}>
                            <View style={Co_Style.to_pay_root}>
                                <View style={Co_Style.inner_pay_root}>
                                    <Text style={Co_Style.pay_text}>Order Total</Text>
                                    <Text style={Co_Style.pay_text}>₹{totalOldAmount().toFixed(2)}</Text>
                                </View>
                            </View>
                        </SkeletonContainer>
                        <SkeletonContainer isLoading={loading}>
                            <View style={Co_Style.to_pay_root}>
                                <View style={Co_Style.inner_pay_root}>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={Co_Style.pay_text}>Shipping</Text>
                                        <TouchableOpacity style={Co_Style.shipping_icon}>
                                            <Ionicons
                                                name="information-circle-outline"
                                                color={'blue'}
                                                size={18}
                                                onPress={onToggleSnackBar}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    {Tp < 499 ?
                                        <Text style={Co_Style.pay_text}>₹{fee.toFixed(2)}</Text> :
                                        <Text style={Co_Style.pay_text}>Free</Text>
                                    }
                                </View>
                            </View>
                        </SkeletonContainer>
                        <SkeletonContainer isLoading={loading}>
                            <View style={Co_Style.to_pay_root}>
                                <View style={Co_Style.inner_pay_root}>
                                    <Text style={Co_Style.pay_text}>Promo Discount</Text>
                                    <Text style={Co_Style.pay_text}>n/a</Text>
                                </View>
                            </View>
                        </SkeletonContainer>
                    </View>
                    <SkeletonContainer isLoading={loading}>
                        <View style={Co_Style.to_pay_root}>
                            <View style={Co_Style.inner_pay_root}>
                                <Text style={Co_Style.to_pay}>To Pay</Text>
                                {fee ?
                                    <Text style={Co_Style.to_pay}>₹{(Tm + fee).toFixed(2)}</Text>
                                    : <Text style={Co_Style.to_pay}>₹{Tm.toFixed(2)}</Text>
                                }
                            </View>
                        </View>
                    </SkeletonContainer>
                    <View style={Co_Style.RadioButtonRoot}></View>
                </SafeAreaView>
            </ScrollView>
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                duration={2000}
                style={Co_Style.Snackbar_style}
            >
                <Text style={Co_Style.Snackbar_text}>Shipping charges of Rs. 50.00 wil apply on order below Rs. 499.00</Text>
            </Snackbar>
            <SkeletonContainer isLoading={loading}>
                <View style={Co_Style.sticky_Btn} >
                    <View style={Co_Style.bottomView} >
                        <View style={Co_Style.inner_bottomView}>
                            {fee ?
                                <Button title={withS} onPress={() => navigation.navigate("orderPlaced", { wf: Tm, fee: fee, item: CartData.length })} />
                                : <Button title={withOutS} onPress={() => navigation.navigate("orderPlaced", { wf: Tm, fee: fee, item: CartData.length })} />
                            }
                        </View>
                    </View>
                </View>
            </SkeletonContainer>
        </View >
    )
}
export default CheckOutScreen;