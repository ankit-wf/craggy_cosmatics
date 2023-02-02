
import { StyleSheet } from "react-native";

export const categoriesStyle = StyleSheet.create({
    categoriesRoot: {
        height: 150,
        backgroundColor: '#050505',
        flexDirection: 'row',
        width: "100%",
        alignContent: 'center',
        justifyContent: 'space-around'

    },
    // categoriesImgRoot: {
    //     flexDirection: 'row',
    //     width: "100%",
    //     // justifyContent: 'center',
    //     // alignSelf: 'center'
    // },
    blankSpace: {
        width: "10%",
    },
    touchableImg: {
        height: 126,
        width: "23%",
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        // marginTop: 20,
        // borderColor: '#fff',
        // borderWidth: 1
    },
    skinImgRoot: {
        height: 80,
        width: 80,
        birderWidth: 1,
        borderColor: 'white',
    },
    imgCenter: {
        alignSelf: 'center',
        height: "100%",
        width: '100%',
        birderWidth: 1,
        borderRadius: 40
    },
    skinImgText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '500',
        fontFamily: 'Raleway500',
        lineHeight: 14,
        textAlign: 'center',
        marginTop: 5,
    },
    productsListRoot: {
        height: '80%',
        width: '100%',
        alignSelf: 'center',
        marginBottom: '30%'
        // borderColor: 'red',
        // borderWidth: 1
    },
    product109: {
        height: 252,
        width: '42.2%',

        marginLeft: '5%',
        marginTop: 20,
        marginBottom: 20,
        // backgroundColor: 'blue',
        // position: 'relative',
    },
    imgRoot: {
        height: 145,
        width: '100%',
        // borderColor: 'red',
        // borderWidth: 1
    },
    productImg: {
        height: '100%',
        width: "100%"
    },
    contentRoot: {
        height: 95,
        width: '100%',
        backgroundColor: '#0D0D0D',
        // borderWidth: 1
    },
    textRoot: {
        height: 36,
        width: 130,
        alignSelf: 'center',
        // borderColor: 'red', 
        // borderWidth: 1,
        marginTop: 5
    },
    contentText: {
        fontSize: 10,
        fontWeight: '300',
        fontFamily: 'Lato300',
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
        // borderColor: 'red', 
        // borderWidth: 1, 
        marginTop: 7,
    },
    price: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Lato600',
        fontWeight: '600',
        lineHeight: 15,

    },
    spaceRoot: {
        color: 'white',
        marginLeft: 5,
        fontSize: 12
    },
    oldprice: {
        color: '#666666',
        textDecorationLine: 'line-through',
        fontSize: 14,
        fontFamily: 'Lato300',
        fontWeight: '300',
        lineHeight: 17

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
        paddingTop: 7,
        fontFamily: 'Raleway700',
        fontWeight: '700',
        fontSize: 10,
        lineHeight: 13
    },
    allProductRoot: {
        height: 45,
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between'
    },
    allProduct: {
        height: 15,
        borderBottomColor: '#222222',
        borderBottomWidth: 1,
        marginBottom: 10,
        alignSelf: 'center'
    },
    skinCare_Product: {
        height: 15,
        fontSize: 12,
        lineHeight: 12,
        fontWeight: '500',
        fontFamily: 'Raleway500',
        borderBottomColor: '#222222',
        // borderBottomWidth: 1,
        // marginBottom: 10,
        alignSelf: 'center'
    },
    allProductText: {
        fontSize: 12,
        lineHeight: 14,
        fontWeight: '500',
        fontFamily: 'Raleway500',
        color: '#222222',
    },
    filterImg: {
        alignSelf: 'center',
        height: 40, width: 40
    },

});