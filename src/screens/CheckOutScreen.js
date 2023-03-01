import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, SafeAreaView, Button } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { RadioButton, Snackbar } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons'
import { submitActions } from '../store/dataSlice'
import { SkeletonContainer } from 'react-native-dynamic-skeletons';

const CheckOutScreen = ({ navigation, route }) => {
    const AddData = useSelector(state => state.userData.userAddress);
    const CartData = useSelector(state => state.cartData.cart);
    // console.log("ffff", AddData)
    const [loading, setLoading] = useState(true);
    const [checked, setChecked] = useState('ok');
    // console.log("dddddd", checked)
    const Tm = route.params.Tm;
    const fee = route.params.fee;
    const Tp = route.params.Tp;
    // console.log("ffff", Tp)
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

    let widthS = "Order Place  " + "₹" + JSON.stringify(Tm + fee)
    let widthOutS = "Order Place  " + "₹" + JSON.stringify(Tm)

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
                        <View style={styles.total_priceRoot}>
                            <Text style={styles.total_text}>Total</Text>
                            {fee ?
                                <Text style={styles.total_price}>₹{Tm + fee}</Text>
                                : <Text style={styles.total_price}>₹{Tm}</Text>
                            }
                        </View>
                    </SkeletonContainer>
                    {/* <View style={styles.user_nameRoot} >
                        <Text style={styles.user_nameRoot_text}>
                            Hi {AddData[0].firstname} {AddData[0].Lastname}, Welcome to Craggy
                        </Text>
                    </View> */}
                    <View style={styles.address_root} >
                        <SkeletonContainer isLoading={loading}>
                            <Text style={styles.delivert_address_text}>Delivery Address</Text>
                        </SkeletonContainer>
                        <SkeletonContainer isLoading={loading}>
                            {AddData.length > 0 ?
                                <View style={styles.user_adrdress_root}>
                                    <View style={styles.user_name_default_root}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={styles.user_name}>{AddData[0].firstname} {AddData[0].Lastname}</Text>
                                        </View>
                                        <TouchableOpacity style={styles.home_btn_root} onPress={() => navigation.navigate('editAddress')}>
                                            <Text style={{ color: '#fff' }}>Edit</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.user_address_text_root}>
                                        <Text style={styles.user_address_text}>{AddData[0].flate}, {AddData[0].Apartment}, {AddData[0].City}, {AddData[0].State} {AddData[0].Pincode}</Text>
                                        <Text style={styles.user_phone}> {AddData[0].phone} </Text>
                                    </View>
                                </View>
                                : <View style={styles.user_adrdress_root}></View>}
                        </SkeletonContainer>
                    </View>

                    <SkeletonContainer isLoading={loading}>
                        <View style={styles.order_summary_root}>
                            <Text style={styles.order_summary_text} >Order Summary ({CartData.length} Item)</Text>
                        </View>
                    </SkeletonContainer>

                    {CartData.map((i, e) => {
                        return (
                            <View style={{ backgroundColor: '#fff', marginTop: '1%' }} key={e}>
                                <View key={e} style={styles.dataRoot}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate("Product", i.categoriesDetail_id)}
                                        style={styles.dataImgRoot}
                                    >
                                        <SkeletonContainer isLoading={loading}>
                                            <Image source={{ uri: i.images }} style={styles.dataImg} />
                                        </SkeletonContainer>
                                    </TouchableOpacity>

                                    <SkeletonContainer isLoading={loading}>
                                        <View style={styles.textRoot} >
                                            <Text numberOfLines={2} style={styles.textDescription}>{i.description}</Text>
                                        </View>
                                    </SkeletonContainer>

                                    <View>
                                        <View style={styles.blank_div}></View>

                                        <SkeletonContainer isLoading={loading}>
                                            <View style={styles.buttonRoot}>
                                                {/* <TouchableOpacity onPress={() => subOne(e, i.quantity)} style={(i.quantity < 1) ? styles.blackButton : styles.whiteButton} >
                                                <Text style={styles.blackText}>-</Text>
                                            </TouchableOpacity> */}
                                                <Text style={{ fontSize: 12, fontWeight: '700' }} >Qnty</Text>
                                                <Text style={{ fontSize: 12, fontWeight: '700' }} >:</Text>
                                                <Text style={styles.blackText}>{i.quantity}</Text>

                                                {/* 
                                            <TouchableOpacity onPress={() => addOne(e, i.quantity)} style={(i.quantity >= 1) ? styles.blackButton : styles.whiteButton} >
                                                <Text style={(i.quantity >= 1) ? styles.whiteText : styles.blackText} >+</Text>
                                            </TouchableOpacity> */}
                                            </View>
                                        </SkeletonContainer>
                                    </View>
                                    <SkeletonContainer isLoading={loading}>
                                        <View style={styles.textPriceRoot} key={e}>
                                            <Text style={styles.price}>₹{totalPrice.current = i.oldprice * i.quantity}</Text>
                                            <Text style={styles.slace} > / </Text>
                                            <Text style={styles.oldprice}>₹{totaloldPrice.current = i.price * i.quantity}</Text>
                                        </View>
                                    </SkeletonContainer>
                                </View>
                            </View>
                        )
                    })}

                    <SkeletonContainer isLoading={loading}>
                        <View style={styles.order_summary_root}>
                            <Text style={styles.order_summary_text} >Price Summary </Text>
                        </View>
                    </SkeletonContainer>
                    <View style={styles.totalRoot}>
                        <SkeletonContainer isLoading={loading}>
                            <View style={styles.to_pay_root}>
                                <View style={styles.inner_pay_root}>
                                    <Text style={styles.pay_text}>Order Total</Text>

                                    <Text style={styles.pay_text}>₹{totalOldAmount()}</Text>
                                </View>
                            </View>
                        </SkeletonContainer>
                        {/* <View style={styles.subtotalRoot}>
                            <Text style={styles.subtotal}>Order Total</Text>
                            <Text styles={styles.total}>₹{totaloldPrice.current}</Text>
                        </View> */}

                        <SkeletonContainer isLoading={loading}>
                            <View style={styles.to_pay_root}>
                                <View style={styles.inner_pay_root}>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={styles.pay_text}>Shipping</Text>
                                        <TouchableOpacity style={{ marginLeft: "5%", marginTop: '19%' }}>
                                            <Ionicons
                                                name="information-circle-outline"
                                                color={'blue'}
                                                size={18}
                                                onPress={onToggleSnackBar}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    {Tp < 499 ?
                                        <Text style={styles.pay_text}>₹{fee}</Text> :
                                        <Text style={styles.pay_text}>Free</Text>
                                    }
                                </View>
                            </View>
                        </SkeletonContainer>
                        <SkeletonContainer isLoading={loading}>
                            <View style={styles.to_pay_root}>
                                <View style={styles.inner_pay_root}>
                                    <Text style={styles.pay_text}>Promo Discount</Text>

                                    <Text style={styles.pay_text}>n/a</Text>
                                </View>
                            </View>
                        </SkeletonContainer>
                    </View>
                    <SkeletonContainer isLoading={loading}>
                        <View style={styles.to_pay_root}>
                            <View style={styles.inner_pay_root}>
                                <Text style={styles.pay_text}>To Pay</Text>
                                {fee ?
                                    <Text style={styles.pay_text}>₹{Tm + fee}</Text>
                                    : <Text style={styles.pay_text}>₹{Tm}</Text>
                                }
                                {/* <Text style={styles.pay_text}>₹{totalAmount()}</Text> */}
                            </View>
                        </View>
                    </SkeletonContainer>

                    <SkeletonContainer isLoading={loading}>
                        <View style={styles.RadioButtonRoot}>
                            <Text style={styles.other_option}>Other Options</Text>

                            <View style={styles.btnTextRoot}>
                                <Text style={styles.select_text}>Cash On Delivery</Text>
                                <RadioButton
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('first')}
                                />
                            </View>

                            <View style={styles.btnTextRoot}>
                                <Text style={styles.select_text}>Pay-U Money</Text>
                                <RadioButton
                                    value="second"
                                    status={checked === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('second')}
                                />
                            </View>
                        </View>
                    </SkeletonContainer>

                </SafeAreaView>
            </ScrollView>
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                duration={2000}
                style={styles.Snackbar_style}
            >
                <Text style={styles.Snackbar_text}>Shipping charges of Rs. 50.00 wil apply on order below Rs. 499.00</Text>
            </Snackbar>

            <SkeletonContainer isLoading={loading}>
                <View style={styles.sticky_Btn}>
                    <View style={styles.bottomView} >
                        <View style={styles.inner_bottomView}>
                            {fee ?
                                <Button title={widthS} />
                                : <Button title={widthOutS} />
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
    pymentHeading: {
        fontSize: 20,
        alignSelf: 'flex-end',
        paddingLeft: 20,
        lineHeight: 35
    },
    total_priceRoot: {
        height: 50,
        width: '100%',
        // borderWidth: 0.3,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',

    },
    total_text: {
        fontSize: 16,
        fontWeight: "700",
        fontFamily: 'Raleway700',
        paddingLeft: '5%'
    },
    other_option: {
        fontSize: 16,
        fontWeight: "600",
        fontFamily: 'Raleway600',
        paddingLeft: '5%',
        paddingBottom: 8
    },
    total_price: {
        fontSize: 16,
        fontWeight: "700",
        fontFamily: 'Raleway700',
        paddingRight: '5%'
    },
    user_nameRoot: {
        height: 60,
        backgroundColor: '#fff',
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1%'
    },
    user_nameRoot_text: {
        fontSize: 19,
        fontWeight: '600',
        color: 'grey'
    },
    address_root: {
        marginTop: '1%',
        backgroundColor: '#fff'
    },
    delivert_address_text: {
        fontSize: 18,
        fontWeight: '700',
        padding: '5%'
    },
    user_adrdress_root: {
        height: 80,
        width: "90%",
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#DDDDDD',
        marginBottom: '5%',
        marginTop: 5
    },
    user_name_default_root: {
        width: '90%',
        // height: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '2%'
    },
    user_name: {
        fontSize: 17,
        fontWeight: '700',
    },

    home_btn_root: {
        height: 25,
        width: 50,
        backgroundColor: '#C68625',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    user_address_text_root: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 5
    },
    user_address_text: {
        fontSize: 14,
        fontWeight: '400'
    },
    user_phone: {
        fontSize: 14,
        fontWeight: '700',
        paddingTop: 3
    },
    order_summary_root: {
        height: 60,
        width: '100%',
        // borderBottomWidth: 1,
        // borderBottomColor: '#DDDDDD',
        backgroundColor: '#fff',
        marginTop: '1%',
        justifyContent: 'center',
    },
    order_summary_text: {
        fontSize: 18,
        fontWeight: '700',
        paddingLeft: '5%'
    },
    Snackbar_style: {
        width: "70%",
        height: 70,
        alignSelf: 'center',
        position: 'absolute',
        zIndex: 3,
        bottom: 150,
        opacity: 0.7
    },
    Snackbar_text: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center'
    },
    to_pay_root: {
        height: 60,
        width: '100%',
        backgroundColor: '#fff',
        marginTop: '0.5%',
        // borderBottomWidth: 1,
        // borderBottomColor: '#DDDDDD',
        // justifyContent: 'space-between',
        // flexDirection: 'row'
    },
    inner_pay_root: {
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    pay_text: {
        fontSize: 18,
        fontWeight: '400',
        // color: 'grey',
        paddingTop: 15
    },
    RadioButtonRoot: {
        marginTop: "5%",
        height: 225
        // bottom:'5%'
    },
    btnTextRoot: {
        flexDirection: 'row',
        height: 50,
        width: "90%",
        borderWidth: 0.3,
        borderRadius: 4,
        marginBottom: "6%",
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    select_text: {
        fontSize: 15,
        // fontWeight: "700",
        // fontFamily: 'Raleway700',
    },



    sticky_Btn: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        zIndex: 2,
        backgroundColor: '#fff',

    },
    bottomView: {
        height: 60,
        width: '100%',
        justifyContent: 'center',
        // backgroundColor: '#FF9800',
        // alignItems: 'center',
        // position: 'absolute',
        // bottom: 0,
        // zIndex: 99,
    },
    inner_bottomView: {
        height: 50,
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center'
    },




    // btn_Coninue: {
    //     height: 60,
    //     width: "100%",
    //     // paddingTop: 5,
    //     // borderRadius: 20,
    //     // marginTop: 13,
    //     // backgroundColor: '#C68625',
    //     backgroundColor: '#fff',
    //     // justifyContent: 'center',
    //     // alignSelf: 'center',
    //     // alignItems: 'center',
    //     // marginRight: "5%"
    //     // marginBottom: '5%',
    //     position: 'absolute',
    //     bottom: 0,
    //     zIndex: 2
    // },
    // buttonText: {
    //     height: 60,
    //     width: "100%",
    //     color: 'white',
    //     // textAlign: 'center',
    //     // paddingTop: 9,
    //     // fontWeight: "700",
    //     // fontFamily: 'Raleway700',
    //     // fontSize: 15,
    //     // lineHeight: 13
    // },
    dataRoot: {
        flexDirection: 'row',
        width: '90%',
        height: 80,
        // borderColor: 'red', 
        // borderWidth: 1, 
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 15,
    },
    dataImgRoot: {
        height: 80,
        width: '23%',
        borderRadius: 15
    },
    dataImg: {
        height: '100%',
        width: '100%',
        borderRadius: 15
    },
    centerTextRoot: {
        // borderColor: 'red', 
        // borderWidth: 1, 
        height: 80,
        marginLeft: 10
    },
    textRoot: {
        height: 48,
        width: '44%',
        // borderRadius: 15,
        // borderColor: 'blue',
        // borderWidth: 1,
    },
    textDescription: {
        fontSize: 12,
        fontWeight: '500',
        fontFamily: 'Raleway500',
        lineHeight: 17,
        paddingLeft: 15,
        paddingTop: 9
    },
    blank_div: {
        alignSelf: 'flex-end',
        height: 20
    },
    textPriceRoot: {
        height: 35,
        width: '40%',
        flexDirection: 'row',
        marginLeft: '-75%',
        marginTop: '16%'

    },
    price: {
        fontSize: 12,
        fontWeight: '700',
        fontFamily: 'Lato700',
        lineHeight: 15

    },
    slace: {
        fontSize: 10,
        fontWeight: '300',
        fontFamily: 'Lato300',
        lineHeight: 12,
        letterSpacing: 5
    },
    oldprice: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Lato400',
        color: '#444444',
        textDecorationLine: 'line-through',
        lineHeight: 17
    },
    oldprice1: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Lato400',
        color: '#444444',
        textDecorationLine: 'line-through',
        lineHeight: 17
    },
    buttonRoot: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: '#333333',
        borderWidth: 2,
        borderRadius: 50,
        height: 35,
        width: 90,
        marginLeft: '7%',
        marginTop: '12%'
    },


    blackButton: {
        backgroundColor: 'black',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 50,
        height: 20,
        width: 20,
        marginTop: 5,
        color: 'white'
    },
    whiteButton: {
        // backgroundColor: 'none',
        borderColor: 'transparent',
        borderWidth: 2,
        borderRadius: 50,
        height: 20,
        width: 20,
        marginTop: 5,
        color: 'black'
    },

    whiteText: {
        color: 'white',
        alignSelf: "center",
        marginTop: -2,
        fontWeight: '800',
    },
    blackText: {
        color: 'black',
        alignSelf: "center",
        fontWeight: '700',
        // fontFamily: 'Lato700',
        fontSize: 12,
        lineHeight: 19
    },

    baseLine: {
        height: 1,
        width: '90%',
        backgroundColor: '#D9D9D9',
        // marginTop: 10,
        alignSelf: 'center'
        // marginLeft: '-78%',
    },
})