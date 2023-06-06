import { CreateResponsiveStyle, DEVICE_SIZES, maxSize } from 'rn-responsive-styles';

export const useStyles = CreateResponsiveStyle(
    {
        wrapper: {},
        search_root: {
            height: 70,
            width: '100%',
            backgroundColor: '#fff',
            justifyContent: 'center',
            flexDirection: 'row'
        },
        search_style: {
            width: "80%",
            height: 50,
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: '#D9D9D9',
            borderRadius: 8,
            paddingLeft: "5%"
        },
        apply_root_text: {
            position: 'absolute',
            alignSelf: 'center',
            right: '15%'
        },
        apply_text: {
            fontSize: 16,
            color: 'blue'
        },
        available_coupan_outer_root: {
            backgroundColor: '#fff',
            marginTop: '2%',
            height: '100%'
        },
        available_coupan_root: {
            height: 60,
            width: '100%',
            justifyContent: 'center'
        },
        coupon_text: {
            fontSize: 17,
            fontWeight: '700',
            paddingLeft: '5%'
        },
        coupon_detail_root: {
            height: 200,
            width: '90%',
            borderWidth: 1,
            borderColor: '#D9D9D9',
            borderRadius: 20,
            alignSelf: 'center',
            marginTop: 5
        },
        inner_coupon_detail: {
            height: 180,
            width: '85%',
            alignSelf: 'center'
        },
        headeing_text: {
            fontSize: 18,
            fontWeight: '700',
            paddingTop: 10
        },
        flat_off_text: {
            fontSize: 19,
            paddingTop: 3
        },
        flat_799_text: {
            fontSize: 15,
            lineHeight: 19,
            color: 'grey'
        },
        coupon_flex_root: {
            height: 70,
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        Save_coupon_root: {
            height: 40,
            width: 80,
            borderRadius: 8,
            borderWidth: 1,
            borderStyle: 'dashed',
            alignSelf: 'center',
            justifyContent: 'center',
            backgroundColor: '#cf9e5f'
        },
        save_text: {
            fontSize: 19,
            alignSelf: 'center'
        },
        apply_btn: {
            fontSize: 18,
            color: 'blue'
        }

    },

    {
        /** Medium Device Size */

        [maxSize(DEVICE_SIZES.MD)]: {

            search_style: {
                paddingLeft: "8%"
            },
            available_coupan_outer_root: {
                backgroundColor: '#fff',
                marginTop: '1%',
                height: '72%'
            },
            available_coupan_root: {
                height: 55,
            },
            coupon_text: {
                fontSize: 18,
            },
            coupon_detail_root: {
                height: 150,
                width: '90%',
                marginTop: 2
            },
            headeing_text: {
                fontSize: 19,
            },
            flat_off_text: {
                fontSize: 20,
            },
            flat_799_text: {
                fontSize: 16,
            },
            coupon_flex_root: {
                height: 55,
            },
            Save_coupon_root: {
                height: 35,
            },
            save_text: {
                fontSize: 18,
            },


        },
        /** Extra Small Device Size */

        [maxSize(DEVICE_SIZES.XS)]: {


            search_style: {
                width: "80%",
                height: 50,
                alignSelf: 'center',
                borderWidth: 1,
                borderColor: '#D9D9D9',
                borderRadius: 8,
                paddingLeft: "5%"
            },
            available_coupan_outer_root: {
                backgroundColor: '#fff',
                marginTop: '1%',
                height: '100%'
            },
            available_coupan_root: {
                height: 60,
                width: '100%',
                justifyContent: 'center'
            },
            coupon_text: {
                fontSize: 17,
                fontWeight: '700',
                paddingLeft: '5%'
            },
            coupon_detail_root: {
                height: 200,
                width: '90%',
                borderWidth: 1,
                borderColor: '#D9D9D9',
                borderRadius: 20,
                alignSelf: 'center',
                marginTop: 5
            },
            headeing_text: {
                fontSize: 18,
                fontWeight: '700',
                paddingTop: 10
            },
            flat_off_text: {
                fontSize: 19,
                paddingTop: 3
            },
            flat_799_text: {
                fontSize: 15,
                lineHeight: 19,
                color: 'grey'
            },
            coupon_flex_root: {
                height: 70,
                flexDirection: 'row',
                justifyContent: 'space-between'
            },
            Save_coupon_root: {
                height: 40,
                width: 80,
                borderRadius: 8,
                borderWidth: 1,
                borderStyle: 'dashed',
                alignSelf: 'center',
                justifyContent: 'center',
                backgroundColor: '#cf9e5f'
            },
            save_text: {
                fontSize: 19,
                alignSelf: 'center'
            },

        },
    },
)