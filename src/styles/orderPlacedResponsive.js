import { CreateResponsiveStyle, DEVICE_SIZES, maxSize } from 'rn-responsive-styles';
// import { theme } from '../../src/core/theme';

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
            fontWeight: '600'
        },
        price_root: {
            display: 'flex',
            justifyContent: 'center'
        },
        price_text: {
            color: '#fff',
            fontSize: 16,
            alignSelf: 'center'
        },
        detail_root: {
            height: 50,
            display: 'flex',
            justifyContent: 'center'
        },
        detail_text: {
            color: '#fff',
            fontSize: 16,
            alignSelf: 'center'
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
            fontSize: 17
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
            fontWeight: '700'
        },
        full_address: {
            fontSize: 15,
            fontWeight: '500'
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
            justifyContent: 'center'
        },
        btn_inner_root: {
            height: "60%",
            width: '90%',
            borderWidth: 1,
            borderColor: 'grey',
            alignSelf: 'center',
            justifyContent: 'center',
            borderRadius: 5
            // backgroundColor: '#fff',
            // marginTop: '1%'
        },
        btn_text: {
            textAlign: 'center',
            color: 'blue'
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
            order_placed_text: {
                color: '#fff',
                alignSelf: 'center',
                fontSize: 22,
                fontWeight: '600'
            },
            price_text: {
                color: '#fff',
                fontSize: 18,
                alignSelf: 'center'
            },
            detail_text: {
                color: '#fff',
                fontSize: 18,
                alignSelf: 'center'
            },
            delivey_text: {
                fontSize: 20
            },
            full_name: {
                fontSize: 18,
                fontWeight: '700'
            },
            full_address: {
                fontSize: 17,
                fontWeight: '500'
            },

        },
        /** Extra Small Device Size */

        [maxSize(DEVICE_SIZES.XS)]: {
            root: {
                height: 60,
                width: '100%',
                backgroundColor: '#fff  '
            },
            order_placed_text: {
                color: '#fff',
                alignSelf: 'center',
                fontSize: 20,
                fontWeight: '600'
            },
            price_text: {
                color: '#fff',
                fontSize: 16,
                alignSelf: 'center'
            },
            detail_text: {
                color: '#fff',
                fontSize: 16,
                alignSelf: 'center'
            },
            delivey_text: {
                fontSize: 17
            },
            full_name: {
                fontSize: 16,
                fontWeight: '700'
            },
            full_address: {
                fontSize: 15,
                fontWeight: '500'
            },
        },
    },
)