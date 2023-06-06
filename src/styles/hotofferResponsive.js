import { CreateResponsiveStyle, DEVICE_SIZES, maxSize } from 'rn-responsive-styles';

export const useStyles = CreateResponsiveStyle(
    {
        wrapper: {},
        root_container: {
            alignItems: 'center',
            marginTop: "10%"
        },
        inner_root: {
            backgroundColor: 'white',
            width: '90%'
        },
        off_root: {
            backgroundColor: 'white',
            height: 90,
            width: '100%',
            flexDirection: 'row'
        },
        left_off_root: {
            width: '35%',
            borderRightWidth: 2,
            borderRightColor: '#D3D3D3',
            justifyContent: 'center',
            alignItems: 'center',
        },
        left_text: {
            color: 'green',
            fontSize: 23,
            fontWeight: '800'
        },
        right_off_root: {
            width: '65%',
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginLeft: 20
        },
        right_text: {
            fontSize: 14
        },
        expiry_outer_root: {
            backgroundColor: 'white',
            height: 40,
            width: '100%',
            flexDirection: 'row',
        },
        expiry_left_root: {
            width: '65%',
            justifyContent: 'center',
            alignItems: 'center',
            borderTopColor: '#D3D3D3',
            borderTopWidth: 2,
            flexDirection: 'row'
        },
        expiry_text: {
            fontSize: 15,
        },
        expiry_date: {
            fontSize: 15,
            fontWeight: '600',
        },
        details_right: {
            width: '35%',
            justifyContent: 'center',
            alignItems: 'center',
            borderTopColor: '#D3D3D3',
            borderTopWidth: 2,
        },
        details_hide: {
            color: 'blue',
            fontSize: 15,
            fontWeight: '700',
        },
        hide_offer: {
            marginLeft: 50,
            marginBottom: 10,
            flexDirection: 'row',
        }

    },

    {
        /** Medium Device Size */

        [maxSize(DEVICE_SIZES.MD)]: {
            root_container: {
                alignItems: 'center',
                marginTop: "5%"
            },
            right_off_root: {
                marginLeft: 0,
                alignItems: 'center',
            },
            right_text: {
                fontSize: 16
            },
            expiry_outer_root: {
                height: 40,
            },


        },
        /** Extra Small Device Size */

        [maxSize(DEVICE_SIZES.XS)]: {

            root_container: {
                alignItems: 'center',
                marginTop: "10%"
            },
            right_off_root: {
                width: '65%',
                justifyContent: 'center',
                alignItems: 'flex-start',
                marginLeft: 10
            },
            right_text: {
                fontSize: 14
            },
            expiry_outer_root: {
                backgroundColor: 'white',
                height: 40,
                width: '100%',
                flexDirection: 'row',
            },

        },
    },
)