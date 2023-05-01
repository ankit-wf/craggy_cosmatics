import { Platform } from 'react-native';
import { CreateResponsiveStyle, DEVICE_SIZES, maxSize } from 'rn-responsive-styles';
import { theme } from '../../src/core/theme';

export const useStyles = CreateResponsiveStyle(
    {
        wrapper: {},

        root_container: {
            // flex: 1,
            marginTop: '10%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        img_center: {
            alignSelf: 'center'
        },
        root_defaultImg: {
            height: 300,
            width: '100%',
            alignSelf: 'center',
            marginTop: '10%'
            // flex: 1,
            // justifyContent: 'center',
        },
        root_text: {
            fontSize: (Platform.OS === 'ios') ? 12 : 13,
            fontWeight: (Platform.OS === 'ios') ? '400' : '400',
            fontFamily: 'Raleway'
        },

        add_Btn: {
            height: 50,
            width: 50,
            backgroundColor: '#000',
            borderRadius: 50,
            alignSelf: 'flex-end',
            // marginRight: 20,
            marginTop: '40%',
            justifyContent: 'center',
        },
        btn_text: {
            color: '#fff',
            alignSelf: 'center',
            fontSize: 30
        },
        default_address: {
            height: 200,
            width: 300,
            backgroundColor: '#fff',
            borderRadius: 10,
            marginTop: 10,
        },
        default_address_inner: {
            width: '90%',
            alignSelf: 'center',
        },
        btn_btn: {
            height: 70,
            width: 70,
            backgroundColor: 'red',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            // right: "-20%",
            // bottom: 0,
        },
        add_Add: {
            fontSize: 18,
            color: '#fff',
            // alignSelf: 'flex-end',
            // paddingRight: 15
            // alignItems: 'center'
        },
        default_color: {
            height: 30,
            width: 80,
            backgroundColor: 'red',
            borderRadius: 8,
            justifyContent: 'center',
            marginTop: 15,
            // alignSelf: 'flex-end'
        },
        default_text: {
            // color: '#fff',
            alignSelf: 'center',
            fontSize: 13,
            fontFamily: 'Raleway'
        },
        default_Name: {
            color: '#000',
            paddingTop: 8,
            fontSize: 16,
            fontWeight: '700'
        },
        add_text: {
            color: '#000',
            paddingTop: 8,
            fontSize: 15,
            fontWeight: '400',
            fontFamily: 'Lato'
            // paddingHorizontal: 10
        },
        delete_root: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: 10,
            right: 20
        },
        edit_text: {
            color: 'red',
            paddingTop: 8,
            fontSize: 15,
            fontWeight: '400',
            fontFamily: 'Lato'
        },
        add_delete: {
            color: 'red',
            paddingTop: 8,
            fontSize: 15,
            fontWeight: '400',
            paddingRight: 20
        },
        fab: {
            position: 'absolute',
            zIndex: 999,
            top: "-5%",
            right: 0,
        },

        /** Edit Address Page */

        edit_container: {
            height: '88%',
            width: '90%',
            borderWidth: 0.5,
            borderRadius: 15,
            marginTop: 15,
            alignSelf: 'center',
            backgroundColor: '#fff'
        },
        btn_root: {
            height: 45,
            width: 200,
            backgroundColor: 'black',
            marginTop: 10,
            borderRadius: 10,
            alignSelf: 'center',
            justifyContent: 'center'
        },
        edit_btn_text: {
            color: '#fff',
            alignSelf: 'center',
            fontSize: 16,
            fontFamily: 'Raleway'
        },
        firstname_text: {
            // height: 40,
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: 0,
            padding: 0,
            fontSize: (Platform.OS === 'ios') ? 12 : 12,
            fontFamily: 'Raleway'
        },
        input_error: {
            color: theme.siteColor.colorCC933B,
            ffontSize: theme.fontsT.fontS16,
            fontStyle: 'italic',
            fontWeight: '600',

        },
        width_container: {
            flexDirection: 'row',
            justifyContent: 'space-around'
        },
        full_width: {
            width: '95%',
            alignSelf: 'center'
        },
        half_width: {
            width: '45%'
        }

    },

    {
        /** Medium Device Size */

        [maxSize(DEVICE_SIZES.MD)]: {
            fab: {
                top: (Platform.OS === 'ios') ? '-25%' : "-25%",
                right: (Platform.OS === 'ios') ? 10 : 10,
            },
            default_address: {
                height: 200,
                width: 500,
                backgroundColor: '#fff',
                borderRadius: 10,
                marginTop: -20
            },
            root_defaultImg: {
                marginTop: '-5%'
                // flex: 1,
                // justifyContent: 'center',
            },
            root_text: {
                fontSize: (Platform.OS === 'ios') ? 13 : 14,
            },
            btn_text: {
                fontSize: (Platform.OS === 'ios') ? 20 : 20
            },
            default_Name: {
                paddingTop: (Platform.OS === 'ios') ? 12 : 15,
                fontSize: (Platform.OS === 'ios') ? 15 : 15,
                fontWeight: (Platform.OS === 'ios') ? '500' : '500',
            },
            default_text: {
                fontSize: (Platform.OS === 'ios') ? 15 : 18,
                fontWeight: (Platform.OS === 'ios') ? '500' : '700',
                marginTop: (Platform.OS === 'ios') ? 15 : 25
            },
            add_text: {
                paddingTop: (Platform.OS === 'ios') ? 8 : 5,
                fontSize: (Platform.OS === 'ios') ? 14 : 14,
                fontWeight: (Platform.OS === 'ios') ? '600' : '600'
            },
            delete_root: {
                marginTop: (Platform.OS === 'ios') ? 10 : 10
            },
            edit_text: {
                paddingTop: (Platform.OS === 'ios') ? 10 : 11,
                fontSize: (Platform.OS === 'ios') ? 15 : 15,
                fontWeight: (Platform.OS === 'ios') ? '500' : '500',
                fontFamily: 'Lato'
            },
            add_delete: {
                color: 'red',
                paddingTop: 8,
                fontSize: 17,
                fontWeight: '500',
                paddingRight: 20
            },
            img_center: {
                alignSelf: 'center'
            },
            add_Btn: {
                marginRight: (Platform.OS === 'ios') ? '-15%' : '-20%',
                marginTop: (Platform.OS === 'ios') ? '-17%' : '-17%',
            },

            //** Edit Address Page */

            edit_container: {
                height: (Platform.OS === 'ios') ? '74%' : '74%',
                width: '90%',
                borderWidth: 0.5,
                borderRadius: 15,
                marginTop: 15,
                alignSelf: 'center',
                backgroundColor: '#fff'
            },
            btn_root: {
                bottom: (Platform.OS === 'ios') ? 1 : 0,
            },
            edit_btn_text: {
                fontSize: (Platform.OS === 'ios') ? 14 : 14,
                fontWeight: (Platform.OS === 'ios') ? '600' : '600'
            },
            firstname_text: {
                fontSize: (Platform.OS === 'ios') ? 14 : 14,
            },
        },


        /** Extra Small Device Size */

        [maxSize(DEVICE_SIZES.XS)]: {
            img_center: {
                alignSelf: 'center'
            },
            add_Btn: {
                marginRight: (Platform.OS === 'ios') ? 20 : 10,
                marginTop: (Platform.OS === 'ios') ? '35%' : '0%',
            },

            fab: {
                top: (Platform.OS === 'ios') ? "5%" : '5%',
                right: (Platform.OS === 'ios') ? 10 : 10,
            },
            root_defaultImg: {
                marginTop: '10%'
            },
            default_address: {
                height: 200,
                width: 300,
                backgroundColor: '#fff',
                borderRadius: 10,
                marginTop: (Platform.OS === 'ios') ? '10%' : '10%'
            },
            default_address_inner: {
                width: '90%',
                alignSelf: 'center',
                height: 100
            },
            default_Name: {
                paddingTop: (Platform.OS === 'ios') ? 10 : 15,
                fontSize: (Platform.OS === 'ios') ? 15 : 15,
                fontWeight: (Platform.OS === 'ios') ? '500' : '500'
            },
            default_text: {
                fontSize: (Platform.OS === 'ios') ? 12 : 18,
                fontWeight: (Platform.OS === 'ios') ? '500' : '700',
                marginTop: (Platform.OS === 'ios') ? 15 : 25
            },
            add_text: {
                paddingTop: (Platform.OS === 'ios') ? 8 : 5,
                fontSize: (Platform.OS === 'ios') ? 13 : 14,
                fontWeight: (Platform.OS === 'ios') ? '500' : '500'
            },
            delete_root: {
                marginTop: (Platform.OS === 'ios') ? 10 : 10
            },
            edit_text: {
                paddingTop: (Platform.OS === 'ios') ? 8 : 11,
                fontSize: (Platform.OS === 'ios') ? 15 : 15,
                fontWeight: (Platform.OS === 'ios') ? '500' : '500',
                fontFamily: 'Lato'
            },
            btn_text: {
                fontSize: (Platform.OS === 'ios') ? 20 : 20
            },
            add_delete: {
                color: 'red',
                paddingTop: 8,
                fontSize: 15,
                fontWeight: '400',
                paddingRight: 20
            },

            //** Edit Address Page */

            edit_container: {
                height: (Platform.OS === 'ios') ? '87%' : '88%',
                width: '90%',
                borderWidth: 0.5,
                borderRadius: 15,
                marginTop: 15,
                alignSelf: 'center',
                backgroundColor: '#fff'
            },
            btn_root: {
                bottom: (Platform.OS === 'ios') ? 0 : 0,
            },
            edit_btn_text: {
                fontSize: (Platform.OS === 'ios') ? 14 : 14,
                fontWeight: (Platform.OS === 'ios') ? '500' : '500'
            },
            firstname_text: {
                fontSize: (Platform.OS === 'ios') ? 14 : 14,
            },

        },
    },
)





