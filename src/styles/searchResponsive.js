import { Platform } from 'react-native';
import { CreateResponsiveStyle, DEVICE_SIZES, maxSize } from 'rn-responsive-styles';
// import { theme } from '../../src/core/theme';

export const useStyles = CreateResponsiveStyle(
    {
        wrapper: {},
        header_root: {
            backgroundColor: 'white'
        },
        searchStyle: {
            maxWidth: "85%",
            maxHeight: 35,
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
        trending_container: {
            flexDirection: 'row'
        },
        trending_icon: {
            marginTop: 5,
            marginLeft: "5%"
        },
        trending_Text_Container: {
            marginTop: 10,
            marginLeft: 10
        },
        trending_Text: {
            fontSize: 17,
            color: 'blue'
        },
        trending_View_container: {
            flexDirection: 'row',
            width: '90%',
            alignSelf: 'center',
            // borderWidth: 1,
            // borderColor: 'red'
        },
        View_Container: {
            height: 35,
            width: 90,
            borderWidth: 1,
            borderColor: 'blue',
            margin: 10,
            borderRadius: 6
        },
        view_container_text: {
            textAlign: 'center',
            paddingTop: 6,
            color: 'blue',
            fontFamily: 'Raleway'
        },
        viewLatestProduct: {
            height: 25,
            width: 70,
            borderRadius: 15,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            marginRight: 20,
            alignSelf: 'center'
        },
        bestSellerRoot: {
            height: 50,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            marginBottom: 10,
        },
        latestProductText: {
            fontSize: 12,
            lineHeight: 14.09,
            fontWeight: '600',
            // color: '#00000',
            // paddingLeft: 5
        },
        noData_root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50%'
        },
        noData_text: {
            fontSize: 18
        },
        productsListRoot: {
            height: "100%",
            width: '95%',
            alignSelf: 'center',
            // borderWidth: 1
        },
        best_touchable: {
            height: 252,
            width: 145,
            marginRight: 70,
            position: 'relative',
        },
        product109: {
            height: 252,
            width: '42.2%',
            marginLeft: '5%',
            marginTop: 20,
            marginBottom: 20,
        },

    },

    {
        /** Medium Device Size */

        [maxSize(DEVICE_SIZES.MD)]: {
            trending_Text: {
                fontSize: (Platform.OS === 'ios') ? 16 : 17,
                fontFamily: 'Raleway'
            },
            trending_View_container: {
                flexDirection: 'row',
                width: '95%',
                alignSelf: 'center',
                // borderWidth: 1,
                // borderColor: 'red'
            },
            trending_Text_Container: {
                marginTop: 10,
                marginLeft: 10
            },
            trending_icon: {
                marginTop: (Platform.OS === 'ios') ? 12 : 10,
                marginLeft: "5%"
            },
            view_container_text: {
                paddingTop: (Platform.OS === 'ios') ? 9 : 6,
                fontSize: (Platform.OS === 'ios') ? 13 : 13,
            },
            View_Container: {
                height: 35,
                width: 90,
                borderWidth: 1,
                borderColor: 'blue',
                margin: 20,
                marginRight: 27,
                // marginTop: -10,
                borderRadius: 6
            },
            best_touchable: {
                height: 252,
                width: 145,
                marginRight: 50,
                position: 'relative',
            },

            product109: {
                height: 252,
                width: 145,
                marginLeft: '19%',
                marginTop: 20,
                marginBottom: 20,
            },


        },
        /** Extra Small Device Size */

        [maxSize(DEVICE_SIZES.XS)]: {
            trending_Text: {
                fontSize: (Platform.OS === 'ios') ? 17 : 16,
                fontFamily: 'Raleway'
            },
            trending_View_container: {
                flexDirection: 'row',
                width: '90%',
                alignSelf: 'center',
                // borderWidth: 1,
                // borderColor: 'red'
            },
            trending_Text_Container: {
                marginTop: 10,
                marginLeft: 10
            },
            trending_icon: {
                marginTop: 10,
                marginLeft: "5%"
            },
            view_container_text: {
                paddingTop: (Platform.OS === 'ios') ? 9 : 6,
                fontSize: (Platform.OS === 'ios') ? 12 : 12,
            },
            View_Container: {
                height: 35,
                width: 90,
                borderWidth: 1,
                borderColor: 'blue',
                margin: 20,
                marginRight: 0,
                borderRadius: 6
            },
            best_touchable: {
                height: 252,
                width: 145,
                marginRight: 15,
                position: 'relative',
            },
            product109: {
                height: 252,
                width: '42.2%',
                marginLeft: '5%',
                marginTop: 20,
                marginBottom: 20,
            },


        },
    },
)