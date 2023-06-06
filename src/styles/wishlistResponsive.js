import { CreateResponsiveStyle, DEVICE_SIZES, maxSize } from 'rn-responsive-styles';

export const useStyles = CreateResponsiveStyle(
    {
        wrapper: {},
        productsListRoot: {
            height: '100%',
            width: '100%',
            alignSelf: 'center',
        },
        product109: {
            height: 252,
            width: '42.2%',
            marginLeft: '5%',
            marginTop: 20,
            marginBottom: 20,
        },
        imgRoot: {
            height: 145,
            width: '100%',
        },
        productImg: {
            height: '100%',
            width: "100%"
        },
        img_icon_root: {
            position: 'absolute',
            alignSelf: 'flex-end',
            marginTop: 10,
            height: 30,
            width: 30,
            backgroundColor: '#C68625',
            borderRadius: 50,
        },
        icon_style: {
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 3
        },
        contentRoot: {
            height: 95,
            width: '100%',
            backgroundColor: '#0D0D0D',
            display: 'flex'
        },
        textRoot: {
            height: 36,
            width: 130,
            alignSelf: 'center',
            justifyContent: 'center',
        },
        contentText: {
            fontSize: 10,
            fontWeight: '300',
            fontFamily: 'Lato',
            lineHeight: 12,
            color: '#FFFFFF',
            alignSelf: 'center'
        },
        baseLine: {
            height: 1,
            width: 145,
            backgroundColor: '#272727',
            marginTop: 10
        },
        priceRoot: {
            flexDirection: 'row',
            height: 17,
            width: "99%",
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 7,
        },
        price: {
            color: 'white',
            fontSize: 12,
            fontFamily: 'Lato',
            fontWeight: '600',
            lineHeight: 15,
        },
        spaceRoot: {
            color: 'white',
            marginLeft: 5,
            fontSize: 12
        },
        oldprice: {
            color: '#666666',
            textDecorationLine: 'line-through',
            fontSize: 14,
            fontFamily: 'Lato',
            fontWeight: '300',
            lineHeight: 17
        },
        buyNowButton: {
            height: 27,
            width: 98,
            borderRadius: 4,
            backgroundColor: '#C68625',
            position: 'absolute',
            bottom: 0,
            alignSelf: 'center',
            alignItems: 'center',
        },
        buttonText: {
            color: '#0D0D0D',
            textAlign: 'center',
            paddingTop: 7,
            fontFamily: 'Raleway',
            fontWeight: '700',
            fontSize: 10,
            lineHeight: 13,
        },
        Snackbar_style: {
            width: "65%",
            height: 55,
            alignSelf: 'center',
            position: 'absolute',
            zIndex: 9,
            bottom: 250,
            opacity: 0.7
        },
        Snackbar_text: {
            color: '#fff',
            fontSize: 14,
            lineHeight: 15,
            textAlign: 'center'
        },
    },

    {
        /** Medium Device Size */

        [maxSize(DEVICE_SIZES.MD)]: {

        },
        /** Extra Small Device Size */

        [maxSize(DEVICE_SIZES.XS)]: {

        },
    },
)