import { Platform } from 'react-native';
import { CreateResponsiveStyle, DEVICE_SIZES, maxSize } from 'rn-responsive-styles';
import { theme } from '../../src/core/theme';

export const useStyles = CreateResponsiveStyle(
    {
        wrapper: {},


        /** Product Listing Page */

        banner_img_root: {
            height: 200,
        },
        banner_img: {
            height: '100%',
            width: '100%'
        },
        Cat_Seller_Root: {
            height: 50,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        productListing_name: {
            paddingLeft: 20,
            marginTop: 20,
            marginBottom: 10,
            fontFamily: 'Raleway',
            fontWeight: '600',
            textTransform: "uppercase",
            color: '#CC933B',
            fontSize: 16,
            lineHeight: 19,
            textAlign: 'left'
        },
        touchable_sort: {
            height: 30,
            width: 120,
            borderRadius: 15,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            marginRight: 20,
            alignSelf: 'center',
            flexDirection: 'row'
        },
        sort_Text: {
            fontSize: 11,
            lineHeight: 14.09,
            paddingLeft: 5,
            fontFamily: 'Raleway',
            fontWeight: '500',
        },
        dots: {
            fontSize: 12,
            lineHeight: 14.09,
            fontFamily: 'Raleway',
            fontWeight: '500',
            paddingLeft: 3,
        },
        panel: {
            paddingTop: 5,
        },
        sort_align_root: {
            alignItems: 'center'
        },
        panelTitle: {
            fontSize: 27,
            height: 40,
            fontFamily: 'Raleway',
            fontWeight: '600',
        },
        panel_btnText_Root: {
            flexDirection: 'row',
            width: "100%",
            alignSelf: 'center',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        panel_select_text: {
            fontSize: 15,
            padding: 6,
            marginLeft: 15,
            fontWeight: "700",
            fontFamily: 'Raleway',
        },
        flatList_Root: {
            height: '100%',
            width: '100%',
            alignSelf: 'center',
        },
        flatList_tochable_root: {
            height: 252,
            width: '42.2%',
            marginLeft: '5%',
            marginTop: 20,
            marginBottom: 20,
        },
        flatList_imgRoot: {
            height: 145,
            width: '100%',
            borderWidth: 1,
        },
        flatList_Img: {
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
        flatList_contentRoot: {
            height: 95,
            width: '100%',
            backgroundColor: '#0D0D0D',
            display: 'flex'
        },
        flatList_textRoot: {
            height: 36,
            width: 130,
            alignSelf: 'center',
            justifyContent: 'center',
        },
        flatList_contentText: {
            fontSize: 10,
            fontWeight: '300',
            fontFamily: 'Lato',
            lineHeight: 12,
            color: '#FFFFFF',
            alignSelf: 'center',
        },

        flatList_baseLine: {
            height: 1,
            width: '100%',
            backgroundColor: '#272727',
            marginTop: 10
        },
        flatList_priceRoot: {
            flexDirection: 'row',
            height: 17,
            width: "99%",
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 7,
        },
        flatList_oldprice: {
            color: '#666666',
            textDecorationLine: 'line-through',
            fontSize: 12,
            fontFamily: 'Lato',
            fontWeight: '600',
            lineHeight: 15,
        },

        flatList_spaceRoot: {
            color: 'white',
            marginLeft: 3,
            marginRight: 3,
            fontSize: 12,
            lineHeight: 15
        },
        flatList_price: {
            color: 'white',
            fontSize: 12,
            fontFamily: 'Lato',
            fontWeight: '300',
            lineHeight: 15,
            textAlign: 'center',
        },

        btn_btn: {
            height: 27,
            width: '100%',
        },
        flatList_buyNowButton: {
            height: 27,
            width: 98,
            borderRadius: 4,
            backgroundColor: '#C68625',
            position: 'absolute',
            bottom: 0,
            alignSelf: 'center',
            alignItems: 'center',
        },
        flatList_buttonText: {
            color: '#0D0D0D',
            textAlign: 'center',
            paddingTop: 7,
            fontFamily: 'Raleway',
            fontWeight: '700',
            fontSize: 10,
            lineHeight: 13,
        },
        // btn_btn: {
        //     height: 27,
        //     width: '100%',
        // },
        // flatList_buyNowButton: {
        //     height: 27,
        //     width: 98,
        //     borderRadius: 4,
        //     backgroundColor: '#C68625',
        //     position: 'absolute',
        //     bottom: 0,
        //     alignSelf: 'center',
        //     alignItems: 'center',
        // },
        // flatList_buttonText: {
        //     color: '#0D0D0D',
        //     textAlign: 'center',
        //     paddingTop: 7,
        //     fontFamily: 'Raleway',
        //     fontWeight: '700',
        //     fontSize: 10,
        //     lineHeight: 13,
        // },




        /** Medium Device Size */

        [maxSize(DEVICE_SIZES.MD)]: {

            /** Product Listing Page */
            flatList_contentText: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS10 : theme.fontsM.fontS10,
                fontWeight: (Platform.OS === 'ios') ? '300' : '400',
                fontFamily: 'Lato',
                lineHeight: (Platform.OS === 'ios') ? 12 : 13,
                color: '#FFFFFF',
                alignSelf: 'center',
            },
            flatList_oldprice: {
                color: '#666666',
                textDecorationLine: 'line-through',
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS14 : theme.fontsM.fontS14,
                fontWeight: (Platform.OS === 'ios') ? '600' : '700',
                fontFamily: 'Lato',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH16 : theme.lineHeightM.lineH16
            },
            flatList_price: {
                color: 'white',
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS14 : theme.fontsM.fontS13,
                fontWeight: (Platform.OS === 'ios') ? '600' : '400',
                fontFamily: 'Lato',
                textAlign: 'center',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH16 : theme.lineHeightM.lineH15,
            },
            flatList_tochable_root: {
                height: 252,
                width: '30%',
                marginLeft: '14.5%',
                marginTop: 20,
                marginBottom: 20,
            },
            flatList_imgRoot: {
                height: 145,
                width: "80%",
            },
            flatList_contentRoot: {
                height: 95,
                width: '80%',
                display: 'flex',
                backgroundColor: '#0D0D0D',
            },
            btn_btn: {
                height: 27,
                width: '90%',
                position: 'absolute',
                bottom: 0,
                justifyContent: "center",
            },
            flatList_buyNowButton: {
                height: 27,
                width: 98,
                borderRadius: 4,
                backgroundColor: '#C68625',
                position: 'absolute',
            },
            Snackbar_style: {
                width: "40%",
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

            /** Product Listing Page */

            // flatList_contentText: {
            //     fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS10 : theme.fontsM.fontS9,
            //     fontWeight: (Platform.OS === 'ios') ? '300' : '400',
            //     fontFamily: 'Lato',
            //     lineHeight: (Platform.OS === 'ios') ? 12 : 13,
            //     color: '#FFFFFF',
            //     alignSelf: 'center',
            // },
            // flatList_oldprice: {
            //     color: '#666666',
            //     textDecorationLine: 'line-through',
            //     fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS14 : theme.fontsM.fontS14,
            //     fontWeight: (Platform.OS === 'ios') ? '600' : '700',
            //     fontFamily: 'Lato',
            //     lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH16 : theme.lineHeightM.lineH16
            // },
            // flatList_price: {
            //     color: 'white',
            //     fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS12 : theme.fontsM.fontS13,
            //     fontWeight: (Platform.OS === 'ios') ? '600' : '400',
            //     fontFamily: 'Lato',
            //     textAlign: 'center',
            //     lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH16 : theme.lineHeightM.lineH15,
            // },
            // flatList_tochable_root: {
            //     height: 252,
            //     width: '42.2%',
            //     marginLeft: '5%',
            //     marginTop: 20,
            //     marginBottom: 20,
            // },
            flatList_imgRoot: {
                height: 145,
                width: '100%',
            },
            // flatList_contentRoot: {
            //     height: 95,
            //     width: '100%',
            //     backgroundColor: '#0D0D0D',
            //     display: 'flex'
            // },
            // btn_btn: {
            //     height: 27,
            //     width: '100%',
            //     position: 'absolute',
            //     bottom: 0,
            //     alignSelf: 'center',
            //     alignItems: 'center',
            // },
            // flatList_buyNowButton: {
            //     height: 27,
            //     width: 98,
            //     borderRadius: 4,
            //     backgroundColor: '#C68625',
            //     position: 'absolute',
            //     bottom: 0,
            //     alignSelf: 'center',
            //     alignItems: 'center',
            // },
            // Snackbar_style: {
            //     width: "65%",
            //     height: 55,
            //     alignSelf: 'center',
            //     position: 'absolute',
            //     zIndex: 3,
            //     bottom: 250,
            //     opacity: 0.7
            // },



        },
    },
)