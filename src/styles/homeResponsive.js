import { Platform } from 'react-native';
import { CreateResponsiveStyle, DEVICE_SIZES, maxSize } from 'rn-responsive-styles';
import { theme } from '../../src/core/theme';

export const useStyles = CreateResponsiveStyle(
    {
        wrapper: {},
        heading_flexRow: {
            flexDirection: "row",
            paddingLeft: '3%',
            marginTop: 20,
            marginBottom: 10
        },
        headingText: {
            fontFamily: 'Raleway',
            fontWeight: (Platform.OS === 'ios') ? '900' : '700',
            textTransform: "uppercase",
            color: '#CC933B',
            fontSize: (Platform.OS === 'ios') ? 17 : 16,
            lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH18 : theme.lineHeightM.lineH18,
            textAlign: 'left'

        },

        /** Home Page Style **/

        appContainer: {
            display: 'flex',
        },

        category_root_img: {
            height: 80,
            width: 80,
            marginLeft: 8,
            marginTop: 30,
            borderRadius: 50,
        },

        best_touchable: {
            height: 252,
            width: 145,
            marginRight: 15,
            position: 'relative',
        },
        siteLogo: {
            display: 'flex',
            alignItems: 'center',
        },
        searchRoot: {
            backgroundColor: theme.siteColor.colo090909,
            paddingTop: 30,
            paddingBottom: 30,
        },
        categories_img_Root: {
            height: 150,
            width: "100%",
            backgroundColor: '#050505',
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'space-around',
        },
        categories_inner_img_Root: {
            width: '90%',
            alignSelf: 'center',
        },
        categoriesImgRoot: {
            flexDirection: 'row',
            width: "95%",
            alignSelf: 'center'
        },
        blankSpace: {
            width: "5%",
        },
        touchableImg: {
            height: 126,
            width: "30%",
            justifyContent: 'center',
            borderWidth: 1
        },
        skinImgRoot: {
            height: 80,
            width: 80,
        },
        imgCenter: {
            alignSelf: 'center',
            height: "100%",
            width: '100%',
            borderRadius: 40
        },

        skinImgText: {
            color: '#fff',
            fontSize: 12,
            fontWeight: '500',
            lineHeight: 14,
            textAlign: 'center',
            marginTop: 5
        },

        productsListRoot: {
            height: 252,
            width: '95%',
            alignSelf: 'center'
        },
        product109: {
            height: 252,
            width: 145,
            marginRight: 15,
            position: 'relative'
        },
        imgRoot: {
            height: 145,
            width: 145,
        },
        productImg: {
            height: '100%',
            width: "100%"
        },

        contentRoot: {
            height: 95,
            width: 145,
            backgroundColor: '#0D0D0D',
        },
        descriptionRoot: {
            height: 36,
            width: 130,
            alignSelf: 'center',
            justifyContent: 'center',

        },
        descriptionText: {
            fontSize: 10,
            fontWeight: '300',
            fontFamily: 'Lato',
            lineHeight: 12,
            color: '#FFFFFF',
            alignSelf: 'center',
        },
        textRoot: {
            height: 36,
            width: 130,
            alignSelf: 'center',
            justifyContent: 'center',
        },
        contentText: {
            fontSize: 12,
            fontWeight: '300',
            lineHeight: 12,
            color: '#FFFFFF',
            alignSelf: 'center',
            paddingTop: 8
        },

        baseLine: {
            height: 1,
            width: 145,
            backgroundColor: '#272727',
            marginTop: 10
        },
        priceRoot: {
            flexDirection: 'row',
            display: 'flex',
            height: 17,
            width: '100%',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 7,
        },
        price: {
            color: 'white',
            fontSize: 12,
            fontWeight: '300',
            fontFamily: 'Lato',
            textAlign: 'center',
            lineHeight: 15
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
            fontSize: 12,
            fontWeight: '600',
            fontFamily: 'Lato',
            lineHeight: 15
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
            fontSize: 10,
            fontFamily: 'Raleway',
            fontWeight: '700',
            lineHeight: 13
        },
        promiseRoot: {
            alignItems: 'center',
            paddingBottom: 20,
        },
        promiseText: {
            fontWeight: '400',
            Size: 16,
            fontFamily: 'Baskervville',
            fontWeight: '400',
            lineHeight: 20,
            color: '#666666'
        },
        promiseOuterRoot: {
            paddingBottom: 90,
        },
        group115Root: {
            flexDirection: 'row',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
        },
        oilIconRoot: {
            width: '20%',
            paddingLeft: 15,
            paddingRight: 15,
            paddingBottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
        },
        iconRoot: {
            marginBottom: 8,
        },
        essientialOilText: {
            fontFamily: 'Lato',
            fontWeight: '400',
            lineHeight: 11,
            fontSize: 9,
            textAlign: 'center',
        },
        ViewProduct: {
            height: 44,
            width: 160,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            alignSelf: 'center',
            backgroundColor: '#CC933B',
            borderRadius: 22,
        },
        viewProductText: {
            fontFamily: 'Raleway',
            fontWeight: '700',
            fontSize: 11,
            color: '#fff',
        },
        swiperRoot: {
            height: 350,
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center'
        },
        bannerImgHight: {
            height: '100%',
            width: '100%'
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

        header: {
            justifyContent: 'center',
            alignItems: 'center',
            top: 0,
            left: 0,
            right: 0,

        },
        sliderContent: {
            position: 'absolute',
            top: '30%',
            left: 20,
            maxWidth: 200,
        },
        bannerCode: {
            marginTop: 30,
            marginBottom: 30,
        },
        bannerText: {
            fontSize: 16,
            color: '#fff',
            fontWeight: '800',
            fontFamily: 'Lato',
            lineHeight: 24,
        },
        bannerShopNow: {
            color: '#C68625',
            fontSize: 14,
            fontWeight: '700',
            fontFamily: 'Raleway',
            textAlign: 'center',
            borderWidth: 1,
            borderColor: '#C68625',
            padding: 12,
            maxWidth: 130,
        },
        BestSellingRoot: {
            height: 'auto',
            backgroundColor: '#fff'
        },
        sellingTitleRoot: {
            height: 330,
            width: 465,
            marginLeft: 15,
            marginTop: 26
        },
        bestSellerRoot: {
            height: 50,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            marginBottom: 20,
        },
        viewLatestProduct: {
            height: 25,
            width: 80,
            borderRadius: 15,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: (Platform.OS === 'ios') ? "3%" : '3%',
            alignSelf: 'center',
            flexDirection: 'row'
        },
        latestProductText: {
            fontSize: (Platform.OS === 'ios') ? 12 : 13,
            lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH15 : theme.lineHeightM.lineH15,
            fontWeight: (Platform.OS === 'ios') ? '900' : '700',
            fontFamily: 'Raleway',
            paddingLeft: 5
        },
        latestProductImg: {
            marginLeft: 60
        },
        footerBannerRoot: {
            paddingTop: 40,
            paddingBottom: 40,
            alignItems: 'center',
        },
        footerBannerImage: {
            width: '100%',
            height: 530,
            resizeMode: 'cover',
        },
        SearchBar_container: {
            height: 40,
            width: '100%',
            backgroundColor: '#222222',
        },
        TextInput_container: {
            width: '90%',
            backgroundColor: '#222222',
            alignSelf: 'center',
            borderRadius: 5,
        },
        passwordContainer: {
            flexDirection: 'row',
            backgroundColor: '#222222',
            alignSelf: 'center',
            marginBottom: 0,
            borderColor: 'transparent',
        },
        TextInputSearch: {
            height: 40,
            maxWidth: "70%",
            flex: 1,
        },
        searchIcon: {
            justifyContent: 'center',
            alignSelf: 'center',
        },

        //** Order Screen */

        no_order_text: {
            fontSize: 18,
            fontWeight: '700',
            alignSelf: 'center',
            paddingTop: '5%',
            fontFamily: 'Lato'
        },
        shopping_btn: {
            height: 40,
            width: 150,
            borderRadius: 5,
            alignSelf: 'center',
            justifyContent: 'center',
            backgroundColor: '#C68625',
            marginTop: 50
        },
        shopping_text: {
            fontSize: 16,
            alignSelf: 'center',
            color: '#fff',

        },

    },

    {

        /** Medium Device Size */

        [maxSize(DEVICE_SIZES.MD)]: {

            /** Home Page */

            swiperRoot: {
                height: 250,
            },
            category_root_img: {
                marginRight: (Platform.OS === 'ios') ? 15 : 19,
                marginTop: (Platform.OS === 'ios') ? 21 : 22,
                borderWidth: 1,
                borderColor: '#fff',
            },
            productsListRoot: {
                width: (Platform.OS === 'ios') ? '90%' : '85%',
            },
            best_touchable: {
                marginRight: 90,
            },
            skinImgText: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS12 : theme.fontsM.fontS11,
                fontWeight: (Platform.OS === 'ios') ? '600' : '500',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH20 : theme.lineHeightM.lineH18,
                marginTop: (Platform.OS === 'ios') ? 10 : 11,
            },

            footerBannerImage: {
                height: 280,
                resizeMode: 'contain',
            },
            Snackbar_style: {
                width: (Platform.OS === 'ios') ? "50%" : "45%",
                bottom: 150,
            },
            Snackbar_text: {
                fontSize: (Platform.OS === 'ios') ? 12 : 12,
            },
            descriptionText: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS10 : theme.fontsM.fontS10,
                fontWeight: (Platform.OS === 'ios') ? '300' : '400',
                fontFamily: 'Lato',
                lineHeight: (Platform.OS === 'ios') ? 12 : 13,
            },
            oldprice: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS14 : theme.fontsM.fontS14,
                fontWeight: (Platform.OS === 'ios') ? '600' : '700',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH16 : theme.lineHeightM.lineH16
            },
            price: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS14 : theme.fontsM.fontS13,
                fontWeight: (Platform.OS === 'ios') ? '600' : '400',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH16 : theme.lineHeightM.lineH15,
            },
            buyNowButton: {
                width: (Platform.OS === 'ios') ? 70 : 75,
            },
            buttonText: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS10 : theme.fontsM.fontS11,
                fontWeight: (Platform.OS === 'ios') ? '600' : '700',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH14 : theme.lineHeightM.lineH14
            },
            promiseText: {
                fontWeight: (Platform.OS === 'ios') ? '600' : '600',
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS14 : theme.fontsM.fontS15,
                fontFamily: (Platform.OS === 'ios') ? 'Baskervville' : 'Baskervville',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH16 : theme.lineHeightM.lineH18,
            },
            essientialOilText: {
                fontWeight: (Platform.OS === 'ios') ? '600' : '600',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH11 : theme.lineHeightM.lineH11,
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS10 : theme.fontsM.fontS10,
            },
            viewProductText: {
                fontWeight: (Platform.OS === 'ios') ? '700' : '700',
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS12 : theme.fontsM.fontS13,
            },

            //** Order Screen */

            no_order_text: {
                fontSize: (Platform.OS === 'ios') ? 18 : 18,
                fontWeight: (Platform.OS === 'ios') ? '700' : '700',
            },
            shopping_btn: {
                marginBottom: (Platform.OS === 'ios') ? 15 : 10
            },
            shopping_text: {
                fontSize: (Platform.OS === 'ios') ? 14 : 14,

            },

        },


        /** Extra Small Device Size */

        [maxSize(DEVICE_SIZES.XS)]: {

            /**Home Page */

            category_root_img: {
                marginRight: (Platform.OS === 'ios') ? 30 : 24,
                marginTop: (Platform.OS === 'ios') ? 23 : 24,
            },
            productsListRoot: {
                width: (Platform.OS === 'ios') ? '95%' : '95%',
            },

            best_touchable: {
                marginRight: 15,
            },
            skinImgText: {
                fontSize: (Platform.OS === 'ios') ? 12 : 11,
                fontWeight: (Platform.OS === 'ios') ? '600' : '500',
                lineHeight: (Platform.OS === 'ios') ? 20 : 18,
                textAlign: 'center',
                marginTop: (Platform.OS === 'ios') ? 10 : 11,
            },
            oilIconRoot: {
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 15,
            },

            Snackbar_style: {
                width: (Platform.OS === 'ios') ? "70%" : "65%",
                height: 55,
                alignSelf: 'center',
                position: 'absolute',
                zIndex: 3,
                bottom: 250,
                opacity: 0.7
            },
            Snackbar_text: {
                fontSize: (Platform.OS === 'ios') ? 12 : 12,
            },
            descriptionText: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS10 : theme.fontsM.fontS9,
                fontWeight: (Platform.OS === 'ios') ? '300' : '400',
                fontFamily: 'Lato',
                lineHeight: (Platform.OS === 'ios') ? 12 : 13,
            },
            oldprice: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS14 : theme.fontsM.fontS14,
                fontWeight: (Platform.OS === 'ios') ? '600' : '700',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH16 : theme.lineHeightM.lineH16
            },
            price: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS12 : theme.fontsM.fontS13,
                fontWeight: (Platform.OS === 'ios') ? '600' : '400',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH16 : theme.lineHeightM.lineH15,
            },
            buyNowButton: {
                width: (Platform.OS === 'ios') ? 80 : 90,
            },
            buttonText: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS11 : theme.fontsM.fontS12,
                fontWeight: (Platform.OS === 'ios') ? '600' : '700',
                lineHeight: 13
            },
            promiseText: {
                fontWeight: (Platform.OS === 'ios') ? '600' : '600',
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS14 : theme.fontsM.fontS15,
                fontFamily: (Platform.OS === 'ios') ? 'Baskervville' : 'Baskervville',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH18 : theme.lineHeightM.lineH20,
            },
            essientialOilText: {
                fontWeight: (Platform.OS === 'ios') ? '600' : '600',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH11 : theme.lineHeightM.lineH11,
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS9 : theme.fontsM.fontS9,
            },
            viewProductText: {
                fontWeight: (Platform.OS === 'ios') ? '600' : '700',
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS11 : theme.fontsM.fontS12,
            },

            //** Order Screen */

            no_order_text: {
                fontSize: (Platform.OS === 'ios') ? 16 : 15,
                fontWeight: (Platform.OS === 'ios') ? '700' : '700',
            },
            shopping_btn: {
                height: 40,
                width: 150,
                borderRadius: 5,
                alignSelf: 'center',
                justifyContent: 'center',
                backgroundColor: '#C68625',
                marginTop: 50
            },
            shopping_text: {
                fontSize: (Platform.OS === 'ios') ? 14 : 13,
                fontFamily: 'Raleway',
                fontWeight: (Platform.OS === 'ios') ? '500' : '600'
            },

        },
    },
)