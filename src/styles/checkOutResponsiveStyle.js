import { CreateResponsiveStyle, DEVICE_SIZES, maxSize } from 'rn-responsive-styles';
// import { theme } from '../../src/core/theme';

export const useStyles = CreateResponsiveStyle(
    {
        wrapper: {},
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
            fontFamily: 'Raleway',
            paddingLeft: '5%'
        },
        other_option: {
            fontSize: 16,
            fontWeight: "600",
            fontFamily: 'Raleway',
            paddingLeft: '5%',
            paddingBottom: 8
        },
        total_price: {
            fontSize: 16,
            fontWeight: "700",
            fontFamily: 'Raleway',
            paddingRight: '5%',
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
        delivery_address_text: {
            fontSize: 18,
            fontWeight: '700',
            padding: '5%'
        },
        user_adrdress_root: {
            height: 95,
            width: "90%",
            alignSelf: 'center',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#DDDDDD',
            marginBottom: '5%',
            marginTop: 3
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
        shipping_icon: {
            marginLeft: "5%",
            marginTop: '19%'
        },
        RadioButtonRoot: {
            marginTop: "1%",
            height: 57,
            // height: 225
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
            // fontFamily: 'Raleway',
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
        //     // fontFamily: 'Raleway',
        //     // fontSize: 15,
        //     // lineHeight: 13
        // },
        product_detail_root: {
            backgroundColor: '#fff',
            marginTop: '1%'
        },
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
            width: '45%',
            // borderRadius: 15,
            // borderColor: 'blue',
            // borderWidth: 1,
        },
        textDescription: {
            fontSize: 12,
            fontWeight: '500',
            fontFamily: 'Raleway',
            lineHeight: 17,
            paddingLeft: 0,
            paddingTop: 0
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
            fontFamily: 'Lato',
            lineHeight: 15

        },
        slace: {
            fontSize: 10,
            fontWeight: '300',
            fontFamily: 'Lato',
            lineHeight: 12,
            letterSpacing: 5
        },
        oldprice: {
            fontSize: 14,
            fontWeight: '400',
            fontFamily: 'Lato',
            color: '#444444',
            textDecorationLine: 'line-through',
            lineHeight: 15
        },
        oldprice1: {
            fontSize: 14,
            fontWeight: '400',
            fontFamily: 'Lato',
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
            fontFamily: 'Lato',
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

    },

    {
        /** Medium Device Size */

        [maxSize(DEVICE_SIZES.MD)]: {
            user_adrdress_root: {
                height: 105,
                width: "90%",
                alignSelf: 'center',
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#DDDDDD',
                marginBottom: '5%',
                marginTop: 0
            },
            user_name: {
                fontSize: 18,
                fontWeight: '700',
            },

            home_btn_root: {
                height: 30,
                width: 70,
                backgroundColor: '#C68625',
                borderRadius: 4,
                justifyContent: 'center',
                alignItems: 'center'
            },
            user_address_text: {
                fontSize: 16,
                fontWeight: '400'
            },
            user_phone: {
                fontSize: 16,
                fontWeight: '700',
                paddingTop: 3
            },
            textRoot: {
                height: 40,
                width: '44%',
                marginLeft: '5%',
                // borderRadius: 15,
                // borderColor: 'grey',
                // borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center'
            },
            textDescription: {
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Raleway',
                lineHeight: 17,
                paddingLeft: 0,
                paddingTop: 0
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
                marginLeft: '20%',
                marginTop: '5%'
            },
            textPriceRoot: {
                height: 35,
                width: '40%',
                flexDirection: 'row',
                marginLeft: '-65%',
                marginTop: '8%'

            },

        },
        /** Extra Small Device Size */

        [maxSize(DEVICE_SIZES.XS)]: {
            user_adrdress_root: {
                height: 95,
                width: "90%",
                alignSelf: 'center',
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#DDDDDD',
                marginBottom: '5%',
                marginTop: 3
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
            user_address_text: {
                fontSize: 14,
                fontWeight: '400'
            },
            user_phone: {
                fontSize: 14,
                fontWeight: '700',
                paddingTop: 3
            },
            textRoot: {
                height: 48,
                width: '45%',
                marginLeft: '1%',
                // borderRadius: 15,
                // borderColor: 'blue',
                // borderWidth: 1,
            },
            textDescription: {
                fontSize: 12,
                fontWeight: '500',
                fontFamily: 'Raleway',
                lineHeight: 17,
                paddingLeft: 1,
                paddingTop: 0
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
            textPriceRoot: {
                height: 35,
                width: '40%',
                flexDirection: 'row',
                marginLeft: '-75%',
                marginTop: '16%'

            },

        },
    },
)