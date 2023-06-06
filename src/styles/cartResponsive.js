import { CreateResponsiveStyle, DEVICE_SIZES, maxSize } from 'rn-responsive-styles';
import { Platform } from 'react-native'
import { theme } from '../../src/core/theme';

export const useStyles = CreateResponsiveStyle(
    {
        wrapper: {},
        searchRoot: {
            justifyContent: 'space-between',
            flexDirection: 'row',
        },
        searchImgRoot: {
            marginTop: 35,
            marginRight: '35%',
            width: '100%',
            height: 50,
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
            alignSelf: 'center',
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
            height: 80,
            marginLeft: 10
        },
        textRoot: {
            height: 48,
            width: '42%',
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
        },
        price: {
            fontSize: 12,
            fontWeight: '700',
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
            fontSize: 12,
            fontWeight: '600',
            fontFamily: 'Lato',
            color: '#444444',
            textDecorationLine: 'line-through',
            lineHeight: 15
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
            marginTop: '8%'
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
            alignSelf: 'center'
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
            fontFamily: 'Lato'
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
            lineHeight: 19
        },
        mainprice: {
            fontSize: 16,
            fontWeight: '700',
            lineHeight: 19
        },
        baseLine2: {
            height: 1,
            width: '100%',
            backgroundColor: '#DDDDDD',
            marginTop: 12
        },
        checkoutbuttonRoot: {
            height: 240,
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
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS16 : theme.fontsM.fontS16,
                fontWeight: (Platform.OS === 'ios') ? '600' : '600',
            },
            emptyCart: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS14 : theme.fontsM.fontS14,
                fontWeight: (Platform.OS === 'ios') ? '400' : '400',
                paddingTop: 100,
            },
            oldprice: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS13 : theme.fontsM.fontS12,
                fontWeight: (Platform.OS === 'ios') ? '600' : '600',
            },
            price: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS15 : theme.fontsM.fontS14,
                fontWeight: (Platform.OS === 'ios') ? '600' : '700',
            },
            dataRoot: {
                flexDirection: 'row',
                width: '90%',
                height: 80,
                alignSelf: 'center',
                marginTop: "2%",
                marginBottom: "2%"
            },
            textRoot: {
                height: 40,
                width: '50%',
                marginLeft: 15,
                alignItems: 'center'

            },

            textDescription: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS14 : theme.fontsM.fontS14,
                fontWeight: (Platform.OS === 'ios') ? '400' : '400',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH18 : theme.lineHeightM.lineH16,
                textAlign: 'center'
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
                fontSize: (Platform.OS === 'ios') ? 16 : 18,
                padding: '2.2%',
                marginLeft: '-2%',
                fontWeight: (Platform.OS === 'ios') ? '600' : '500',
                fontFamily: 'Lato'
            },

            price_summary: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS16 : theme.fontsM.fontS16,
                fontWeight: (Platform.OS === 'ios') ? '600' : '500',
                paddingTop: (Platform.OS === 'ios') ? '2.5%' : '2%',
                paddingLeft: '8%',
            },
            totalRoot: {
                height: 200,
                width: '85%',
                alignSelf: 'center',
                marginTop: '0%'
            },
            subtotal: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS13 : theme.fontsM.fontS14,
                fontWeight: (Platform.OS === 'ios') ? '500' : '500',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH14 : theme.lineHeightM.lineH15,
            },
            free_price: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS13 : theme.fontsM.fontS14,
                fontWeight: (Platform.OS === 'ios') ? '500' : '600',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH14 : theme.lineHeightM.lineH15,
            },
            total: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS13 : theme.fontsM.fontS14,
                fontWeight: (Platform.OS === 'ios') ? '500' : '600',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH14 : theme.lineHeightM.lineH15,
            },
            maintotal: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS15 : theme.fontsM.fontS16,
                fontWeight: (Platform.OS === 'ios') ? '700' : '700',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH14 : theme.lineHeightM.lineH18,
            },
            mainprice: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS15 : theme.fontsM.fontS16,
                fontWeight: (Platform.OS === 'ios') ? '700' : '700',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH14 : theme.lineHeightM.lineH18,
            },
            checkoutButton: {
                marginTop: (Platform.OS === 'ios') ? '3%' : '3%',
            },
            checkoutText: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS13 : theme.fontsM.fontS13,
                fontWeight: (Platform.OS === 'ios') ? '500' : '500',
            },


        },
        /** Extra Small Device Size */

        [maxSize(DEVICE_SIZES.XS)]: {

            mycartText: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS14 : theme.fontsM.fontS13,
                fontWeight: (Platform.OS === 'ios') ? '700' : '600',
            },
            emptyCart: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS14 : theme.fontsM.fontS14,
                fontWeight: (Platform.OS === 'ios') ? '400' : '400',
            },
            oldprice: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS12 : theme.fontsM.fontS13,
                fontWeight: (Platform.OS === 'ios') ? '600' : '600',
            },
            dataRoot: {
                flexDirection: 'row',
                width: '90%',
                height: 80,
                alignSelf: 'center',
                marginBottom: "2%"
            },
            textRoot: {
                height: 48,
                width: '42%',
                marginLeft: 5

            },
            textDescription: {
                fontSize: (Platform.OS === 'ios') ? 13 : 12,
                fontWeight: (Platform.OS === 'ios') ? '400' : '500',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH18 : theme.lineHeightM.lineH16,
                textAlign: 'center'
            },
            textPriceRoot: {
                height: 30,
                width: '42%',
                flexDirection: 'row',
                marginLeft: '-76%',
                marginTop: '16%',
                paddingLeft: 15

            },

            coupon_icon: {
                marginLeft: '5%',
                padding: '3%'
            },
            coupon_text: {
                fontSize: (Platform.OS === 'ios') ? 15 : 18,
                padding: '3.8%',
                marginLeft: '-3%',
                fontWeight: (Platform.OS === 'ios') ? '600' : '500',
                fontFamily: 'Lato'
            },
            price_summary: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS15 : theme.fontsM.fontS16,
                fontWeight: (Platform.OS === 'ios') ? '600' : '500',
                paddingTop: (Platform.OS === 'ios') ? '4%' : '3.8%',
                paddingLeft: '8%',

            },
            totalRoot: {
                height: 170,
                width: '85%',
                alignSelf: 'center',
                marginTop: '3%'
            },
            price: {
                fontSize: (Platform.OS === 'ios') ? 14 : 13,
                fontWeight: (Platform.OS === 'ios') ? '700' : '700',
                lineHeight: (Platform.OS === 'ios') ? 15 : 15
            },
            subtotal: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS12 : theme.fontsM.fontS13,
                fontWeight: (Platform.OS === 'ios') ? '500' : '500',
            },
            total: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS13 : theme.fontsM.fontS14,
                fontWeight: (Platform.OS === 'ios') ? '500' : '600',
            },
            free_price: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS13 : theme.fontsM.fontS14,
                fontWeight: (Platform.OS === 'ios') ? '500' : '600',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH14 : theme.lineHeightM.lineH15,
            },
            maintotal: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS15 : theme.fontsM.fontS16,
                fontWeight: (Platform.OS === 'ios') ? '700' : '700',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH14 : theme.lineHeightM.lineH18,
            },
            mainprice: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS15 : theme.fontsM.fontS16,
                fontWeight: (Platform.OS === 'ios') ? '700' : '700',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH14 : theme.lineHeightM.lineH18,
            },
            checkoutButton: {
                marginTop: (Platform.OS === 'ios') ? '5%' : '10%',
            },
            checkoutText: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS11 : theme.fontsM.fontS11,
                fontWeight: (Platform.OS === 'ios') ? '600' : '600',
            },
        },
    },
)