import { CreateResponsiveStyle, DEVICE_SIZES, maxSize } from 'rn-responsive-styles';
// import { theme } from '../../src/core/theme';

export const useStyles = CreateResponsiveStyle(
    {
        wrapper: {},
        searchRoot: {
            // width: '95%',
            // alignSelf: 'center',
            justifyContent: 'space-between',
            // alignItems: 'center',
            flexDirection: 'row',
            // borderWidth: 1,
        },
        searchImgRoot: {
            marginTop: 35,
            marginRight: '35%',
            width: '100%',
            // borderWidth: 1,
            // borderColor: 'blue'
            height: 50,
            // justifyContent: 'center'
            // alignSelf: 'center'
        },
        mycartText: {
            alignSelf: 'center',
            fontSize: 14,
            fontWeight: '600',
            fontFamily: 'Raleway',
            lineHeight: 19,
            color: '#333333',
            paddingTop: 0
        },
        searchImg: {
            height: 50,
            width: 45,
            resizeMode: 'cover',
            borderRadius: 4
        },
        searchIconRoot: {
            marginTop: 20,
            width: '71%',
            marginLeft: '4%'
        },
        emptyCart: {
            fontSize: 25,
            textAlign: 'center',
            paddingTop: 200
        },
        dataRoot: {
            flexDirection: 'row',
            width: '90%',
            height: 80,
            // borderColor: 'red',
            // borderWidth: 1,
            alignSelf: 'center',
            // marginTop: "5%",
            marginBottom: "2%"
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
            width: '42%',
            // borderRadius: 15,
            // borderColor: 'blue',
            // borderWidth: 1,
            marginLeft: 5,

        },
        textDescription: {
            fontSize: 12,
            fontWeight: '500',
            fontFamily: 'Raleway',
            lineHeight: 17,
            paddingLeft: 15,
            paddingTop: 9
        },
        textPriceRoot: {
            height: 30,
            width: '42%',
            flexDirection: 'row',
            marginLeft: '-76%',
            marginTop: '16%',
            // borderColor: 'blue',
            // borderWidth: 1,
            // paddingLeft: 15

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
            lineHeight: 17
        },
        free_price: {
            fontSize: 14,
            fontWeight: '400',
            fontFamily: 'Lato',
            color: '#444444',
            lineHeight: 17
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
            marginTop: -2,
            fontWeight: '400',
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
        TextInputRoot: {
            flexDirection: 'row',
            height: 50,
            width: '100%',
            alignSelf: 'center',
            marginTop: 10,
            backgroundColor: '#fff',
            marginBottom: 10
        },
        coupon_icon: {
            marginLeft: '5%',
            padding: '3%'
        },
        coupon_text: {
            fontSize: 20,
            padding: '3%',
            marginLeft: '-2%'
        },
        TextInputRoot2: {
            flexDirection: 'row',
            height: 50,
            width: '100%',
            alignSelf: 'center',
            backgroundColor: '#fff',
            marginBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#D9D9D9'
        },
        textInputStyle: {
            height: 45,
            width: '100%',
            borderRadius: 20,
            borderWidth: 1,
            borderColor: '#000000',
            paddingLeft: 20,
            fontSize: 10,
            fontFamily: 'Raleway',
            fontStyle: '700',
            lineHeight: 13,
            backgroundColor: '#E3E3E3'
        },
        price_summary: {
            fontSize: 20,
            fontWeight: '700',
            paddingTop: '2%',
            paddingLeft: '8%',
        },
        promoButton: {
            position: 'absolute',
            height: 35,
            width: 115,
            backgroundColor: '#222222',
            borderRadius: 20,
            marginLeft: '63%',
            margin: 5,

        },
        promoText: {
            color: '#fff',
            fontSize: 10,
            fontWeight: '700',
            fontFamily: 'Raleway',
            lineHeight: 17,
        },
        totalRoot: {
            height: 170,
            width: '85%',
            alignSelf: 'center',
            marginTop: '3%'
        },

        subtotalRoot: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 35,
            marginTop: '3%'
        },
        subtotal: {
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Raleway',
            lineHeight: 17
        },
        total: {
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Lato',
            lineHeight: 17
        },
        maintotal: {
            fontSize: 16,
            fontWeight: '700',
            fontFamily: 'Raleway',
            lineHeight: 19
        },
        mainprice: {
            fontSize: 16,
            fontWeight: '700',
            fontFamily: 'Lato',
            lineHeight: 19
        },
        baseLine2: {
            height: 1,
            width: '100%',
            backgroundColor: '#DDDDDD',
            marginTop: 12
        },
        checkoutbuttonRoot: {
            height: 250,
            width: '100%',
            marginTop: 10
        },
        checkoutButton: {
            height: 45,
            width: '90%',
            backgroundColor: '#C68625',
            marginTop: 19,
            alignSelf: 'center',
            borderRadius: 20
        },
        countinueButton: {
            height: 45,
            width: '90%',
            backgroundColor: '#222222',
            marginTop: 19,
            alignSelf: 'center',
            borderRadius: 20
        },
        checkoutText: {
            fontSize: 10,
            color: '#fff',
            lineHeight: 25,
            fontWeight: '700',
            fontFamily: 'Raleway'
        },
        Snackbar_style: {
            width: "70%",
            height: 70,
            alignSelf: 'center',
            position: 'absolute',
            zIndex: 3,
            bottom: 250,
            opacity: 0.7
        },
        Snackbar_text: {
            color: '#fff',
            fontSize: 15,
            textAlign: 'center'
        },

    },

    {
        /** Medium Device Size */

        [maxSize(DEVICE_SIZES.MD)]: {
            mycartText: {
                alignSelf: 'center',
                fontSize: 17,
                fontWeight: '600',
                fontFamily: 'Raleway',
                lineHeight: 19,
                color: '#333333',
                paddingTop: 0
            },
            emptyCart: {
                fontSize: 25,
                textAlign: 'center',
                paddingTop: 100
            },
            dataRoot: {
                flexDirection: 'row',
                width: '90%',
                height: 80,
                // borderColor: 'red',
                // borderWidth: 1,
                alignSelf: 'center',
                marginTop: "2%",
                marginBottom: "2%"
            },
            textRoot: {
                height: 40,
                width: '50%',
                // borderRadius: 15,
                // borderColor: 'blue',
                // borderWidth: 1,
                marginLeft: 15,
                // justifyContent: 'center',
                alignItems: 'center'

            },
            textDescription: {
                fontSize: 15,
                fontWeight: '500',
                fontFamily: 'Raleway',
                lineHeight: 17,
                paddingLeft: 15,
                paddingTop: 9
            },
            textPriceRoot: {
                height: 32,
                width: '50%',
                flexDirection: 'row',
                marginLeft: '-71%',
                marginTop: '7%',
                justifyContent: 'center',
                alignItems: 'center'
            },
            coupon_icon: {
                marginLeft: '5%',
                padding: '2%'
            },
            coupon_text: {
                fontSize: 23,
                padding: '1.5%',
                marginLeft: '-2%'
            },
            price_summary: {
                fontSize: 21,
                fontWeight: '700',
                paddingTop: '2%',
                paddingLeft: '8%',
            },
            totalRoot: {
                height: 200,
                width: '85%',
                alignSelf: 'center',
                marginTop: '0%'
            },


        },
        /** Extra Small Device Size */

        [maxSize(DEVICE_SIZES.XS)]: {

            mycartText: {
                alignSelf: 'center',
                fontSize: 14,
                fontWeight: '600',
                fontFamily: 'Raleway',
                lineHeight: 19,
                color: '#333333',
                paddingTop: 0
            },
            emptyCart: {
                fontSize: 25,
                textAlign: 'center',
                paddingTop: 200
            },
            dataRoot: {
                flexDirection: 'row',
                width: '90%',
                height: 80,
                // borderColor: 'blue',
                // borderWidth: 1,
                alignSelf: 'center',
                // marginTop: "5%",
                marginBottom: "2%"
            },
            textRoot: {
                height: 48,
                width: '42%',
                // borderRadius: 15,
                // borderColor: 'blue',
                // borderWidth: 1,
                marginLeft: 5

            },
            textDescription: {
                fontSize: 12,
                fontWeight: '500',
                fontFamily: 'Raleway',
                lineHeight: 17,
                paddingLeft: 15,
                paddingTop: 9
            },
            textPriceRoot: {
                height: 30,
                width: '42%',
                flexDirection: 'row',
                marginLeft: '-76%',
                marginTop: '16%',
                // borderColor: 'blue',
                // borderWidth: 1,
                paddingLeft: 15

            },
            // TextInputRoot: {
            //     flexDirection: 'row',
            //     height: 50,
            //     width: '100%',
            //     alignSelf: 'center',
            //     marginTop: 10,
            //     backgroundColor: '#fff',
            //     marginBottom: 10
            // },
            coupon_icon: {
                marginLeft: '5%',
                padding: '3%'
            },
            coupon_text: {
                fontSize: 20,
                padding: '3%',
                marginLeft: '-2%'
            },
            price_summary: {
                fontSize: 20,
                fontWeight: '700',
                paddingTop: '2%',
                paddingLeft: '8%',
            },
            totalRoot: {
                height: 170,
                width: '85%',
                alignSelf: 'center',
                marginTop: '3%'
            },

        },
    },
)