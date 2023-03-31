import { CreateResponsiveStyle, DEVICE_SIZES, maxSize } from 'rn-responsive-styles';
import { theme } from '../../src/core/theme';
import { Platform } from 'react-native';

export const useStyles = CreateResponsiveStyle(
    {
        wrapper: {},
        container_root: {
            height: '100%',
            backgroundColor: '#fff'
        },
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
        root: {
            height: 60,
            width: '100%',
            backgroundColor: '#fff  '
        },
        placed_root: {
            height: 200,
            width: '100%',
            backgroundColor: 'blue',
            justifyContent: 'center'
        },
        inner_text_root: {
            height: 60,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            // marginTop: '0%',
            // borderWidth: 2, borderColor: 'red'
        },
        order_placed_text: {
            color: '#fff',
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: '600',
            fontFamily: 'Lato'
        },
        price_root: {
            display: 'flex',
            justifyContent: 'center'
        },
        price_text: {
            color: '#fff',
            fontSize: 16,
            alignSelf: 'center',
            fontFamily: 'Lato'
        },
        detail_root: {
            height: 50,
            display: 'flex',
            justifyContent: 'center'
        },
        detail_text: {
            color: '#fff',
            fontSize: 16,
            alignSelf: 'center',
            fontFamily: 'Lato'
        },
        delivery_root: {
            height: 80,
            width: '100%',
            backgroundColor: '#fff'
        },
        delivery_inner_root: {
            height: '100%',
            width: '90%',
            justifyContent: 'center',
            alignSelf: 'center'
        },
        delivey_text: {
            fontSize: 17,
            fontFamily: 'Lato'
        },
        address_root: {
            width: '100%',
            backgroundColor: '#fff'
        },
        address_inner_root: {
            height: 150,
            width: '90%',
            alignSelf: 'center',
        },
        flex_root: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        full_name: {
            fontSize: 16,
            fontWeight: '700',
            // fontFamily: 'Lato'
        },
        full_address: {
            fontSize: 15,
            fontWeight: '500',
            fontFamily: 'Lato'
        },
        change_root: {
            height: 30,
            width: 70,
            borderWidth: 1,
            borderColor: 'grey',
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center'
        },
        btn_root: {
            height: 80,
            width: '100%',
            backgroundColor: '#fff',
            marginTop: '1%',
            justifyContent: 'center',
        },
        btn_inner_root: {
            height: "60%",
            width: '90%',
            borderWidth: 1,
            borderColor: 'grey',
            alignSelf: 'center',
            justifyContent: 'center',
            borderRadius: 5
        },
        btn_text: {
            textAlign: 'center',
            color: 'blue',
            fontFamily: 'Raleway',
            fontSize: 14
        },
        empty_address: {
            display: 'flex',
            flexDirection: 'row',
            height: '90%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        empty_text: {
            fontSize: 16
        },
        empty_fab: {
            marginLeft: '5%'
        }

    },

    {
        /** Medium Device Size */

        [maxSize(DEVICE_SIZES.MD)]: {
            root: {
                height: 60,
                width: '100%',
                backgroundColor: '#fff  '
            },
            placed_root: {
                height: 170,
            },
            address_inner_root: {
                height: 130,
            },
            btn_root: {
                marginBottom: "14%"
            },
            order_placed_text: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS16 : theme.fontsM.fontS16,
                fontWeight: (Platform.OS === 'ios') ? '500' : '500',

            },
            price_text: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS16 : theme.fontsM.fontS16,
                fontWeight: (Platform.OS === 'ios') ? '300' : '400',

            },
            detail_text: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS16 : theme.fontsM.fontS16,
                fontWeight: (Platform.OS === 'ios') ? '300' : '400',
            },
            delivey_text: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS16 : theme.fontsM.fontS16,
                fontWeight: (Platform.OS === 'ios') ? '500' : '500',
            },
            full_name: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS16 : theme.fontsM.fontS16,
                fontWeight: (Platform.OS === 'ios') ? '700' : '700',
            },
            full_address: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS15 : theme.fontsM.fontS15,
                fontWeight: (Platform.OS === 'ios') ? '400' : '400',
                lineHeight: 19
            },

        },
        /** Extra Small Device Size */

        [maxSize(DEVICE_SIZES.XS)]: {
            root: {
                height: 60,
                width: '100%',
                backgroundColor: '#fff  '
            },
            placed_root: {
                height: 200,
            },
            address_inner_root: {
                height: 140,
            },
            order_placed_text: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS16 : theme.fontsM.fontS16,
                fontWeight: (Platform.OS === 'ios') ? '400' : '500',
            },
            price_text: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS15 : theme.fontsM.fontS15,
                fontWeight: (Platform.OS === 'ios') ? '300' : '400',
            },
            detail_text: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS15 : theme.fontsM.fontS15,
                fontWeight: (Platform.OS === 'ios') ? '300' : '400',
            },
            delivey_text: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS15 : theme.fontsM.fontS15,
                fontWeight: (Platform.OS === 'ios') ? '400' : '400',
            },
            full_name: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS15 : theme.fontsM.fontS15,
                fontWeight: (Platform.OS === 'ios') ? '700' : '700',
            },
            full_address: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS14 : theme.fontsM.fontS14,
                fontWeight: (Platform.OS === 'ios') ? '400' : '400',
                lineHeight: 19
            },
        },
    },
)