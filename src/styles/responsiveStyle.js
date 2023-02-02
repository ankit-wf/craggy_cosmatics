import { CreateResponsiveStyle, DEVICE_SIZES, maxSize } from 'rn-responsive-styles';
import { theme } from '../../src/core/theme';

export const useStyles = CreateResponsiveStyle(
    {
        wrapper: {},
        headerN: {
            paddingTop: 30,
            paddingBottom: 20,
            backgroundColor: '#000',
        },
        containerI: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        headerNotification: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        container: {
            paddingLeft: 20,
            paddingRight: 20,
        },
        headerHamburger: {
            width: 32,
            height: 32,
            marginTop: 0
        },
        headerLogo: {
            width: 115,
            height: 30,
            marginLeft: 1,
        },
        headerIcon: {
            display: 'flex',
            flexDirection: 'row',
        },
        headerIcon1: {
            fontSize: 20,
            color: '#CC933B',
            fontWeight: '700',
            marginLeft: 50,
            paddingTop: 10
        },



        /** Login Page Style **/

        rootContainter: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        Signip_rootContainter: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 50,
        },
        loginBg: {
            width: '100%',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
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
        logoBackground: {
            height: '50%',
            width: '100%',
        },
        icon_container: {
            flexDirection: 'row',
            backgroundColor: theme.siteColor.color9e9da4,
            width: '100%',
        },
        reset_container: {
            backgroundColor: theme.siteColor.color9e9da4,
            width: '100%',
        },
        logInContainer: {
            flexDirection: 'row',
            backgroundColor: theme.siteColor.color9e9da4,
            width: '100%',
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
        inputWidth: {
            width: '100%',
            color: theme.siteColor.colorFFFFFF,
        },
        LoginButtong: {
            display: 'flex',
            width: '100%',
            marginTop: 10
        },
        buttonStyle: {
            padding: 20,
            backgroundColor: '#CC933B',
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
        inputError: {
            color: theme.siteColor.colorCC933B,
            ffontSize: theme.fontsT.fontS16,
            fontStyle: 'italic',
            fontWeight: '600',
        },
        inputIcon: {
            position: 'relative',
            top: 5,
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
        checkboxPassword: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingTop: 30,
            paddingBottom: 30,
        },
        checkboxInput: {
            display: 'flex',
            alignItems: "center",
            flexDirection: "row",
        },
        checkboxField: {
            alignSelf: "center",
            margin: 0,
            padding: 0,
            width: 20,
            height: 20,
        },
        checkboxLabel: {
            color: '#222',
            fontSize: theme.fontsT.fontS16,
            paddingLeft: 10,
        },
        forgetLabel: {
            color: '#222',
            fontSize: theme.fontsT.fontS16,
            fontFamily: 'Raleway',
            fontWeight: '400',
            fontStyle: 'italic',
        },
        containerInput: {
            width: '100%',
            marginVertical: 12,
        },
        description: {
            fontSize: theme.fontsT.fontS11,
            color: theme.colors.secondary,
            paddingTop: 8,
        },
        error: {
            fontSize: theme.fontsT.fontS11,
            color: theme.colors.error,
            paddingTop: 8,
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

            color: '#fff',
            fontWeight: '600',
            // letterSpacing:0,
        },
        contactUsBottom: {
            color: '#CC933B',
            fontWeight: '700',
            // letterSpacing:0,

        },

        /** Home Page Style **/

        siteLogo: {
            display: 'flex',
            alignItems: 'center',
        },
        searchRoot: {
            backgroundColor: theme.siteColor.colo090909,
            paddingTop: 30,
            paddingBottom: 30,
        },
        categoriesRoot: {
            height: 212,
            backgroundColor: '#050505'
        },
        categoriesImgRoot: {
            flexDirection: 'row',
            width: "95%",
            alignSelf: 'center'
        },
        blankSpace: {
            width: "5%",
        },
        touchableImg: {
            height: 126,
            width: "30%",
            justifyContent: 'center',
            borderWidth: 1
        },
        skinImgRoot: {
            height: 90,
            width: "100%",
        },
        imgCenter: {
            alignSelf: 'center'
        },
        skinImgText: {
            color: '#fff',
            fontSize: 12,
            fontWeight: '500',
            lineHeight: 14,
            textAlign: 'center',
            marginTop: 5
        },
        productsListRoot: {
            height: 252,
            width: '95%',
            alignSelf: 'center'
        },
        product109: {
            height: 252,
            width: 145,
            marginRight: 15,
            position: 'relative'
        },
        imgRoot: {
            height: 145,
            width: 145,
        },
        productImg: {
            height: '100%',
            width: "100%"
        },
        contentRoot: {
            height: 95,
            width: 145,
            backgroundColor: '#0D0D0D',
        },
        textRoot: {
            height: 36,
            width: 130,
            alignSelf: 'center',
            marginTop: 5
        },
        contentText: {
            fontSize: 12,
            fontWeight: '300',
            lineHeight: 12,
            color: '#FFFFFF',
            alignSelf: 'center'
        },
        baseLine: {
            height: 1,
            width: 145,
            backgroundColor: '#272727',
            marginTop: 10
        },
        priceRoot: {
            flexDirection: 'row',
            height: 17,
            width: 103,
            alignSelf: 'center',
            marginTop: 7,
        },
        price: {
            color: 'white',
            fontSize: 12
        },
        spaceRoot: {
            color: 'white',
            marginLeft: 5,
            fontSize: 12
        },
        oldprice: {
            color: '#666666',
            textDecorationLine: 'line-through',
            fontSize: 12
        },
        buyNowButton: {
            height: 27,
            width: 98,
            borderRadius: 4,
            backgroundColor: '#C68625',
            position: 'absolute',
            bottom: 0,
            alignSelf: 'center',
            alignItems: 'center',
        },
        buttonText: {
            color: '#0D0D0D',
            textAlign: 'center',
            paddingTop: 4
        },
        promiseRoot: {
            alignItems: 'center',
            paddingBottom: 20,
        },
        promiseText: {
            fontWeight: '400',
            Size: 16,
            lineHeight: 20,
            color: '#666666'
        },
        promiseOuterRoot: {
            paddingBottom: 160,
        },
        group115Root: {
            flexDirection: 'row',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
        },
        oilIconRoot: {
            width: '20%',
            paddingLeft: 15,
            paddingRight: 15,
            paddingBottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
        },
        iconRoot: {
            marginBottom: 8,
        },
        essientialOilText: {
            fontWeight: '400',
            lineHeight: 11,
            fontSize: 9,
            textAlign: 'center',
        },
        ViewProduct: {
            height: 44,
            width: 160,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            alignSelf: 'center',
            backgroundColor: '#CC933B',
            borderRadius: 22,
        },
        viewProductText: {
            fontWeight: '700',
            fontSize: 13,
            color: '#fff',
        },
        swiperRoot: {
            height: 350,
            position: 'relative',
        },

        header: {
            justifyContent: 'center',
            alignItems: 'center',
            top: 0,
            left: 0,
            right: 0,

        },
        sliderContent: {
            position: 'absolute',
            top: '30%',
            left: 20,
            maxWidth: 200,
        },
        bannerCode: {
            marginTop: 30,
            marginBottom: 30,
        },
        bannerText: {
            fontSize: 16,
            color: '#fff',
            fontWeight: '800',
            fontFamily: 'Lato800',
            lineHeight: 24,
        },
        bannerShopNow: {
            color: '#C68625',
            fontSize: 14,
            fontWeight: '700',
            fontFamily: 'Raleway700',
            textAlign: 'center',
            borderWidth: 1,
            borderColor: '#C68625',
            padding: 12,
            maxWidth: 130,
        },
        BestSellingRoot: {
            height: 'auto',
            backgroundColor: '#fff'
        },
        sellingTitleRoot: {
            height: 330,
            width: 465,
            marginLeft: 15,
            marginTop: 26
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
        latestProductText: {
            fontSize: 12,
            lineHeight: 14.09,
            fontWeight: '600',
        },
        latestProductImg: {
            marginLeft: 60
        },
        footerBannerRoot: {
            paddingTop: 40,
            paddingBottom: 40,
            alignItems: 'center',
        },
        footerBannerImage: {
            width: '100%',
            height: 530,
            resizeMode: 'cover',
        },
        SearchBar_container: {
            height: 40,
            width: '100%',
            backgroundColor: '#222222',
        },
        TextInput_container: {
            width: '90%',
            backgroundColor: '#222222',
            alignSelf: 'center',
            borderRadius: 5,
        },
        passwordContainer: {
            flexDirection: 'row',
            backgroundColor: '#222222',
            alignSelf: 'center',
            marginBottom: 0,
            borderColor: 'transparent',
        },
        TextInputSearch: {
            height: 40,
            maxWidth: "70%",
            flex: 1,
        },
        searchIcon: {
            justifyContent: 'center',
            alignSelf: 'center',
        },

        /** Category Page **/

        categoryMainDiv: {
            paddingTop: 30,
            backgroundColor: '#f2f2f2',
            height: '100%',
        },

        categories_root: {
            display: 'flex',
            padding: 10,
            paddingTop: 30,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
        },
        catMainSec: {
            position: 'relative',
            marginBottom: 5,
        },
        categories_text: {
            fontSize: 20,
            color: '#222222',
            fontWeight: '700',
        },
        mens_rooot: {
            height: 80,
            width: '100%',
        },
        mens_text: {
            fontSize: 18,

            color: '#222222',
            textTransform: 'capitalize',
            fontWeight: '700',
            position: 'absolute',
            top: 40,
            left: 15,
            zIndex: 10,
        },

        color: '#222222',
        textTransform: 'capitalize',
        fontWeight: '700',
        // letterSpacing: '0.5px',
        position: 'absolute',
        top: 40,
        left: 15,
        zIndex: 10,
    },

    {
        [maxSize(DEVICE_SIZES.SM)]: {

        },
        [maxSize(DEVICE_SIZES.XS)]: {
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
            containerInner: {
                paddingTop: 0,
                paddingBottom: 20,
                paddingLeft: 15,
                paddingRight: 15,
            },
            loginInput: {
                fontSize: theme.fontsM.fontS13,
                borderWidth: 1,
                lineHeight: theme.lineHeightM.lineH15,
            },
            containerInput: {
                marginVertical: 5,
            },
            checkboxPassword: {
                paddingTop: 10,
                paddingBottom: 15,
            },
            checkboxLabel: {
                fontSize: theme.fontsM.fontS13,
                lineHeight: theme.lineHeightM.lineH15,
                paddingLeft: 8,
            },
            forgetLabel: {
                fontSize: theme.fontsM.fontS13,
                lineHeight: theme.lineHeightM.lineH15,
            },
            inputIcon: {
                top: 5,
            },
            buttonStyle: {
                padding: 16,
                marginBottom: 25,
            },
            LoginButtongTittle: {
                fontSize: theme.fontsM.fontS13,
                lineHeight: theme.lineHeightM.lineH15,
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

        },
    },
)