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
            height: '50%',
            width: '100%',
            marginTop: 0
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
            marginTop: 20
        },
        inputWidth: {
            width: '100%',
            color: theme.siteColor.colorFFFFFF,
        },
        loginInput: {
            width: '100%',
            fontSize: theme.fontsT.fontS14,
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: 0,
            backgroundColor: '#fff',
            padding: 0,
        },
        inputError: {
            color: theme.siteColor.colorCC933B,
            ffontSize: theme.fontsT.fontS16,
            fontStyle: 'italic',
            fontWeight: '600',
        },
        checkboxPassword: {
            display: 'flex',
            flexDirection: 'row-reverse',
            width: '100%',
            paddingTop: 30,
            paddingBottom: 30,
        },
        forgetLabel: {
            color: '#222',
            fontSize: theme.fontsT.fontS16,
            fontFamily: 'Raleway',
            fontWeight: '400',
            fontStyle: 'italic',
        },
        LoginButtongTittle: {
            textAlign: 'center',
            textTransform: 'uppercase',
            color: theme.siteColor.colorFFFFFF,
            fontWeight: '800',
            fontSize: theme.fontsT.fontS16,
            lineHeight: theme.lineHeightT.lineH14,
        },
        loginBottom: {
            position: 'relative',
            bottom: 50,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        needHelpBottom: {
            color: '#fff',
            fontWeight: '600',
        },
        contactUsBottom: {
            color: '#CC933B',
            fontWeight: '700',
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
                height: "60%",
                width: '60%',
                marginTop: -20
            },

            loginInput: {
                width: '100%',
                height: 40,
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS14 : theme.fontsM.fontS14,
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderBottomWidth: 0,
                backgroundColor: '#fff',
                padding: 0,
                marginTop: 0
            },
            inputWidth: {
                width: '100%',
                color: theme.siteColor.colorFFFFFF,

            },
            checkboxPassword: {
                width: '100%',
                paddingTop: 0,
                paddingBottom: 15,
            },
            forgetLabel: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS14 : theme.fontsM.fontS14,
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH15 : theme.lineHeightM.lineH15,
                paddingTop: 0
            },

            LoginButtong: {
                marginTop: 0
            },
            buttonStyle: {
                padding: 15,
                backgroundColor: '#C68625',
                borderRadius: 20,
            },
            LoginButtongTittle: {
                fontWeight: (Platform.OS === 'ios') ? '500' : '500',
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS14 : theme.fontsM.fontS14,
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH14 : theme.lineHeightM.lineH14,
            },
            Containterlogin: {
                padding: 15,
                bottom: '16%',
                marginTop: 0
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

            loginText: {
                fontSize: theme.fontsM.fontS14,
                lineHeight: theme.lineHeightM.lineH16,
                padding: 15,
            },
            Containter: {
                width: "85%",
                borderRadius: 10,
                borderWidth: 2,
            },

            logoBackground: {
                height: '40%',
                width: '100%',
                marginTop: -40
            },
            containerInner: {
                paddingTop: 0,
                paddingBottom: 20,
                paddingLeft: 15,
                paddingRight: 15,
            },
            loginInput: {
                width: '100%',
                height: 50,
                fontSize: (Platform.OS === 'ios') ? theme.fontsT.fontS12 : theme.fontsT.fontS12,
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderBottomWidth: 0,
                backgroundColor: '#fff',
                padding: 0,
            },
            containerInput: {
                marginVertical: 0,
            },
            checkboxPassword: {
                paddingTop: 10,
                paddingBottom: 10,
            },
            checkboxLabel: {
                fontSize: theme.fontsM.fontS13,
                lineHeight: theme.lineHeightM.lineH15,
                paddingLeft: 8,
            },
            forgetLabel: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS13 : theme.fontsM.fontS13,
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH15 : theme.lineHeightM.lineH15,
                paddingTop: 0
            },
            inputIcon: {
                top: 5,
            },
            LoginButtongTittle: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS13 : theme.fontsM.fontS13,
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH15 : theme.lineHeightM.lineH15,
            },
            creatAccount: {
                fontSize: theme.fontsM.fontS13,
                lineHeight: theme.lineHeightM.lineH15,
            },
            error: {
                fontSize: theme.fontsM.fontS10,
            },
            inputError: {
                fontSize: theme.fontsM.fontS10,
            },

            checkboxField: {
                width: 15,
                height: 15,
            },
            swiperRoot: {
                height: 230,
            },
            sliderContent: {
                top: '10%',
            },
            bannerCode: {
                marginTop: 15,
                marginBottom: 15,
            },
            bannerText: {
                fontSize: 15,
            },
            bannerShopNow: {
                fontSize: 13,
                padding: 12,
            },
            footerBannerImage: {
                height: 280,
                resizeMode: 'contain',
            },
            oilIconRoot: {
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 15,
            },
            LoginButtong: {
                marginTop: 10
            },
            buttonStyle: {
                padding: 20,
                backgroundColor: '#C68625',
                borderRadius: 24,
            },
            inputWidth: {
                width: '100%',
                color: theme.siteColor.colorFFFFFF,
            },
            Containterlogin: {
                bottom: '16%',
                marginTop: 20
            },


        },
    },
)





