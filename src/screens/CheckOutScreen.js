import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, SafeAreaView, Button } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { RadioButton, Snackbar } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons'
import { useStyles } from '../styles/checkOutResponsiveStyle';
import { submitActions } from '../store/dataSlice'
import { SkeletonContainer } from 'react-native-dynamic-skeletons';

const CheckOutScreen = ({ navigation, route }) => {
    // const AddressData = useSelector(state => state.userData.userAddress);
    const AddressData = useSelector(state => state.userData.user_data)
    const CartData = useSelector(state => state.cartData.cart);
    // console.log("ffff", AddressData)
    const Co_Style = useStyles();
    const [loading, setLoading] = useState(true);
    const [checked, setChecked] = useState('ok');
    // console.log("dddddd", checked)
    const Tm = route.params.Tm;
    const fee = route.params.fee;
    const Tp = route.params.Tp;
    // console.log("ffff", (Tm + fee).toFixed(2))
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

    // {fee == 50 ?
    //     <Text style={styles.pay_text}>₹{Tm + fee}</Text>
    //     : <Text style={styles.pay_text}>₹{Tm}</Text>
    // }

    // const addOne = (id, quant) => {
    //     dispatch(submitActions.quantity(
    //         {
    //             id: id,
    //             quantity: quant + 1
    //         }
    //     ));
    // }
    // const subOne = (id, quant) => {
    //     if (quant > 1)
    //         dispatch(submitActions.quantity(
    //             {
    //                 id: id,
    //                 quantity: quant - 1
    //             }
    //         ));
    // }
    // const removeHandler = (index) => {
    //     dispatch(submitActions.remove(
    //         {
    //             index: index
    //         }
    //     ))
    // }

    // const totalAmount = () => {
    //     let sum = 0;
    //     for (let i = 0; i < CartData.length; i++) {
    //         sum = sum + CartData[i].oldprice * CartData[i].quantity
    //     }
    //     return sum;
    // }
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
                    {/* <View style={styles.user_nameRoot} >
                        <Text style={styles.user_nameRoot_text}>
                            Hi {AddressData[0].firstname} {AddressData[0].Lastname}, Welcome to Craggy
                        </Text>
                    </View> */}
                    <View style={Co_Style.address_root} >
                        {/* {AddressData.length > 0 ? */}
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
                        {/* : ""} */}
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
                                                {/* <TouchableOpacity onPress={() => subOne(e, i.quantity)} style={(i.quantity < 1) ? Co_Style.blackButton : Co_Style.whiteButton} >
                                                <Text style={Co_Style.blackText}>-</Text>
                                            </TouchableOpacity> */}
                                                <Text style={Co_Style.quantity_text} >Qnty</Text>
                                                <Text style={Co_Style.quantity_text} >:</Text>
                                                <Text style={Co_Style.blackText}>{i.quantity}</Text>

                                                {/* 
                                            <TouchableOpacity onPress={() => addOne(e, i.quantity)} style={(i.quantity >= 1) ? Co_Style.blackButton : Co_Style.whiteButton} >
                                                <Text style={(i.quantity >= 1) ? Co_Style.whiteText : Co_Style.blackText} >+</Text>
                                            </TouchableOpacity> */}
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
                        {/* <View style={Co_Style.subtotalRoot}>
                            <Text style={Co_Style.subtotal}>Order Total</Text>
                            <Text Co_Style={Co_Style.total}>₹{totaloldPrice.current}</Text>
                        </View> */}

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
                                {/* <Text style={Co_Style.pay_text}>₹{totalAmount()}</Text> */}
                            </View>
                        </View>
                    </SkeletonContainer>

                    <View style={Co_Style.RadioButtonRoot}></View>
                    {/* <SkeletonContainer isLoading={loading}> 
                    <View style={Co_Style.RadioButtonRoot}>
                            <Text style={Co_Style.other_option}>Other Options</Text>

                            <View style={Co_Style.btnTextRoot}>
                                <Text style={Co_Style.select_text}>Cash On Delivery</Text>
                                <RadioButton
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('first')}
                                />
                            </View>

                            <View style={Co_Style.btnTextRoot}>
                                <Text style={Co_Style.select_text}>Pay-U Money</Text>
                                <RadioButton
                                    value="second"
                                    status={checked === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('second')}
                                />
                            </View> 
                    </View> 
                   </SkeletonContainer> */}

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

const styles = StyleSheet.create({
    // pymentHeading: {
    //     fontSize: 20,
    //     alignSelf: 'flex-end',
    //     paddingLeft: 20,
    //     lineHeight: 35
    // },
    // total_priceRoot: {
    //     height: 50,
    //     width: '100%',
    //     // borderWidth: 0.3,
    //     flexDirection: 'row',
    //     alignSelf: 'center',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     backgroundColor: '#fff',

    // },
    // total_text: {
    //     fontSize: 16,
    //     fontWeight: "700",
    //     fontFamily: 'Raleway',
    //     paddingLeft: '5%'
    // },
    // other_option: {
    //     fontSize: 16,
    //     fontWeight: "600",
    //     fontFamily: 'Raleway',
    //     paddingLeft: '5%',
    //     paddingBottom: 8
    // },
    // total_price: {
    //     fontSize: 16,
    //     fontWeight: "700",
    //     fontFamily: 'Raleway',
    //     paddingRight: '5%',
    // },
    // user_nameRoot: {
    //     height: 60,
    //     backgroundColor: '#fff',
    //     // flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginTop: '1%'
    // },
    // user_nameRoot_text: {
    //     fontSize: 19,
    //     fontWeight: '600',
    //     color: 'grey'
    // },
    // address_root: {
    //     marginTop: '1%',
    //     backgroundColor: '#fff'
    // },
    // delivert_address_text: {
    //     fontSize: 18,
    //     fontWeight: '700',
    //     padding: '5%'
    // },
    // user_adrdress_root: {
    //     height: 95,
    //     width: "90%",
    //     alignSelf: 'center',
    //     borderWidth: 1,
    //     borderRadius: 10,
    //     borderColor: '#DDDDDD',
    //     marginBottom: '5%',
    //     marginTop: 5
    // },
    // user_name_default_root: {
    //     width: '90%',
    //     // height: '100%',
    //     alignSelf: 'center',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     marginTop: '2%'
    // },
    // user_name: {
    //     fontSize: 17,
    //     fontWeight: '700',
    // },

    // home_btn_root: {
    //     height: 25,
    //     width: 50,
    //     backgroundColor: '#C68625',
    //     borderRadius: 4,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    // user_address_text_root: {
    //     width: '90%',
    //     alignSelf: 'center',
    //     marginTop: 5
    // },
    // user_address_text: {
    //     fontSize: 14,
    //     fontWeight: '400'
    // },
    // user_phone: {
    //     fontSize: 14,
    //     fontWeight: '700',
    //     paddingTop: 3
    // },
    // order_summary_root: {
    //     height: 60,
    //     width: '100%',
    //     // borderBottomWidth: 1,
    //     // borderBottomColor: '#DDDDDD',
    //     backgroundColor: '#fff',
    //     marginTop: '1%',
    //     justifyContent: 'center',
    // },
    // order_summary_text: {
    //     fontSize: 18,
    //     fontWeight: '700',
    //     paddingLeft: '5%'
    // },
    // Snackbar_style: {
    //     width: "70%",
    //     height: 70,
    //     alignSelf: 'center',
    //     position: 'absolute',
    //     zIndex: 3,
    //     bottom: 150,
    //     opacity: 0.7
    // },
    // Snackbar_text: {
    //     color: '#fff',
    //     fontSize: 15,
    //     textAlign: 'center'
    // },
    // to_pay_root: {
    //     height: 60,
    //     width: '100%',
    //     backgroundColor: '#fff',
    //     marginTop: '0.5%',
    //     // borderBottomWidth: 1,
    //     // borderBottomColor: '#DDDDDD',
    //     // justifyContent: 'space-between',
    //     // flexDirection: 'row'
    // },
    // inner_pay_root: {
    //     width: '90%',
    //     alignSelf: 'center',
    //     justifyContent: 'space-between',
    //     flexDirection: 'row'
    // },
    // pay_text: {
    //     fontSize: 18,
    //     fontWeight: '400',
    //     // color: 'grey',
    //     paddingTop: 15
    // },
    // shipping_icon: {
    //     marginLeft: "5%",
    //     marginTop: '19%'
    // },
    // RadioButtonRoot: {
    //     marginTop: "1%",
    //     height: 57,
    //     // height: 225
    //     // bottom:'5%'
    // },
    // btnTextRoot: {
    //     flexDirection: 'row',
    //     height: 50,
    //     width: "90%",
    //     borderWidth: 0.3,
    //     borderRadius: 4,
    //     marginBottom: "6%",
    //     alignSelf: 'center',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#fff'
    // },
    // select_text: {
    //     fontSize: 15,
    //     // fontWeight: "700",
    //     // fontFamily: 'Raleway',
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
    //     width: '100%',
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
    //     justifyContent: 'center',
    //     alignSelf: 'center'
    // },




    // // btn_Coninue: {
    // //     height: 60,
    // //     width: "100%",
    // //     // paddingTop: 5,
    // //     // borderRadius: 20,
    // //     // marginTop: 13,
    // //     // backgroundColor: '#C68625',
    // //     backgroundColor: '#fff',
    // //     // justifyContent: 'center',
    // //     // alignSelf: 'center',
    // //     // alignItems: 'center',
    // //     // marginRight: "5%"
    // //     // marginBottom: '5%',
    // //     position: 'absolute',
    // //     bottom: 0,
    // //     zIndex: 2
    // // },
    // // buttonText: {
    // //     height: 60,
    // //     width: "100%",
    // //     color: 'white',
    // //     // textAlign: 'center',
    // //     // paddingTop: 9,
    // //     // fontWeight: "700",
    // //     // fontFamily: 'Raleway',
    // //     // fontSize: 15,
    // //     // lineHeight: 13
    // // },
    // dataRoot: {
    //     flexDirection: 'row',
    //     width: '90%',
    //     height: 80,
    //     // borderColor: 'red', 
    //     // borderWidth: 1, 
    //     alignSelf: 'center',
    //     marginTop: 15,
    //     marginBottom: 15,
    // },
    // dataImgRoot: {
    //     height: 80,
    //     width: '23%',
    //     borderRadius: 15
    // },
    // dataImg: {
    //     height: '100%',
    //     width: '100%',
    //     borderRadius: 15
    // },
    // centerTextRoot: {
    //     // borderColor: 'red', 
    //     // borderWidth: 1, 
    //     height: 80,
    //     marginLeft: 10
    // },
    // textRoot: {
    //     height: 48,
    //     width: '44%',
    //     // borderRadius: 15,
    //     // borderColor: 'blue',
    //     // borderWidth: 1,
    // },
    // textDescription: {
    //     fontSize: 12,
    //     fontWeight: '500',
    //     fontFamily: 'Raleway',
    //     lineHeight: 17,
    //     paddingLeft: 15,
    //     paddingTop: 9
    // },
    // blank_div: {
    //     alignSelf: 'flex-end',
    //     height: 20
    // },
    // textPriceRoot: {
    //     height: 35,
    //     width: '40%',
    //     flexDirection: 'row',
    //     marginLeft: '-75%',
    //     marginTop: '16%'

    // },
    // price: {
    //     fontSize: 12,
    //     fontWeight: '700',
    //     fontFamily: 'Lato',
    //     lineHeight: 15

    // },
    // slace: {
    //     fontSize: 10,
    //     fontWeight: '300',
    //     fontFamily: 'Lato',
    //     lineHeight: 12,
    //     letterSpacing: 5
    // },
    // oldprice: {
    //     fontSize: 14,
    //     fontWeight: '400',
    //     fontFamily: 'Lato',
    //     color: '#444444',
    //     textDecorationLine: 'line-through',
    //     lineHeight: 15
    // },
    // oldprice1: {
    //     fontSize: 14,
    //     fontWeight: '400',
    //     fontFamily: 'Lato',
    //     color: '#444444',
    //     textDecorationLine: 'line-through',
    //     lineHeight: 17
    // },
    // buttonRoot: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-around',
    //     alignItems: 'center',
    //     borderColor: '#333333',
    //     borderWidth: 2,
    //     borderRadius: 50,
    //     height: 35,
    //     width: 90,
    //     marginLeft: '7%',
    //     marginTop: '12%'
    // },


    // blackButton: {
    //     backgroundColor: 'black',
    //     borderColor: 'black',
    //     borderWidth: 2,
    //     borderRadius: 50,
    //     height: 20,
    //     width: 20,
    //     marginTop: 5,
    //     color: 'white'
    // },
    // whiteButton: {
    //     // backgroundColor: 'none',
    //     borderColor: 'transparent',
    //     borderWidth: 2,
    //     borderRadius: 50,
    //     height: 20,
    //     width: 20,
    //     marginTop: 5,
    //     color: 'black'
    // },

    // whiteText: {
    //     color: 'white',
    //     alignSelf: "center",
    //     marginTop: -2,
    //     fontWeight: '800',
    // },
    // blackText: {
    //     color: 'black',
    //     alignSelf: "center",
    //     fontWeight: '700',
    //     fontFamily: 'Lato',
    //     fontSize: 12,
    //     lineHeight: 19
    // },

    // baseLine: {
    //     height: 1,
    //     width: '90%',
    //     backgroundColor: '#D9D9D9',
    //     // marginTop: 10,
    //     alignSelf: 'center'
    //     // marginLeft: '-78%',
    // },
})