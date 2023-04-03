import { Platform } from 'react-native';
import { CreateResponsiveStyle, DEVICE_SIZES, maxSize } from 'rn-responsive-styles';
import { theme } from '../../src/core/theme';

export const useStyles = CreateResponsiveStyle(
    {
        wrapper: {},

        headerN: {
            paddingTop: 10,
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
        headerLogo: {
            width: 115,
            height: 30,
            marginLeft: 1,
        },
        container: {
        },
        searchbar_root: {
            width: "100%",
            flexDirection: 'row',
            backgroundColor: '#222222',
            borderRadius: 8,
            alignSelf: 'center'
        },
        inner_search_root: {
            width: '90%'
        },
        search_style: {
            height: 48,
            padding: 15
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
            flexDirection: 'row-reverse',
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
        },


        /** Home Page Style **/

        category_root_img: {
            height: 80,
            width: 80,
            marginLeft: 8,
            marginTop: 30,
            borderRadius: 50,
        },

        best_touchable: {
            height: 252,
            width: 145,
            marginRight: 15,
            position: 'relative',
        },

        imgRoot: {
            height: 145,
            width: 145,
            // borderColor: 'red',
            // borderWidth: 1
        },
        siteLogo: {
            display: 'flex',
            alignItems: 'center',
        },
        searchRoot: {
            backgroundColor: theme.siteColor.colo090909,
            paddingTop: 30,
            paddingBottom: 30,
        },
        categories_img_Root: {
            height: 150,
            width: "100%",
            backgroundColor: '#050505',
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'space-around'
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
            width: '100%',
        },
        productImg: {
            height: '100%',
            width: "100%"
        },
        contentRoot: {
            height: 95,
            width: '100%',
            backgroundColor: '#0D0D0D',
            display: 'flex'
        },
        textRoot: {
            height: 36,
            width: 130,
            alignSelf: 'center',
            justifyContent: 'center',
        },
        contentText: {
            fontSize: 12,
            fontWeight: '300',
            lineHeight: 12,
            color: '#FFFFFF',
            alignSelf: 'center',
            paddingTop: 8
        },
        baseLine: {
            height: 1,
            width: '100%',
            backgroundColor: '#272727',
            marginTop: 10
        },
        priceRoot: {
            flexDirection: 'row',
            height: 17,
            alignSelf: 'center',
            marginTop: 7,
            // width: 103,
            // flexDirection: 'row',
            // height: 17,
            width: "99%",
            justifyContent: 'center',
            alignSelf: 'center',
            // marginTop: 7,
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
            fontFamily: 'Baskervville',
            fontWeight: '400',
            lineHeight: 20,
            color: '#666666'
        },
        promiseOuterRoot: {
            paddingBottom: 90,
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
            fontFamily: 'Lato',
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
            fontFamily: 'Raleway',
            fontWeight: '700',
            fontSize: 11,
            color: '#fff',
        },
        swiperRoot: {
            height: 350,
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center'
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
            fontFamily: 'Lato',
            lineHeight: 24,
        },
        bannerShopNow: {
            color: '#C68625',
            fontSize: 14,
            fontWeight: '700',
            fontFamily: 'Raleway',
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
        bestSellerRoot: {
            height: 50,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            marginBottom: 10,
        },
        viewLatestProduct: {
            height: 25,
            width: 80,
            borderRadius: 15,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            marginRight: 20,
            alignSelf: 'center',
            flexDirection: 'row'
        },
        latestProductText: {
            fontSize: 12,
            lineHeight: 15,
            fontWeight: '600',
            fontFamily: 'Raleway',
            paddingLeft: 5
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
            height: "100%",
        },
        categories_root: {
            height: 80,
            justifyContent: 'center',
            alignSelf: 'center'
        },
        catMainSec: {
            position: 'relative',
            marginBottom: 5,
        },
        categories_text: {
            fontSize: 20,
            color: '#222222',
            fontFamily: 'Raleway',
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
            position: 'absolute',
            top: 40,
            left: 15,
            zIndex: 10,
            fontFamily: 'Raleway',
            fontWeight: '700',
        },


        /** Account Page  */

        account_Root: {
            height: '20%',
        },
        profileImgRoot: {
            width: "80%",
            flexDirection: 'row',
            alignSelf: 'center',
            marginVertical: '5%',
            marginHorizontal: '10%',
        },
        ImgRoot_Radius: {
            height: 80,
            width: 80,
            borderWidth: 3,
            borderColor: '#CC933B',
            borderRadius: 100,
            alignSelf: 'center'
        },
        Account_profile_image: {
            width: "100%",
            height: "100%",
            borderRadius: 50,
        },
        display_name: {
            width: 300
        },
        redTextName: {
            color: '#CC933B',
            fontSize: 20,
            fontWeight: '700',
            fontFamily: 'Raleway',
            lineHeight: 22,
            paddingLeft: 15
        },
        user_phone: {
            width: 300,
            marginTop: 8
        },
        redText: {
            color: '#CC933B',
            fontSize: 15,
            fontWeight: '500',
            fontFamily: 'Raleway',
            lineHeight: 22,
            paddingLeft: 15
        },
        CraggyTextRoot: {
            height: '80%',
            backgroundColor: '#ffffff',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            position: 'relative',
        },
        myProfileRoot: {
            height: 45,
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center'
        },
        icon_style: {
            marginTop: 8
        },
        profileText: {
            fontSize: 14,
            lineHeight: 42,
            fontWeight: '500',
            fontFamily: 'Raleway',
            paddingHorizontal: 15,
            paddingTop: 3
        },
        icon_lineHieght: {
            lineHeight: 42
        },
        bs_Line: {
            height: 1,
            width: '100%',
            alignSelf: 'center',
            backgroundColor: '#C4C4C4',
            marginTop: 10
        },



        //** Product Detail Page */

        safe_root: {
            height: '100%',
            width: '100%',
            alignSelf: 'center',
        },
        product_swiperRoot: {
            height: 400,
            position: 'relative'
        },
        swiper_image: {
            height: '100%',
            width: '100%'
        },
        shadow_Box: {
            flex: 1,
            justifyContent: 'center',
            height: 50,
            width: 50,
            borderRadius: 100,
            position: 'absolute',
            bottom: '15%',
            left: '8%'
        },
        shadow_Box1: {
            flex: 1,
            justifyContent: 'center',
            height: 50,
            width: 50,
            borderRadius: 100,
            position: 'absolute',
            bottom: '15%',
            right: '8%'
        },
        fabOne: {
            flex: 1,
            justifyContent: 'center',
            alignSelf: 'center',
            height: 35,
            width: 35,
            borderRadius: 100,
            backgroundColor: '#fff',
            position: 'absolute',
        },
        product_Title_Root: {
            padding: 15,
            backgroundColor: '#fff',
            marginTop: '-12%'
        },
        Title_text_Root: {
            flex: 1,
            justifyContent: 'center',
            alignSelf: 'center',
            width: "90%"
        },
        Title_craggy_Text: {
            color: '#CC933B',
            fontSize: 16,
            fontWeight: '600',
            fontFamily: 'Raleway',
            lineHeight: 22,
            letterSpacing: 0.5
        },
        Accordion_Root: {
            alignContent: 'center',
            width: '90%',
            alignSelf: 'center'
        },
        description_heading: {
            height: 50,
            width: '40%',
            justifyContent: 'center'
        },
        titleStyle_description: {
            color: '#222222',
            fontFamily: 'Raleway',
            fontWeight: '500',
            fontSize: 14,
            lineHeight: 17,
            padding: 10
        },
        li_text_root: {
            flexDirection: 'row',
            alignSelf: 'center',
        },
        li_text: {
            textAlign: "justify",
            marginLeft: 10,
            fontSize: 14,
            letterSpacing: 0.2,
            lineHeight: 27,
            fontFamily: 'Lato',
            fontWeight: '400',
            width: '85%',
            color: '#444444'
        },
        review_outerRoot: {
            backgroundColor: '#ffffff',
            marginTop: 20,
            width: '100%',
            marginBottom: 30
        },
        review_innerRoot: {
            width: '90%',
            alignSelf: 'center',
        },
        reviews_root: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
        },
        reviews_length: {
            fontSize: 14,
            fontWeight: '600',
            fontFamily: 'Raleway',
            lineHeight: 17
        },
        review_Short: {
            fontSize: 12,
            fontWeight: '400',
            fontFamily: 'Lato',
            lineHeight: 15
        },
        review_MainHeading: {
            fontSize: 16,
            fontWeight: '500',
            fontFamily: 'Raleway',
            lineHeight: 19
        },
        ProductDetail_baseLine2: {
            height: 1,
            width: '100%',
            alignSelf: 'center',
            backgroundColor: '#272727',
            marginTop: 20
        },
        ProductDetail_baseLine: {
            height: 1,
            backgroundColor: '#272727',
            marginTop: 5
        },
        write_review: {
            borderWidth: 1,
            borderRadius: 4,
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 35,
            paddingRight: 35,
            borderColor: '#333333'
        },
        review_heading: {
            fontSize: 10,
            fontWeight: '400',
            fontFamily: 'Lato'
        },
        review_Name: {
            fontSize: 16,
            fontWeight: '700',
            fontFamily: 'Raleway',
            lineHeight: 19,
        },
        review_Date: {
            fontSize: 12,
            fontWeight: '400',
            fontFamily: 'Lato',
            lineHeight: 15
        },
        review_Review: {
            fontSize: 16,
            fontWeight: '400',
            fontFamily: 'Lato',
            lineHeight: 20,
            marginTop: 5,
            textAlign: 'justify'
        },
        allreview_root: {
            height: 40,
            width: '100%',
            borderWidth: 0.4,
            marginTop: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 4
        },
        all_review_text: {
            paddingLeft: 20,
            fontSize: 20
        },
        youMayAlso: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            marginBottom: 10
        },
        product_viewLatest_Product: {
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
        latestProduct_Text: {
            fontSize: 12,
            lineHeight: 14.09,
            fontWeight: '600',
        },
        products_Details_ListRoot: {
            height: 252,
            width: '95%',
            alignSelf: 'center',
            marginBottom: "10%"
        },
        product_Snackbar_style: {
            width: "70%",
            height: 70,
            alignSelf: 'center',
            position: 'absolute',
            zIndex: 3,
            bottom: 250,
            opacity: 0.7
        },
        product_Snackbar_text: {
            color: '#fff',
            fontSize: 15,
            textAlign: 'center'
        },
        sticky_Btn: {
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0,
            zIndex: 2,
            backgroundColor: '#fff',

        },
        bottomView: {
            height: 60,
            width: '50%',
            justifyContent: 'center',
        },
        inner_bottomView: {
            height: 50,
            width: '90%',
            justifyContent: 'center',
            // backgroundColor: 'blue'
        },
        bottomView1: {
            height: 60,
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        textStyle: {
            color: '#000',
            fontSize: 22
        },


        /** Write Reviews page */

        write_root: {
            backgroundColor: '#fff',
            height: '100%'
        },
        write_back_root: {
            flexDirection: 'row',
            justifyContent: 'center'
        },
        ReviewsTitle: {
            paddingTop: '8%',
            fontSize: 20,
            paddingLeft: '10%'
        },
        rating_outer_root: {
            flexDirection: 'row',
            marginTop: '10%'
        },
        rating_inner_root: {
            marginLeft: '5%'
        },
        starReviws: {
            marginLeft: 10,
            marginTop: 15,
            fontSize: 17,
            fontWeight: '500'
        },
        rating_title_root: {
            width: "90%",
            alignSelf: 'center'
        },
        rating_description_height: {
            maxHeight: 200,
            paddingBottom: 20,
        },
        rating_button_root: {
            width: "90%",
            alignSelf: 'center',
            marginTop: 20
        },


        /** Product Listing Page */

        banner_img_root: {
            height: 200,
        },
        banner_img: {
            height: '100%',
            width: '100%'
        },
        Cat_Seller_Root: {
            height: 50,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth: 1
        },
        productListing_name: {
            paddingLeft: 20,
            marginTop: 20,
            marginBottom: 10,
            fontFamily: 'Raleway',
            fontWeight: '600',
            textTransform: "uppercase",
            color: '#CC933B',
            fontSize: 16,
            lineHeight: 19,
            textAlign: 'left'
        },
        touchable_sort: {
            height: 30,
            width: 120,
            borderRadius: 15,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            // marginTop: 10,
            marginRight: 20,
            alignSelf: 'center',
            flexDirection: 'row'
        },
        sort_Text: {
            fontSize: 11,
            lineHeight: 14.09,
            paddingLeft: 5,
            fontFamily: 'Raleway',
            fontWeight: '500',
        },
        dots: {
            fontSize: 12,
            lineHeight: 14.09,
            fontFamily: 'Raleway',
            fontWeight: '600',
            paddingLeft: 3,
        },
        panel: {
            paddingTop: 5,
        },
        sort_align_root: {
            alignItems: 'center'
        },
        panelTitle: {
            fontSize: 27,
            height: 40,
            fontFamily: 'Raleway',
            fontWeight: '600',
        },
        panel_btnText_Root: {
            flexDirection: 'row',
            width: "100%",
            alignSelf: 'center',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        panel_select_text: {
            fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS16 : theme.fontsM.fontS16,
            padding: 6,
            marginLeft: 15,
            fontWeight: (Platform.OS === 'ios') ? "600" : "700",
            fontFamily: 'Raleway',
        },
        flatList_Root: {
            height: '100%',
            width: '100%',
            alignSelf: 'center',
        },
        flatList_tochable_root: {
            height: 252,
            width: '42.2%',
            marginLeft: '5%',
            marginTop: 20,
            marginBottom: 20,
        },
        flatList_imgRoot: {
            height: 145,
            width: '100%',
        },
        flatList_Img: {
            height: '100%',
            width: "100%"
        },
        img_icon_root: {
            position: 'absolute',
            alignSelf: 'flex-end',
            marginTop: 10,
            height: 30,
            width: 30,
            backgroundColor: '#C68625',
            borderRadius: 50,
        },
        icon_style: {
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 3
        },
        flatList_contentRoot: {
            height: 95,
            width: '100%',
            backgroundColor: '#0D0D0D',
            display: 'flex'
        },
        flatList_textRoot: {
            height: 36,
            width: 130,
            alignSelf: 'center',
            justifyContent: 'center',
        },
        flatList_contentText: {
            fontSize: 10,
            fontWeight: '300',
            fontFamily: 'Lato',
            lineHeight: 12,
            color: '#FFFFFF',
            alignSelf: 'center'
        },

        flatList_baseLine: {
            height: 1,
            width: '100%',
            backgroundColor: '#272727',
            marginTop: 10
        },
        flatList_priceRoot: {
            flexDirection: 'row',
            height: 17,
            width: "99%",
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 7,
        },
        flatList_oldprice: {
            color: '#666666',
            textDecorationLine: 'line-through',
            fontSize: 12,
            fontFamily: 'Lato',
            fontWeight: '600',
            lineHeight: 15
        },
        flatList_spaceRoot: {
            color: 'white',
            marginLeft: 3,
            marginRight: 3,
            fontSize: 12,
            lineHeight: 15
        },
        flatList_price: {
            color: 'white',
            fontSize: 12,
            fontFamily: 'Lato',
            fontWeight: '300',
            lineHeight: 15,
        },

        btn_btn: {
            height: 27,
            width: '100%',
        },
        flatList_buyNowButton: {
            height: 27,
            width: 98,
            borderRadius: 4,
            backgroundColor: '#C68625',
            position: 'absolute',
            bottom: 0,
            alignSelf: 'center',
            alignItems: 'center',
        },

        flatList_buttonText: {
            color: '#0D0D0D',
            textAlign: 'center',
            paddingTop: 7,
            fontFamily: 'Raleway',
            fontWeight: '700',
            fontSize: 10,
            lineHeight: 13,
        },

        //** Order Screen */

        no_order_text: {
            fontSize: 18,
            fontWeight: '700',
            alignSelf: 'center',
            paddingTop: '5%',
            fontFamily: 'Lato'
        },
        shopping_btn: {
            height: 40,
            width: 150,
            borderWidth: 1,
            borderRadius: 5,
            alignSelf: 'center',
            justifyContent: 'center',
            backgroundColor: '#C68625',
            marginTop: 50
        },
        shopping_text: {
            fontSize: 16,
            alignSelf: 'center',
            color: '#fff',

        },

        // color: '#222222',
        // textTransform: 'capitalize',
        // fontWeight: '700',
        // // letterSpacing: '0.5px',
        // position: 'absolute',
        // top: 40,
        // left: 15,
        // zIndex: 10,
    },

    {

        /** Medium Device Size */

        [maxSize(DEVICE_SIZES.MD)]: {

            //** Order Screen */

            no_order_text: {
                fontSize: (Platform.OS === 'ios') ? 18 : 18,
                fontWeight: (Platform.OS === 'ios') ? '700' : '700',
            },
            shopping_btn: {
                height: 40,
                width: 150,
                borderWidth: 1,
                borderRadius: 5,
                alignSelf: 'center',
                justifyContent: 'center',
                backgroundColor: '#C68625',
                marginTop: 50,
                marginBottom: 10
            },
            shopping_text: {
                fontSize: 16,
                alignSelf: 'center',
                color: '#fff',

            },

            /** Home Page */

            categories_img_Root: {
                height: 150,
                width: "100%",
                backgroundColor: '#050505',
                flexDirection: 'row',
                alignContent: 'center',
                justifyContent: 'space-around'

            },
            swiperRoot: {
                height: 250,
            },
            category_root_img: {
                height: 80,
                width: 80,
                // marginLeft: 45,
                marginLeft: (Platform.OS === 'ios') ? 27 : 34,
                marginTop: 30,
                borderRadius: 50,
                // borderWidth: 1,
                // borderColor: '#fff'
            },
            productsListRoot: {
                height: 252,
                width: '85%',
                alignSelf: 'center'
            },
            best_touchable: {
                marginRight: 90,
            },
            skinImgText: {
                color: '#fff',
                fontSize: (Platform.OS === 'ios') ? 12 : 12,
                fontWeight: (Platform.OS === 'ios') ? '600' : '600',
                lineHeight: (Platform.OS === 'ios') ? 20 : 18,
                textAlign: 'center',
                marginTop: (Platform.OS === 'ios') ? 10 : 10,
            },


            footerBannerImage: {
                height: 280,
                resizeMode: 'contain',
            },

            /** Account Page */

            account_Root: {
                height: '15%',
            },
            profileImgRoot: {
                width: "80%",
                flexDirection: 'row',
                alignSelf: 'center',
                marginVertical: '5%',
            },
            ImgRoot_Radius: {
                height: 100,
                width: 100,
                borderWidth: 3,
                borderColor: '#CC933B',
                borderRadius: 100,
                alignSelf: 'center'
            },
            display_name: {
                width: 450,
            },
            redTextName: {
                color: '#CC933B',
                fontSize: 20,
                fontWeight: '700',
                fontFamily: 'Raleway',
                lineHeight: 22,
                paddingLeft: 15
            },
            user_phone: {
                width: 450,
                marginTop: 15,
            },
            redText: {
                color: '#CC933B',
                fontSize: 15,
                fontWeight: '500',
                fontFamily: 'Raleway',
                lineHeight: 22,
                paddingLeft: 15
            },
            CraggyTextRoot: {
                height: '80%',
                backgroundColor: '#ffffff',
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                marginTop: '10%',
                position: 'relative'
            },


            /** Product Detail Page */

            // safe_root: {
            //     height: '100%',
            //     width: '100%',
            //     alignSelf: 'center',
            // },
            // product_swiperRoot: {
            //     height: 400,
            //     position: 'relative'
            // },
            shadow_Box: {
                flex: 1,
                justifyContent: 'center',
                height: 50,
                width: 50,
                borderRadius: 100,
                position: 'absolute',
                bottom: '10%',
                left: '10%'
            },
            shadow_Box1: {
                flex: 1,
                justifyContent: 'center',
                height: 50,
                width: 50,
                borderRadius: 100,
                position: 'absolute',
                bottom: '10%',
                right: '10%'
            },
            product_Title_Root: {
                padding: 15,
                backgroundColor: '#fff',
                marginTop: '0%'
            },
            Title_craggy_Text: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS16 : theme.fontsM.fontS16,
                fontWeight: (Platform.OS === 'ios') ? '600' : '700',
                fontFamily: 'Raleway',
                textAlign: 'center',
            },
            titleStyle_description: {
                fontFamily: 'Raleway',
                fontWeight: (Platform.OS === 'ios') ? '600' : '700',
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS16 : theme.fontsM.fontS15,
            },
            li_text: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS16 : theme.fontsM.fontS15,
                fontFamily: 'Lato',
                fontWeight: (Platform.OS === 'ios') ? '600' : '600',
            },
            review_MainHeading: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS15 : theme.fontsM.fontS16,
                fontWeight: (Platform.OS === 'ios') ? '600' : '600',
                fontFamily: 'Raleway',
                lineHeight: (Platform.OS === 'ios') ? 25 : 25,
            },
            write_review: {
                // borderWidth: 1,
                // borderRadius: 4,
                paddingTop: (Platform.OS === 'ios') ? 12 : 12,
                paddingBottom: (Platform.OS === 'ios') ? 12 : 12,
                paddingLeft: (Platform.OS === 'ios') ? 20 : 20,
                paddingRight: (Platform.OS === 'ios') ? 20 : 20,
                // borderColor: '#333333'
            },
            reviews_length: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS13 : theme.fontsM.fontS13,
                fontWeight: (Platform.OS === 'ios') ? '600' : '500',
                fontFamily: 'Raleway',
                lineHeight: 17
            },
            review_heading: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS12 : theme.fontsM.fontS12,
                fontWeight: (Platform.OS === 'ios') ? '600' : '500',
                fontFamily: 'Lato'
            },
            review_Short: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS13 : theme.fontsM.fontS13,
                fontWeight: (Platform.OS === 'ios') ? '600' : '500',
                fontFamily: 'Raleway',
                lineHeight: 15
            },
            review_Name: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS16 : theme.fontsM.fontS14,
                fontWeight: (Platform.OS === 'ios') ? '600' : '700',
                fontFamily: 'Raleway',
                lineHeight: 19,
            },
            review_Date: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS13 : theme.fontsM.fontS13,
                fontWeight: '400',
                fontFamily: 'Lato',
                lineHeight: 15
            },
            review_Review: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS15 : theme.fontsM.fontS15,
                fontWeight: (Platform.OS === 'ios') ? '600' : '500',
            },
            all_review_text: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS15 : theme.fontsM.fontS15,
                fontWeight: (Platform.OS === 'ios') ? '600' : '500',
                fontFamily: 'Lato'
            },
            latestProduct_Text: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS13 : theme.fontsM.fontS13,
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH15 : theme.lineHeightM.lineH15,
                fontWeight: (Platform.OS === 'ios') ? '600' : '500',
                fontFamily: 'Lato'
            },
            products_Details_ListRoot: {
                height: 252,
                width: '95%',
                alignSelf: 'center',
                marginBottom: "5%"
            },
            product_Snackbar_style: {
                width: "45%",
                height: 65,
                alignSelf: 'center',
                position: 'absolute',
                zIndex: 3,
                bottom: 150,
                opacity: 0.7
            },
            textStyle: {
                fontSize: (Platform.OS === 'ios') ? 19 : 20,
                fontWeight: (Platform.OS === 'ios') ? '600' : '700',
                fontFamily: 'Lato'
            },


            /**Write Reviews Page */

            ReviewsTitle: {
                paddingTop: '4%',
                fontSize: 20,
                paddingLeft: '10%'
            },
            rating_outer_root: {
                flexDirection: 'row',
                marginTop: '5%'
            },
            starReviws: {
                marginLeft: 10,
                marginTop: 15,
                fontSize: 17,
                fontWeight: '500'
            },
            rating_description_height: {
                maxHeight: 100,
                paddingBottom: 0,
            },


            /** Product Listing Page */

            productListing_name: {
                paddingLeft: (Platform.OS === 'ios') ? "8%" : "8%",
                fontSize: (Platform.OS === 'ios') ? 18 : 18,
                fontWeight: (Platform.OS === 'ios') ? '700' : '700',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH18 : theme.lineHeightM.lineH18,
            },
            touchable_sort: {
                marginRight: (Platform.OS === 'ios') ? "8%" : "8%",
            },
            sort_Text: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS11 : theme.fontsM.fontS12,
                // lineHeight: 14.09,
                // paddingLeft: 5,
                fontFamily: 'Lato',
                fontWeight: (Platform.OS === 'ios') ? '700' : '600',
            },
            dots: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS11 : theme.fontsM.fontS12,
                // lineHeight: 14.09,
                // fontFamily: 'Raleway',
                fontWeight: (Platform.OS === 'ios') ? '700' : '600',
                paddingLeft: 2,
            },
            flatList_tochable_root: {
                height: 252,
                width: '30%',
                marginLeft: '14.5%',
                marginTop: 20,
                marginBottom: 20,
            },
            flatList_imgRoot: {
                height: 145,
                width: '90%',
            },
            flatList_contentRoot: {
                height: 95,
                width: '90%',
                display: 'flex',
                backgroundColor: '#0D0D0D',
            },

            flatList_contentText: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS10 : theme.fontsM.fontS10,
                fontWeight: (Platform.OS === 'ios') ? '300' : '400',
                fontFamily: 'Lato',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH12 : theme.lineHeightM.lineH13,
                // color: '#FFFFFF',
                // alignSelf: 'center',
            },
            flatList_oldprice: {
                // color: '#666666',
                // textDecorationLine: 'line-through',
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS14 : theme.fontsM.fontS14,
                fontWeight: (Platform.OS === 'ios') ? '600' : '700',
                // fontFamily: 'Lato',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH16 : theme.lineHeightM.lineH18
            },
            flatList_price: {
                // color: 'white',
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS14 : theme.fontsM.fontS13,
                fontWeight: (Platform.OS === 'ios') ? '600' : '400',
                // fontFamily: 'Lato',
                // textAlign: 'center',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH16 : theme.lineHeightM.lineH18,
            },
            flatList_buyNowButton: {
                width: (Platform.OS === 'ios') ? 75 : 85,
            },

            btn_btn: {
                height: 27,
                width: '90%',
                position: 'absolute',
                bottom: 0,
                justifyContent: "center",
            },
            flatList_buttonText: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS10 : theme.fontsM.fontS11,
                fontWeight: (Platform.OS === 'ios') ? '600' : '700',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH14 : theme.lineHeightM.lineH14
            },

            Snackbar_style: {
                width: (Platform.OS === 'ios') ? "50%" : "45%",
                height: 55,
                alignSelf: 'center',
                position: 'absolute',
                zIndex: 3,
                bottom: 150,
                opacity: 0.7
            },
            Snackbar_text: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS12 : theme.fontsM.fontS12,
            },
            /**login */

            loginBg: {
                width: '100%',
                height: 50,
                // marginTop: 50,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#000',
            },
            logoBackground: {
                height: '20%',
                width: '100%',
                justifyContent: 'center',
                alignSelf: 'center',
                // flex: 1
                // marginTop: 50
            },

            loginInput: {
                // width: '100%',
                // fontSize: theme.fontsT.fontS10,
                // borderTopWidth: 0,
                // borderLeftWidth: 0,
                // borderRightWidth: 0,
                // borderBottomWidth: 0,
                // backgroundColor: '#fff',
                // padding: 0,
                // height: 40,
                marginTop: 0
            },
            // inputWidth: {
            //     width: '100%',
            //     color: theme.siteColor.colorFFFFFF,
            //     // backgroundColor: 'red',
            //     top: '15%',

            // },
            forgetLabel: {
                fontSize: theme.fontsM.fontS15,
                lineHeight: theme.lineHeightM.lineH15,
                paddingTop: 0
            },

            LoginButtong: {
                // display: 'flex',
                // width: '100%',
                marginTop: -10
            },
            // buttonStyle: {
            //     padding: 20,
            //     backgroundColor: '#C68625',
            //     borderRadius: 24,
            //     marginTop: -10
            // },
            // needHelpBottom: {
            //     color: '#fff',
            //     fontWeight: '600',
            //     bottom: 0
            // },
            Containterlogin: {
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                padding: 15,
                //     paddingBottom: 10,
                //     backgroundColor: '#fff',
                //     width: '90%',
                //     borderRadius: 8,
                //     position: 'relative',
                // zIndex: 999,
                bottom: '16%',
            },
            rating_button_root: {
                marginBottom: (Platform.OS === 'ios') ? 20 : 20,
            },


        },



        /** Extra Small Device Size */

        [maxSize(DEVICE_SIZES.XS)]: {


            //** Order Screen */

            no_order_text: {
                fontSize: (Platform.OS === 'ios') ? 16 : 15,
                fontWeight: (Platform.OS === 'ios') ? '700' : '700',
            },
            shopping_btn: {
                height: 40,
                width: 150,
                borderWidth: 1,
                borderRadius: 5,
                alignSelf: 'center',
                justifyContent: 'center',
                backgroundColor: '#C68625',
                marginTop: 50
            },
            shopping_text: {
                fontSize: 16,
                alignSelf: 'center',
                color: '#fff',

            },

            /** Product Listing Page */

            productListing_name: {
                paddingLeft: (Platform.OS === 'ios') ? 20 : 20,
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS16 : theme.fontsM.fontS16,
                fontWeight: (Platform.OS === 'ios') ? '700' : '700',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH18 : theme.lineHeightM.lineH18,
            },
            touchable_sort: {
                marginRight: (Platform.OS === 'ios') ? 20 : 20,
                width: (Platform.OS === 'ios') ? 110 : 105,
                height: (Platform.OS === 'ios') ? 28 : 28,

            },
            sort_Text: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS10 : theme.fontsM.fontS11,
                lineHeight: 14.09,
                paddingLeft: 5,
                fontFamily: 'Lato',
                fontWeight: (Platform.OS === 'ios') ? '700' : '600',
            },
            dots: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS10 : theme.fontsM.fontS11,
                lineHeight: 14.09,
                fontFamily: 'Raleway',
                fontWeight: (Platform.OS === 'ios') ? '700' : '600',
                paddingLeft: 2,
            },
            flatList_tochable_root: {
                height: 252,
                width: '42.2%',
                marginLeft: '5%',
                marginTop: 20,
                marginBottom: 20,
            },
            flatList_imgRoot: {
                height: 145,
                width: '100%',
            },
            flatList_contentText: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS10 : theme.fontsM.fontS10,
                fontWeight: (Platform.OS === 'ios') ? '300' : '400',
                fontFamily: 'Lato',
                lineHeight: (Platform.OS === 'ios') ? 12 : 13,
                // color: '#FFFFFF',
                // alignSelf: 'center',
            },
            flatList_oldprice: {
                // color: '#666666',
                // textDecorationLine: 'line-through',
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS14 : theme.fontsM.fontS14,
                fontWeight: (Platform.OS === 'ios') ? '600' : '700',
                // fontFamily: 'Lato',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH16 : theme.lineHeightM.lineH18
            },
            flatList_price: {
                // color: 'white',
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS14 : theme.fontsM.fontS13,
                fontWeight: (Platform.OS === 'ios') ? '600' : '400',
                // fontFamily: 'Lato',
                // textAlign: 'center',
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH16 : theme.lineHeightM.lineH18,
            },
            flatList_buyNowButton: {
                width: (Platform.OS === 'ios') ? 80 : 90,
            },
            flatList_contentRoot: {
                height: 95,
                width: '100%',
                backgroundColor: '#0D0D0D',
                display: 'flex'
            },
            btn_btn: {
                height: 27,
                width: '100%',
                position: 'absolute',
                bottom: 0,
                alignSelf: 'center',
                alignItems: 'center',
            },
            flatList_buttonText: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS11 : theme.fontsM.fontS12,
                fontWeight: (Platform.OS === 'ios') ? '600' : '700',
                lineHeight: 13
            },
            Snackbar_style: {
                width: (Platform.OS === 'ios') ? "70%" : "65%",
                height: 55,
                alignSelf: 'center',
                position: 'absolute',
                zIndex: 3,
                bottom: 250,
                opacity: 0.7
            },

            Snackbar_text: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS12 : theme.fontsM.fontS13,
            },


            /** Write Reviews page */


            ReviewsTitle: {
                paddingTop: '8%',
                fontSize: 20,
                paddingLeft: '10%'
            },
            rating_outer_root: {
                flexDirection: 'row',
                marginTop: '10%'
            },
            rating_inner_root: {
                marginLeft: '5%'
            },
            starReviws: {
                marginLeft: 10,
                marginTop: 15,
                fontSize: 17,
                fontWeight: '500'
            },
            rating_title_root: {
                width: "90%",
                alignSelf: 'center'
            },
            rating_description_height: {
                maxHeight: 200,
                paddingBottom: 20,
            },
            rating_button_root: {
                marginTop: 20,
            },


            /** Product Detail Page */

            // safe_root: {
            //     height: '100%',
            //     width: '100%',
            //     alignSelf: 'center',
            // },
            // product_swiperRoot: {
            //     height: 400,
            //     position: 'relative'
            // },
            shadow_Box: {
                flex: 1,
                justifyContent: 'center',
                height: 50,
                width: 50,
                borderRadius: 100,
                position: 'absolute',
                bottom: '15%',
                left: '8%'
            },
            shadow_Box1: {
                flex: 1,
                justifyContent: 'center',
                height: 50,
                width: 50,
                borderRadius: 100,
                position: 'absolute',
                bottom: '15%',
                right: '8%'
            },
            product_Title_Root: {
                padding: 15,
                backgroundColor: '#fff',
                marginTop: '-12%'
            },
            Title_craggy_Text: {
                // color: '#CC933B',
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS16 : theme.fontsM.fontS15,
                fontWeight: (Platform.OS === 'ios') ? '600' : '700',
                fontFamily: 'Raleway',
                // lineHeight: 22,
                textAlign: 'left',
                // letterSpacing: 0.5
            },
            titleStyle_description: {
                // color: '#222222',
                fontFamily: 'Raleway',
                fontWeight: (Platform.OS === 'ios') ? '600' : '700',
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS16 : theme.fontsM.fontS15,
                // lineHeight: 17,
                // padding: 10
            },
            li_text: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS15 : theme.fontsM.fontS14,
                fontFamily: 'Lato',
                fontWeight: (Platform.OS === 'ios') ? '600' : '500',
            },
            review_MainHeading: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS13 : theme.fontsM.fontS14,
                fontWeight: (Platform.OS === 'ios') ? '600' : '600',
                fontFamily: 'Raleway',
                lineHeight: (Platform.OS === 'ios') ? 25 : 25,
            },
            write_review: {
                // borderWidth: 1,
                // borderRadius: 4,
                paddingTop: (Platform.OS === 'ios') ? 12 : 12,
                paddingBottom: (Platform.OS === 'ios') ? 12 : 12,
                paddingLeft: (Platform.OS === 'ios') ? 10 : 13,
                paddingRight: (Platform.OS === 'ios') ? 10 : 13,
                // borderColor: '#333333'
            },
            reviews_length: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS11 : theme.fontsM.fontS13,
                fontWeight: (Platform.OS === 'ios') ? '600' : '500',
                fontFamily: 'Raleway',
                lineHeight: 17
            },
            review_Name: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS16 : theme.fontsM.fontS14,
                fontWeight: (Platform.OS === 'ios') ? '600' : '700',
                fontFamily: 'Raleway',
                lineHeight: 19,
            },
            review_Date: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS13 : theme.fontsM.fontS13,
                fontWeight: (Platform.OS === 'ios') ? '600' : '600',
                fontFamily: 'Lato',
                lineHeight: 15
            },
            review_Review: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS15 : theme.fontsM.fontS15,
                fontWeight: (Platform.OS === 'ios') ? '600' : '500',
            },
            review_heading: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS11 : theme.fontsM.fontS12,
                fontWeight: (Platform.OS === 'ios') ? '600' : '500',
                fontFamily: 'Lato'
            },
            review_Short: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS11 : theme.fontsM.fontS13,
                fontWeight: (Platform.OS === 'ios') ? '600' : '500',
                fontFamily: 'Raleway',
                lineHeight: 15
            },
            all_review_text: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS14 : theme.fontsM.fontS14,
                fontWeight: (Platform.OS === 'ios') ? '600' : '500',
                fontFamily: 'Lato'
            },
            latestProduct_Text: {
                fontSize: (Platform.OS === 'ios') ? theme.fontsM.fontS13 : theme.fontsM.fontS13,
                lineHeight: (Platform.OS === 'ios') ? theme.lineHeightM.lineH15 : theme.lineHeightM.lineH15,
                fontWeight: (Platform.OS === 'ios') ? '600' : '500',
                fontFamily: 'Lato'
            },
            products_Details_ListRoot: {
                height: 252,
                width: '95%',
                alignSelf: 'center',
                marginBottom: "10%"
            },
            product_Snackbar_style: {
                width: "70%",
                height: 70,
                alignSelf: 'center',
                position: 'absolute',
                zIndex: 3,
                bottom: 250,
                opacity: 0.7
            },
            textStyle: {
                fontSize: (Platform.OS === 'ios') ? 18 : 18,
                fontWeight: (Platform.OS === 'ios') ? '600' : '700',
                fontFamily: 'Lato'
            },

            /**Home Page */

            category_root_img: {
                height: 80,
                width: 80,
                marginLeft: (Platform.OS === 'ios') ? 35 : 22,
                marginRight: (Platform.OS === 'ios') ? 0 : 18,
                marginTop: 30,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: '#fff'
            },
            productsListRoot: {
                height: 252,
                width: '95%',
                alignSelf: 'center'
            },

            best_touchable: {
                marginRight: 15,
            },
            skinImgText: {
                color: '#fff',
                // fontSize: 12,
                fontSize: (Platform.OS === 'ios') ? 12 : 11,
                // fontWeight: '500',
                fontWeight: (Platform.OS === 'ios') ? '600' : '500',
                lineHeight: (Platform.OS === 'ios') ? 20 : 18,
                textAlign: 'center',
                // marginTop: 5
                marginTop: (Platform.OS === 'ios') ? 10 : 11,
            },

            /** Account Page */

            account_Root: {
                height: '20%',
            },
            profileImgRoot: {
                width: "80%",
                flexDirection: 'row',
                alignSelf: 'center',
                marginVertical: '5%',
                marginHorizontal: '10%',
            },
            ImgRoot_Radius: {
                height: 80,
                width: 80,
                borderWidth: 3,
                borderColor: '#CC933B',
                borderRadius: 100,
                alignSelf: 'center'
            },
            Account_profile_image: {
                width: "100%",
                height: "100%",
                borderRadius: 50,
            },
            display_name: {
                width: 300,
            },
            redTextName: {
                color: '#CC933B',
                fontSize: 20,
                fontWeight: '700',
                fontFamily: 'Raleway',
                lineHeight: 22,
                paddingLeft: 15
            },
            user_phone: {
                width: 300,
                marginTop: 8,
            },
            redText: {
                color: '#CC933B',
                fontSize: 15,
                fontWeight: '500',
                fontFamily: 'Raleway',
                lineHeight: 22,
                paddingLeft: 15
            },
            CraggyTextRoot: {
                height: '80%',
                backgroundColor: '#ffffff',
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                marginTop: '2%',
                position: 'relative'
            },


            /** Login Page */

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
                height: '50%',
                width: '50%',
                marginTop: 0

            },
            containerInner: {
                paddingTop: 0,
                paddingBottom: 20,
                paddingLeft: 15,
                paddingRight: 15,
            },
            // loginInput: {
            //     fontSize: theme.fontsM.fontS13,
            //     borderWidth: 1,
            //     lineHeight: theme.lineHeightM.lineH15,
            // },
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
                paddingTop: 0
            },
            inputIcon: {
                top: 5,
            },
            // buttonStyle: {
            //     padding: 16,
            //     marginBottom: 25,
            // },
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
            // needHelpBottom: {
            //     color: '#fff',
            //     fontWeight: '600',
            //     bottom: 0
            // },
            LoginButtong: {
                // display: 'flex',
                // width: '100%',
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
                top: 0,
                // bottom: 0,
                // backgroundColor: 'red',
            },
            loginInput: {
                // width: '100%',
                height: 50,
                // fontSize: theme.fontsT.fontS14,
                // borderTopWidth: 0,
                // borderLeftWidth: 0,
                // borderRightWidth: 0,
                // borderBottomWidth: 0,
                // backgroundColor: '#fff',
                // padding: 0,
                marginTop: 0
            },
            Containterlogin: {
                //     display: 'flex',
                //     justifyContent: '',
                //     alignItems: "center",
                //     padding: 25,
                //     paddingBottom: 10,
                //     backgroundColor: '#fff',
                //     width: '90%',
                //     borderRadius: 8,
                //     position: 'relative',
                //     zIndex: 999,
                bottom: '16%',
            },


        },
    },
)