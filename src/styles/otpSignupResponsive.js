import { CreateResponsiveStyle, DEVICE_SIZES, maxSize } from 'rn-responsive-styles';
import { theme } from '../../src/core/theme';
import { Platform } from 'react-native';

export const useStyles = CreateResponsiveStyle(
    {
        wrapper: {},

        rootContainter: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        loginBg: {
            width: '100%',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
        },
        logoBackground: {
            height: '40%',
            width: '100%',
            marginTop: -40
        },
        Containterlogin: {
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            padding: 25,
            paddingBottom: 10,
            backgroundColor: '#fff',
            width: '90%',
            borderRadius: 8,
            position: 'relative',
            zIndex: 999,
            bottom: '15%',

        },
        checkboxPassword: {
            display: 'flex',
            flexDirection: 'row-reverse',
            width: '100%',
            paddingTop: 30,
            paddingBottom: 30,
        },
        Textinput_root: {
            flex: 2,
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            marginTop: 10,
        },
        input_Style: {
            height: 50,
            width: 50,
            borderRadius: 10,
            borderWidth: 0.5,
            fontWeight: "600",
            alignSelf: 'center',
            fontSize: 20,
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center',
            backgroundColor: '#f5f4f2',
        },
        fill_root: {
            width: "100%",
            flexDirection: 'row'
        },
        Fill_counter_root: {
            width: "60%",
            justifyContent: 'center',
            alignItems: 'flex-start'
        },
        Fill_counter_text: {
            color: 'grey',
            textAlign: 'left'
        },
        fill_resend_root: {
            width: "40%",
            justifyContent: 'center',
            alignItems: 'flex-end'
        },
        fill_resend_text: {
            color: 'grey',
            textAlign: 'right',
            fontWeight: '600',
            textDecorationLine: 'underline',
            textDecorationColor: 'grey'
        },
        empty_root: {
            width: "100%",
            flexDirection: 'row'
        },
        empty_counter_root: {
            width: "60%",
            justifyContent: 'center',
            alignItems: 'flex-end'
        },
        empty_resend_root: {
            width: "40%",
            justifyContent: 'center',
            alignItems: 'flex-end'
        },
        empty_resend_text: {
            color: 'blue',
            textAlign: 'right',
            fontWeight: '600',
            textDecorationColor: 'blue',
            textDecorationLine: 'underline'
        },
        LoginButtong: {
            display: 'flex',
            width: '100%',
            marginTop: 10
        },
        buttonStyle: {
            padding: 20,
            backgroundColor: '#C68625',
            borderRadius: 24,
        },
        LoginButtongTittle: {
            textAlign: 'center',
            textTransform: 'uppercase',
            color: theme.siteColor.colorFFFFFF,
            fontWeight: '800',
            fontSize: theme.fontsT.fontS16,
            lineHeight: theme.lineHeightT.lineH14,
        },


    },

    {
        /** Medium Device Size */

        [maxSize(DEVICE_SIZES.MD)]: {
            loginBg: {
                width: '100%',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#000',
            },
            logoBackground: {
                height: '70%',
                width: '60%',
                marginTop: "0%"
            },
            checkboxPassword: {
                width: '90%',
                paddingTop: 20,
                paddingBottom: 20,
            },
            LoginButtong: {
                marginTop: 10,
            },
            Containterlogin: {
                bottom: '20%',
                width: "70%",
                borderRadius: 15
            },
            LoginButtongTittle: {
                fontWeight: (Platform.OS === 'ios') ? '500' : '500',
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS14 : theme.fontsM.fontS13,
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH14 : theme.lineHeightM.lineH14,
            },
            buttonStyle: {
                borderRadius: 28,
            },
        },


        /** Extra Small Device Size */

        [maxSize(DEVICE_SIZES.XS)]: {
            loginBg: {
                width: '100%',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#000',
            },
            logoBackground: {
                height: '50%',
                width: '100%',
                marginTop: "-35%"
            },
            Containterlogin: {
                padding: 15,
                bottom: '16%',
                marginTop: 0,
                width: "90%",
            },
            checkboxPassword: {
                display: 'flex',
                flexDirection: 'row-reverse',
                width: '100%',
                paddingTop: 30,
                paddingBottom: 30,
            },

        },
    },
)





