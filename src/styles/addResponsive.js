import { CreateResponsiveStyle, DEVICE_SIZES, maxSize } from 'rn-responsive-styles';
// import { theme } from '../../src/core/theme';

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

        add_Btn: {
            height: 60,
            width: 60,
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
            marginTop: 10
        },
        default_address_inner: {
            width: '90%',
            alignSelf: 'center'
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
            color: '#fff',
            alignSelf: 'center',
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
            // paddingHorizontal: 10
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
            // margin: 16,
            top: "-5%",
            right: 0,
            // bottom: 0,
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
            fontSize: 16
        },
        firstname_text: {
            // height: 40,
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: 0,
            padding: 0,
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
                position: 'absolute',
                zIndex: 999,
                // margin: 16,
                top: "-22%",
                right: 10,
                // bottom: 0,
            },
            default_address: {
                height: 200,
                width: 500,
                backgroundColor: '#fff',
                borderRadius: 10,
                marginTop: -20
            },
            root_defaultImg: {
                height: 300,
                width: '100%',
                alignSelf: 'center',
                marginTop: '10%'
                // flex: 1,
                // justifyContent: 'center',
            },
            default_Name: {
                color: '#000',
                paddingTop: 8,
                fontSize: 18,
                fontWeight: '700'
            },
            add_text: {
                color: '#000',
                paddingTop: 8,
                fontSize: 17,
                fontWeight: '400',
                // paddingHorizontal: 10
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
                height: 60,
                width: 60,
                backgroundColor: '#000',
                borderRadius: 50,
                alignSelf: 'flex-end',
                marginRight: 20,
                marginTop: '-17%',
                justifyContent: 'center',
            },

            //** Edit Address Page */

            edit_container: {
                height: '74%',
                width: '90%',
                borderWidth: 0.5,
                borderRadius: 15,
                marginTop: 15,
                alignSelf: 'center',
                backgroundColor: '#fff'
            },
        },


        /** Extra Small Device Size */

        [maxSize(DEVICE_SIZES.XS)]: {
            img_center: {
                alignSelf: 'center'
            },
            add_Btn: {
                height: 60,
                width: 60,
                backgroundColor: '#000',
                borderRadius: 50,
                alignSelf: 'flex-end',
                marginRight: 20,
                marginTop: '35%',
                justifyContent: 'center',
            },

            fab: {
                position: 'absolute',
                zIndex: 999,
                // margin: 16,
                top: "-15%",
                right: 0,
                // bottom: 0,
            },
            root_defaultImg: {
                height: 300,
                width: '100%',
                alignSelf: 'center',
                marginTop: '10%'
                // flex: 1,
                // justifyContent: 'center',
            },
            default_address: {
                height: 200,
                width: 300,
                backgroundColor: '#fff',
                borderRadius: 10,
                marginTop: 10
            },
            default_address_inner: {
                width: '90%',
                alignSelf: 'center',
                height: 100
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
                // paddingHorizontal: 10
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
                height: '88%',
                width: '90%',
                borderWidth: 0.5,
                borderRadius: 15,
                marginTop: 15,
                alignSelf: 'center',
                backgroundColor: '#fff'
            },

        },
    },
)





