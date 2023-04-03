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
            // fontWeight: '700',
            fontWeight: (Platform.OS === 'ios') ? '900' : '700',
            textTransform: "uppercase",
            color: '#CC933B',
            // fontSize: 16,
            fontSize: (Platform.OS === 'ios') ? 17 : 16,
            // lineHeight: 19,
            lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH18 : theme.lineHeightM.lineH18,
            textAlign: 'left'

        },
        // headerN: {
        //     paddingTop: 10,
        //     paddingBottom: 20,
        //     backgroundColor: '#000',
        // },
        // containerI: {
        //     display: 'flex',
        //     flexDirection: 'row',
        //     justifyContent: 'space-between',
        //     alignItems: 'center',
        // },
        // headerNotification: {
        //     display: 'flex',
        //     flexDirection: 'row',
        //     alignItems: 'center',
        // },
        // headerLogo: {
        //     width: 115,
        //     height: 30,
        //     marginLeft: 1,
        // },
        // container: {
        // },
        // searchbar_root: {
        //     width: "100%",
        //     flexDirection: 'row',
        //     backgroundColor: '#222222',
        //     borderRadius: 8,
        //     alignSelf: 'center'
        // },
        // inner_search_root: {
        //     width: '90%'
        // },
        // search_style: {
        //     height: 48,
        //     padding: 15
        // },
        // headerHamburger: {
        //     width: 32,
        //     height: 32,
        //     marginTop: 0
        // },
        // headerLogo: {
        //     width: 115,
        //     height: 30,
        //     marginLeft: 1,
        // },
        // headerIcon: {
        //     display: 'flex',
        //     flexDirection: 'row',
        // },
        // headerIcon1: {
        //     fontSize: 20,
        //     color: '#CC933B',
        //     fontWeight: '700',
        //     marginLeft: 50,
        //     paddingTop: 10
        // },



        /** Login Page Style **/

        // rootContainter: {
        //     flex: 1,
        //     alignItems: 'center',
        //     justifyContent: 'center',
        // },
        // Signip_rootContainter: {
        //     flex: 1,
        //     alignItems: 'center',
        //     justifyContent: 'center',
        //     marginTop: 50,
        // },
        // loginBg: {
        //     width: '100%',
        //     flex: 1,
        //     alignItems: 'center',
        //     justifyContent: 'center',
        //     backgroundColor: '#000',
        // },
        // Containterlogin: {
        //     display: 'flex',
        //     justifyContent: "center",
        //     alignItems: "center",
        //     padding: 25,
        //     paddingBottom: 10,
        //     backgroundColor: '#fff',
        //     width: '90%',
        //     borderRadius: 8,
        //     position: 'relative',
        //     zIndex: 999,
        //     bottom: '15%',
        // },
        // logoBackground: {
        //     height: '50%',
        //     width: '100%',
        // },
        // icon_container: {
        //     flexDirection: 'row',
        //     backgroundColor: theme.siteColor.color9e9da4,
        //     width: '100%',
        // },
        // reset_container: {
        //     backgroundColor: theme.siteColor.color9e9da4,
        //     width: '100%',
        // },
        // logInContainer: {
        //     flexDirection: 'row',
        //     backgroundColor: theme.siteColor.color9e9da4,
        //     width: '100%',
        // },
        // loginInput: {
        //     width: '100%',
        //     fontSize: theme.fontsT.fontS14,
        //     borderTopWidth: 0,
        //     borderLeftWidth: 0,
        //     borderRightWidth: 0,
        //     borderBottomWidth: 0,
        //     backgroundColor: '#fff',
        //     padding: 0,
        // },
        // inputWidth: {
        //     width: '100%',
        //     color: theme.siteColor.colorFFFFFF,
        // },
        // LoginButtong: {
        //     display: 'flex',
        //     width: '100%',
        //     marginTop: 10
        // },
        // buttonStyle: {
        //     padding: 20,
        //     backgroundColor: '#C68625',
        //     borderRadius: 24,
        // },
        // LoginButtongTittle: {
        //     textAlign: 'center',
        //     textTransform: 'uppercase',
        //     color: theme.siteColor.colorFFFFFF,
        //     fontWeight: '800',
        //     fontSize: theme.fontsT.fontS16,
        //     lineHeight: theme.lineHeightT.lineH14,
        // },
        // inputError: {
        //     color: theme.siteColor.colorCC933B,
        //     ffontSize: theme.fontsT.fontS16,
        //     fontStyle: 'italic',
        //     fontWeight: '600',
        // },
        // inputIcon: {
        //     position: 'relative',
        //     top: 5,
        // },
        // Textinput_root: {
        //     flex: 2,
        //     justifyContent: 'space-evenly',
        //     flexDirection: 'row',
        //     marginTop: 10,
        // },
        // input_Style: {
        //     height: 50,
        //     width: 50,
        //     borderRadius: 10,
        //     borderWidth: 0.5,
        //     fontWeight: "600",
        //     alignSelf: 'center',
        //     fontSize: 20,
        //     justifyContent: 'center',
        //     alignContent: 'center',
        //     textAlign: 'center',
        //     backgroundColor: '#f5f4f2',
        // },
        // checkboxPassword: {
        //     display: 'flex',
        //     flexDirection: 'row-reverse',
        //     width: '100%',
        //     paddingTop: 30,
        //     paddingBottom: 30,
        // },
        // checkboxInput: {
        //     display: 'flex',
        //     alignItems: "center",
        //     flexDirection: "row",
        // },
        // checkboxField: {
        //     alignSelf: "center",
        //     margin: 0,
        //     padding: 0,
        //     width: 20,
        //     height: 20,
        // },
        // checkboxLabel: {
        //     color: '#222',
        //     fontSize: theme.fontsT.fontS16,
        //     paddingLeft: 10,
        // },
        // forgetLabel: {
        //     color: '#222',
        //     fontSize: theme.fontsT.fontS16,
        //     fontFamily: 'Raleway',
        //     fontWeight: '400',
        //     fontStyle: 'italic',
        // },
        // containerInput: {
        //     width: '100%',
        //     marginVertical: 12,
        // },
        // description: {
        //     fontSize: theme.fontsT.fontS11,
        //     color: theme.colors.secondary,
        //     paddingTop: 8,
        // },
        // error: {
        //     fontSize: theme.fontsT.fontS11,
        //     color: theme.colors.error,
        //     paddingTop: 8,
        // },
        // loginBottom: {
        //     position: 'relative',
        //     bottom: 50,
        //     display: 'flex',
        //     flexDirection: 'row',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        // },
        // needHelpBottom: {
        //     color: '#fff',
        //     fontWeight: '600',
        // },

        // contactUsBottom: {
        //     color: '#CC933B',
        //     fontWeight: '700',
        // },


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
            // borderWidth: 1,
            // borderColor: '#fff',
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
        // skinImgRoot: {
        //     height: 90,
        //     width: "100%",
        // },
        skinImgRoot: {
            height: 80,
            width: 80,
            birderWidth: 1,
            borderColor: 'white',
        },
        imgCenter: {
            alignSelf: 'center',
            height: "100%",
            width: '100%',
            birderWidth: 1,
            borderRadius: 40
        },
        // imgCenter: {
        //     alignSelf: 'center'
        // },
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
            // width: '100%',
        },
        productImg: {
            height: '100%',
            width: "100%"
        },
        // contentRoot: {
        //     height: 95,
        //     width: '100%',
        //     backgroundColor: '#0D0D0D',
        //     display: 'flex'
        // },
        contentRoot: {
            height: 95,
            width: 145,
            backgroundColor: '#0D0D0D',
            // borderWidth: 1
        },
        descriptionRoot: {
            height: 36,
            width: 130,
            alignSelf: 'center',
            justifyContent: 'center',
            // borderColor: 'red',
            // borderWidth: 5,
            // marginTop: 5
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
        // baseLine: {
        //     height: 1,
        //     width: '100%',
        //     backgroundColor: '#272727',
        //     marginTop: 10
        // },
        baseLine: {
            height: 1,
            width: 145,
            backgroundColor: '#272727',
            marginTop: 10
        },
        // priceRoot: {
        //     flexDirection: 'row',
        //     height: 17,
        //     alignSelf: 'center',
        //     marginTop: 7,
        //     // width: 103,
        //     // flexDirection: 'row',
        //     // height: 17,
        //     width: "99%",
        //     justifyContent: 'center',
        //     alignSelf: 'center',
        //     // marginTop: 7,
        // },
        priceRoot: {
            flexDirection: 'row',
            display: 'flex',
            height: 17,
            width: '100%',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 7,
            // borderColor: 'red',
            // borderWidth: 1,
        },
        price: {
            color: 'white',
            fontSize: 12,
            fontWeight: '300',
            fontFamily: 'Lato',
            textAlign: 'center',
            lineHeight: 15
        },
        // price: {
        //     color: 'white',
        //     fontSize: 12
        // },
        // spaceRoot: {
        //     color: 'white',
        //     marginLeft: 5,
        //     fontSize: 12
        // },
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
            // borderWidth: 1
        },
        viewLatestProduct: {
            height: 25,
            width: 80,
            borderRadius: 15,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            // marginTop: 0,
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
            // borderWidth: 1,
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
                width: "40%",
                bottom: 150,
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
                width: "65%",
                height: 55,
                alignSelf: 'center',
                position: 'absolute',
                zIndex: 3,
                bottom: 250,
                opacity: 0.7
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
                // borderWidth: 1,
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