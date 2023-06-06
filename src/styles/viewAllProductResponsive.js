import { CreateResponsiveStyle, DEVICE_SIZES, maxSize } from 'rn-responsive-styles';

export const useStyles = CreateResponsiveStyle(
    {
        wrapper: {},
        Root: {
            backgroundColor: '#090909',
            height: 80,
            width: '100%',
        },
        searchRoot: {
            width: '95%',
            alignSelf: 'center',
            flexDirection: 'row',
            borderWidth: 1
        },
        searchImgRoot: {
            marginTop: 32,
            marginLeft: '5%',
        },
        searchImg: {
            height: 35,
            width: 35,
            resizeMode: 'cover',
            borderRadius: 4
        },
        searchIconRoot: {
            marginTop: 20,
            width: '71%',
            marginLeft: '4%'
        },
        allProductRoot: {
            height: 45,
            width: '90%',
            alignSelf: 'center',
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'space-between'
        },
        allProduct: {
            height: 15,
            borderBottomColor: '#222222',
            borderBottomWidth: 1,
            marginBottom: 10,
            alignSelf: 'center'
        },
        allProductText: {
            fontSize: 12,
            lineHeight: 14,
            fontWeight: '500',
            fontFamily: 'Raleway',
            color: '#222222',
        },
        filterImg: {
            alignSelf: 'center',
            height: 40, width: 40
        },
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
        toch_root: {
            backgroundColor: ['#e1e1e1', '#f2f2f2', '#e1e1e1'],
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
            marginLeft: 3,
            marginRight: 3,
            fontSize: 12,
            lineHeight: 15
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
        deliveryText: {
            fontSize: 20,
            alignSelf: 'center',
            paddingTop: 35,
            paddingLeft: 20
        },
        Snackbar_style: {
            width: "65%",
            height: 55,
            alignSelf: 'center',
            position: 'absolute',
            zIndex: 3,
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
            toch_root: {
                backgroundColor: ['#e1e1e1', '#f2f2f2', '#e1e1e1'],
                height: 252,
                width: 145,
                marginLeft: '19%',
                marginTop: 20,
                marginBottom: 20,
            },
            Snackbar_style: {
                width: "65%",
                height: 55,
                alignSelf: 'center',
                position: 'absolute',
                zIndex: 3,
                bottom: 150,
                opacity: 0.7
            },
        },
        /** Extra Small Device Size */

        [maxSize(DEVICE_SIZES.XS)]: {
            toch_root: {
                backgroundColor: ['#e1e1e1', '#f2f2f2', '#e1e1e1'],
                height: 252,
                width: '42.2%',
                marginLeft: '5%',
                marginTop: 20,
                marginBottom: 20,
            },
            Snackbar_style: {
                width: "65%",
                height: 55,
                alignSelf: 'center',
                position: 'absolute',
                zIndex: 3,
                bottom: 250,
                opacity: 0.7
            },
        },
    },
)